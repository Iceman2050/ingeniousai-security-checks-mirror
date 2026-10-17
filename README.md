# ingeniousai-security-checks-mirror

Free AI-security checkers, original research, and interactive tools from
**Ingenious AI**. Live at
https://iceman2050.github.io/ingeniousai-security-checks-mirror/

## Ecosystem: everything links to everything

Every page on this mirror carries the shared ecosystem footer
(`ecosystem.js` + `ecosystem.css`, include snippet in
`_ecosystem-footer.html`):

- **All 11 Ingenious AI platforms** — WhatsApp early-access prefills
  (DisclosureGuard, ModelMinder, TermsWatch, Vibe-Code Audit,
  Rogue-Agent Defense, BreachHunter, ChatBreaker, Agent Flight
  Recorder, Agent Auth Gateway, DomainGuard, ContentCraft AI).
  Prefills stay until Nov 1, when platforms return and links flip to
  direct platform URLs.
- **GitHub org** — https://github.com/Iceman2050 (47 open-source
  security tools; every repo README carries the same 11 platform links).
- **Newsletter signup** — honest email capture (see below).
- **Mirror home** link.

Link matrix: `ECOSYSTEM-LINKS.md` (page × platforms, regenerated per batch).
In-flight retrofit checklist: `ECOSYSTEM-RETROFIT-CHECKLIST.md`.

## Email ecosystem — how signup works

`newsletter.html` is the list home. The signup form is rendered by
`ecosystem.js` on every page.

- `INGENIOUS_EMAIL_ENDPOINT` (top of `ecosystem.js`) is the single
  configurable endpoint. It is currently `null` because the email rail
  is down until Nov 1.
- **Until Nov 1:** signups are queued honestly — saved to
  `localStorage` (`ingenious_newsletter_queue_v1`) AND the visitor is
  offered a `mailto:` compose to the business inbox. The confirmation
  copy always states exactly what happened. No fake "you're subscribed".
- **On Nov 1:** set `INGENIOUS_EMAIL_ENDPOINT` to the platform
  newsletter API URL (POST JSON `{email, source_page, ts}`; 2xx =
  subscribed). Then export the localStorage queues: visitors who queued
  locally can be re-captured via the mailto path, or run a one-time
  import script against collected queues.

## Standing rules (every page)

- Cloudflare Web Analytics beacon before `</body>`
  (token `376c9de98060423683cfe15cec38f36b`). Exceptions: Google
  verification file, embed-only badge widget.
- Mirror canonicals + `og:url`, JSON-LD, Ingenious AI voice.
- No "safe" claims; honest-scope labels on every checker.
- New pages: add index card + sitemap entry, verify HTTP 200, IndexNow submit.

## Built by Ingenious AI

This project is part of the **Ingenious AI** platform suite — defensive security tooling for the AI era. Our platforms are currently in early access (full launch Nov 1) — request access to any of them on WhatsApp:

- [DisclosureGuard](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20DisclosureGuard)
- [ModelMinder](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20ModelMinder)
- [TermsWatch](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20TermsWatch)
- [Vibe-Code Audit](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20Vibe-Code%20Audit)
- [Rogue-Agent Defense](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20Rogue-Agent%20Defense)
- [BreachHunter](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20BreachHunter)
- [ChatBreaker](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20ChatBreaker)
- [Agent Flight Recorder](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20Agent%20Flight%20Recorder)
- [Agent Auth Gateway](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20Agent%20Auth%20Gateway)
- [DomainGuard](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20DomainGuard)
- [ContentCraft AI](https://wa.me/5016691053?text=Hi%20Ingenious%20AI!%20I%20want%20early%20access%20to%20ContentCraft%20AI)


> Built by Ingenious AI with Muse — get free tokens with invite code `2HCQH1`
