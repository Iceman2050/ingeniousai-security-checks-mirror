#!/bin/bash
# page_gate.sh — HARD GATE for mirror pages. No page pushes without this passing.
# Created 2026-10-18 after the nist-curve-seeds unstyled-page incident (Aldo's order:
# "the loop must be used at all times on platform creation and pages and all assets").
# Usage: ./page_gate.sh <page.html> [page2.html ...]
# Exits 0 only if EVERY gate passes for EVERY page. Exits 1 with the failing gates listed.
set -u
BEACON_TOKEN="376c9de98060423683cfe15cec38f36b"
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
done
echo "---"
if [ "$fail" -eq 0 ]; then
  echo "GATE RESULT: PASS ($checked page(s))"
else
  echo "GATE RESULT: FAIL — push BLOCKED. Fix the failing gates and re-run."
fi
exit $fail
