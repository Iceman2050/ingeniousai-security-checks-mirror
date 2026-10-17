# Ecosystem footer retrofit checklist — in-flight pages

These pages were being built by sibling coordinators during the ecosystem
lockdown (2026-10-17 ~16:00 UTC) and were deliberately NOT touched. Once
both coordinators report done (or file mtime is quiet 10+ min), apply the
standard include to each:

**Include (3 pieces):**
1. In `<head>`: `<link rel="stylesheet" href="ecosystem.css">`
2. Before the Cloudflare beacon, before `</body>`:
   ```html
   <div id="ecosystem-footer"><a href="https://github.com/Iceman2050">GitHub: 73 open-source security tools by Ingenious AI</a></div>
   <script src="ecosystem.js"></script>
   ```
   (The JS replaces the div content with the full footer: 11 platform
   links, GitHub org link, newsletter signup, mirror home. The static
   link inside is the SEO fallback.)

**Pages pending (status 2026-10-17 16:15 UTC):**
- [x] agent-ctf-arena.html (done 2026-10-17 ~16:25 UTC)
- [x] agent-report-cards.html (done 2026-10-17 ~16:25 UTC)
- [x] ai-act-countdown.html (done 2026-10-17 ~16:25 UTC)
- [x] honeypot-live.html (done 2026-10-17 ~16:25 UTC)
- [ ] index.html  (also add new-page cards for all 20 batch pages)
- [x] mcp-safety-directory.html (done 2026-10-17 ~16:25 UTC)
- [x] proof-of-innocence.html (done 2026-10-17 ~16:25 UTC)
- [ ] repomesh-cross-agent-handoff-check.html
- [ ] spot-the-ai-video.html
- [ ] state-of-ai-ad-disclosure-2026.html
- [x] which-ai-wrote-this-ad.html (done 2026-10-17 ~16:25 UTC)

After applying: re-run the ECOSYSTEM-LINKS.md matrix generator, verify
HTTP 200 on each, and IndexNow-submit the changed URLs.

**Batch-2 pages (built after the lockdown started — same include needed):**
- [ ] ai-stack-mapper.html
- [ ] agent-insurance-quote.html
- [ ] injection-hall-of-fame.html
- [ ] disclosure-registry.html
- [ ] ai-incident-bingo.html
- [ ] agent-fail-theater.html
- [ ] spot-the-ai-video.html (batch-1 straggler)
- [ ] state-of-ai-ad-disclosure-2026.html (batch-1 straggler)
