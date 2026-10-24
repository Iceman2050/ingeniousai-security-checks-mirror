# ingeniousai-security-checks-mirror

Free GitHub Pages mirror of the Ingenious AI security-checks newsjack hub.

## Why this exists

On 2026-10-15 the Netlify team's free operational credits were exhausted
(each manual Netlify deploy costs 15 credits; 300 credits/month; ~20 deploys
burned the whole month in a single day). Netlify blocked all production
deploys until the next billing cycle (**2026-11-14**). Published Netlify pages
stay live, but nothing new can ship there.

This mirror keeps new security newsjack pages shipping daily at zero cost:
**git push = deploy**, free and unlimited on GitHub Pages.

## Canonical split (do not duplicate pages across hosts)

- **Netlify hub** (`https://ingeniousai-security-checks.netlify.app/`) stays
  canonical for all EXISTING pages published on or before 2026-10-15. Mirror
  copies of those pages carry `<link rel="canonical">` pointing at the Netlify
  URL — they are a fallback, not a second publication.
- **This mirror is the permanent home for NEW newsjack pages published after
  2026-10-15.** New pages use the mirror URL in `og:url` AND in a
  `<link rel="canonical">` tag.
- Never publish the same page on both hosts. One page, one canonical home.

## Deploy procedure (future pages)

0. **UNIQUE-DATA RULE (2026-10-24, Aldo's order): no page ships without at
   least one unique-data element — a working checker, live data, or original
   sourced analysis. A template with swapped keywords does not ship.**
   Verdicts for every page live in `UNIQUE-DATA-AUDIT.md`; a page graded
   THIN there does not publish until it is upgraded and re-measured PASS.
1. Add the new `*.html` page to this repo (with mirror `og:url` + canonical,
   FAQ schema, share row per the house template).
2. Add an entry to `sitemap.xml` using the **mirror** URL.
3. Add a card link in `index.html` (relative link — it resolves to the mirror).
4. **RUN THE HARD GATE** — `./page_gate.sh <page>.html` must exit 0. It checks:
   style block, footer trio, exactly-one-footer, Cloudflare beacon, wa.me
   platform link, cross-links, primary keyword, canonical, OG tags,
   FAQ-schema==visible, quiz JS. A FAIL blocks the push — fix and re-run.
   (Added 2026-10-18 after an unstyled page shipped; the gate is the loop's teeth.)
5. Commit and push to `main`:

   ```sh
   ./page_gate.sh <page>.html && git add <page>.html sitemap.xml index.html all-links.html page_gate.sh
   git commit -m "newsjack: <story slug>"
   git push origin main
   ```

   The `&&` means the commit only happens if the gate passes.
6. GitHub Pages rebuilds automatically (usually < 60s). Verify:
   `curl -s -o /dev/null -w "%{http_code}" https://iceman2050.github.io/ingeniousai-security-checks-mirror/<page>.html`
   must return `200`.

No Netlify credits are consumed by this workflow.

## Netlify credit lesson (recorded 2026-10-15)

- Free team = 300 operational credits/month; each manual production deploy =
  15 credits (=> max ~20 deploys/month).
- Exhaustion signature: dropzone rejects uploads with
  "Account credit usage exceeded"; team banner pauses production deploys and
  Agent Runners until credits are added or the next billing cycle.
- A rejected deploy is terminal — do not retry in a loop; queue the bundle.
- Published sites stay live on remaining operational credits (this team's
  reset: **2026-11-14**).
- Post-reset rule: batch every finished page into as few deploys as possible —
  one deploy per batch, never one per page.

## Repo contents

Static HTML checker pages, `index.html` hub, `sitemap.xml`, `robots.txt`,
badge assets, and search-engine verification files. No build step, no secrets.
