# SCHEMA-PATTERN — checker & cheat-sheet page JSON-LD pattern (mirror)

Established 2026-10-25 when BreadcrumbList was added to the two suite pages
(`security-suite.html`, `ai-platform-security-self-check-suite.html`). Every new
checker / cheat-sheet page on this mirror reuses exactly this block set, in the
`<head>`, one `<script type="application/ld+json">` per type:

1. **Organization** — `{"@type":"Organization","name":"Ingenious AI","url":"https://getingeniousai.com"}`
2. **WebPage** — name, absolute live `url`, description, `datePublished`/`dateModified`,
   `isPartOf` the mirror WebSite, `publisher` = the Organization above.
3. **BreadcrumbList** — Home → the page, both items with absolute live URLs:
   `{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ingeniousai-security-checks-mirror-0e97b6.gitlab.io/"},{"@type":"ListItem","position":2,"name":"<Page name>","item":"https://ingeniousai-security-checks-mirror-0e97b6.gitlab.io/<page>.html"}]}`
4. **FAQPage** — ONLY when the page shows a visible FAQ. The schema questions and
   answers must match the visible `<details>` FAQ **verbatim**, and the number of
   schema Questions must equal the number of visible `<details>` blocks
   (page_gate enforces the count).

Suite-page state after 2026-10-25: both suite pages carry WebPage (pre-existing) +
FAQPage (pre-existing, matching their visible FAQs) + the BreadcrumbList block
above. New cheat-sheet pages (the 21 `*-cheat-sheet.html` pages) carry all four
blocks from birth — copy one of them as the template.
