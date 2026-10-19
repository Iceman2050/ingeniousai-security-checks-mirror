#!/bin/bash
# page_gate.sh — HARD GATE for mirror pages. No page pushes without this passing.
# Created 2026-10-18 after the nist-curve-seeds unstyled-page incident (Aldo's order:
# "the loop must be used at all times on platform creation and pages and all assets").
# Usage: ./page_gate.sh <page.html> [page2.html ...]
# Exits 0 only if EVERY gate passes for EVERY page. Exits 1 with the failing gates listed.
set -u
BEACON_TOKEN="376c9de98060423683cfe15cec38f36b"
RDIR="/home/hatch/workspace/security-checks-mirror"
# ---- post-commit modes (run before the file loop) ----
# --registry <slug>.html: verify all-links.html + index.html + sitemap.xml persisted
#   (2026-10-18 lesson: never trust script prints — grep the committed files).
if [ "${1:-}" = "--registry" ] && [ -n "${2:-}" ]; then
  SLUG="$2"; RF=0
  rcheck() { local n="$1"; shift; if "$@" >/dev/null 2>&1; then echo "  PASS registry-$n"; else echo "  FAIL registry-$n"; RF=1; fi }
  rcheck "all-links" bash -c "grep -q 'data-url=\"$SLUG\"' '$RDIR/all-links.html'"
  rcheck "index" bash -c "grep -q 'href=\"$SLUG\"' '$RDIR/index.html'"
  rcheck "sitemap" bash -c "grep -q '$SLUG' '$RDIR/sitemap.xml'"
  if [ "$RF" -eq 0 ]; then echo "REGISTRY: PASS"; exit 0; else echo "REGISTRY: FAIL"; exit 1; fi
fi
# --live <slug>.html: verify the page returns HTTP 200 on the mirror.
if [ "${1:-}" = "--live" ] && [ -n "${2:-}" ]; then
  URL="https://iceman2050.github.io/ingeniousai-security-checks-mirror/$2"
  CODE="$(curl -s -o /dev/null -w "%{http_code}" --max-time 30 "$URL")"
  if [ "$CODE" = "200" ]; then echo "LIVE: PASS ($URL -> 200)"; exit 0
  else echo "LIVE: FAIL ($URL -> $CODE)"; exit 1; fi
fi
fail=0
checked=0
for F in "$@"; do
  checked=$((checked+1))
  echo "=== GATE: $F"
  gate() { # gate <name> <test-command...>
    local name="$1"; shift
    if "$@" >/dev/null 2>&1; then echo "  PASS $name"; else echo "  FAIL $name"; fail=1; fi
  }
  gate "file-exists" test -f "$F"
  gate "style-block-present" bash -c "grep -q '<style>' '$F'"
  gate "footer-trio-css" bash -c "grep -q 'ecosystem.css' '$F'"
  gate "footer-trio-div" bash -c "grep -q 'id=\"ecosystem-footer\"' '$F'"
  gate "footer-trio-js" bash -c "grep -q 'ecosystem.js' '$F'"
  gate "exactly-one-footer" bash -c "! grep -q '<footer' '$F'"
  gate "cloudflare-beacon" bash -c "grep -q '$BEACON_TOKEN' '$F'"
  gate "platform-link-wa.me" bash -c "grep -q 'wa.me' '$F'"
  gate "cross-links-present" bash -c "grep -qi 'related checks\|xlinks\|crosslink' '$F'"
  gate "primary-keyword" bash -c "grep -q 'data-primary-keyword' '$F'"
  gate "canonical-tag" bash -c "grep -q 'rel=\"canonical\"' '$F'"
  gate "og-tags" bash -c "grep -q 'og:title' '$F'"
  # FAQ schema == visible <details> (only if FAQPage schema present)
  if grep -q 'FAQPage' "$F"; then
    schema_q=$(grep -o '"@type":[[:space:]]*"Question"' "$F" | wc -l)
    vis_q=$(grep -c '<details>' "$F")
    if [ "$schema_q" -gt 0 ] && [ "$schema_q" -eq "$vis_q" ]; then
      echo "  PASS faq-schema-matches-visible ($schema_q)"
    else
      echo "  FAIL faq-schema-matches-visible (schema=$schema_q visible=$vis_q)"; fail=1
    fi
  fi
  # quiz JS sanity (only if quiz markup present)
  if grep -q 'quiz-check' "$F"; then
    gate "quiz-js-present" bash -c "grep -q 'getElementById(.quiz-check.)' '$F'"
  fi
  # CODE VERIFICATION (Aldo's order 2026-10-18 — the Loop Engineering code-verify
  # technique on ALL gates, no exceptions): every inline <script> block must
  # pass node syntax check; every JSON-LD block must parse; no eval() in page JS.
  if grep -q '<script' "$F"; then
    gate "js-syntax" bash -c "python3 -c \"
import re, subprocess, sys, tempfile, os
html = open('$F').read()
# inline scripts only: no src=, and not JSON-LD blocks
blocks = re.findall(r'<script(?![^>]*src=)(?![^>]*ld\+json)[^>]*>(.*?)</script>', html, re.S | re.I)
for i, js in enumerate(blocks):
    js = js.strip()
    if not js:
        continue
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as tf:
        tf.write(js); p = tf.name
    r = subprocess.run(['node', '--check', p], capture_output=True, text=True)
    os.unlink(p)
    if r.returncode != 0:
        print(f'block {i}: ' + r.stderr[:300]); sys.exit(1)
\""
    gate "js-no-eval" bash -c "! python3 -c \"
import re
html = open('$F').read()
blocks = re.findall(r'<script(?![^>]*src=)(?![^>]*ld\+json)[^>]*>(.*?)</script>', html, re.S | re.I)
print(any('eval(' in b for b in blocks))
\" | grep -q True"
    gate "jsonld-valid" bash -c "python3 - '$F' << 'PYEOF'
import re, json, sys
html = open(sys.argv[1]).read()
blocks = re.findall(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', html, re.S | re.I)
[json.loads(b) for b in blocks]
PYEOF"
  fi
  # SEO / AEO / GEO visibility verifier (28 checks: 18 SEO, 5 AEO, 5 GEO).
  # NO TOLERANCE (Aldo's order 2026-10-18 — "at all times use high volume
  # keywords"): seo.keyword_volume is a HARD gate. The primary keyword must be
  # in keywords.json with a real researched volume ≥1000/mo. Any verifier
  # failure blocks the push.
  VV_BIN="/home/hatch/workspace/visibility-loop/.venv/bin/python"
  VV_SCRIPT="/home/hatch/workspace/visibility-loop/visibility_verifier.py"
  if [ -x "$VV_BIN" ] && [ -f "$VV_SCRIPT" ]; then
    VV_OUT="$("$VV_BIN" "$VV_SCRIPT" "$F" 2>&1)"
    VV_SCORE="$(echo "$VV_OUT" | grep -oE 'SCORE: [0-9]+/[0-9]+' | tail -1)"
    VV_FAILS="$(echo "$VV_OUT" | grep -E '^CHECK .* FAIL' || true)"
    if [ -z "$VV_FAILS" ]; then
      echo "  PASS visibility-verifier ($VV_SCORE)"
    else
      echo "  FAIL visibility-verifier ($VV_SCORE):"
      echo "$VV_FAILS" | sed 's/^/    /'
      fail=1
    fi
  else
    echo "  FAIL visibility-verifier (verifier not found — refusing to pass blind)"; fail=1
  fi
  # BRAND RULE (Aldo's order — public brand is "Ingenious AI" only): the user's
  # personal name must never appear on a public page.
  gate "brand-no-personal-name" bash -c "! grep -qi 'Aldo Guerra' '$F'"
  # WARNBOX LEAK (2026-10-18 sweep): leaked internal "Reddit pre-flight"
  # warnboxes must never ship on a page.
  gate "no-warnbox-leak" bash -c "! grep -qi 'reddit pre-flight' '$F'"
  # INTAKE-LOG: every shipped page must be logged (Aldo's standing workflow).
  gate "intake-logged" bash -c "grep -q \"\$(basename '$F' .html)\" /home/hatch/workspace/incoming-docs/INTAKE-LOG.md"
  # SKILLS RULE (Aldo's hard permanent lock 2026-10-11): the maker must declare
  # which skills were searched/used for the build. Format in the page head:
  #   <!-- skills-used: unlazy-gates, documents -->
  gate "skills-declared" bash -c "grep -q '<!-- skills-used:' '$F'"
done
echo "---"
# EXPERIMENT LOG (Loop Engineering method — log every verification run).
GATE_LOG="/home/hatch/workspace/security-checks-mirror/page-gate-log.md"
if [ ! -f "$GATE_LOG" ]; then
  printf '# Page gate log\n\nAppend-only. Every page_gate.sh run records: date, page, verifier score, verdict.\n\n| Date (UTC) | Page | Score | Verdict |\n|---|---|---|---|\n' > "$GATE_LOG"
fi
for F in "$@"; do
  case "$F" in --*) continue;; esac
  echo "| $(date -u +%Y-%m-%dT%H:%MZ) | $(basename "$F") | ${VV_SCORE:-n/a} | $([ "$fail" -eq 0 ] && echo PASS || echo FAIL) |" >> "$GATE_LOG"
done
if [ "$fail" -eq 0 ]; then
  echo "GATE RESULT: PASS ($checked page(s))"
else
  echo "GATE RESULT: FAIL — push BLOCKED. Fix the failing gates and re-run."
fi
exit $fail
