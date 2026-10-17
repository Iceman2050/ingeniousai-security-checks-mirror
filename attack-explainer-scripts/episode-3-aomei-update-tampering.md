# Episode 3 — "The 10-Minute Heist": When the Update Server Lies

**Attack:** UNC7017's ephemeral AOMEI Backupper update-server tampering
**Source:** Google Threat Intelligence Group / Mandiant via The Hacker News (Oct 17, 2026) — http://thehackernews.com/2026/10/attackers-tampered-with-aomei.html ; corroboration https://dev.to/etairos/aomei-backupper-update-servers-served-a-backdoor-in-windows-of-five-to-ten-minutes-hg3
**Runtime:** 60 seconds (~130 words)
**Verified facts used:** attackers tampered with AOMEI Backupper's OWN update servers in 5–10 minute windows (May–Jul 2026), modifying the unsigned update-settings file (down_html.ini) to redirect the updater to a malicious ZIP; any copy checking for updates inside a window downloaded and RAN a backdoor; no CVE, no user action needed; payload chain CROSSROAD downloader → SHINYROAD backdoor via DLL sideloading of signed Radmin; victims across 11 countries; AnyViewer shares the same update flow; AOMEI fixed servers Jul 29 — implants on already-hit machines remain.

## Script

**[0–3s — HOOK]**
"For ten minutes, one of the world's most popular backup tools was handing out backdoors. Then it went back to normal — like nothing happened."

**[3–30s — THE ATTACK]**
"Attackers broke into the update servers of AOMEI Backupper — used by millions — and rewrote one small settings file. For five to ten minutes at a time, anyone whose software checked for updates downloaded a poisoned package instead of the real one. It installed a backdoor disguised inside a legitimate, digitally-signed program. No vulnerability. No phishing link. No click needed. You just… updated your software. Victims in eleven countries. And the same trick works on their remote-desktop tool, AnyViewer."

**[30–50s — WHY IT MATTERS]**
"Here's why this is terrifying: the tampering was designed to be invisible. Check the server a minute before or a minute after the window, and everything looked clean. Point-in-time integrity checks — the standard defense — miss this by design. The fix came in July, but if your machine updated inside a window, the implant is still there."

**[50–60s — TAKEAWAY + CTA]**
"Rule: demand cryptographically signed update manifests, and hunt for the persistence — scheduled tasks, sideloaded DLLs — not just the installer. BreachHunter's hunt playbook for this exact chain is linked below."

## Storyboard (6 × 10s shots)

1. **0–10s** — Software update dialog: progress bar, then the "update" morphs into a skull/backdoor icon for a flash, then back to normal. *Veo 3.1 prompt: "software update dialog with progress bar, the update icon briefly morphing into a skull then back to normal, subtle horror, dark UI"*
2. **10–20s** — Server room; a hand swapping one small file labeled "down_html.ini" among server racks; a 10-minute countdown timer. *Kling prompt: "dark server room, hooded figure swapping a small glowing file labeled settings among server racks, 10-minute countdown timer overlay, cinematic thriller"*
3. **20–30s** — Chain animation: ZIP package → downloader → backdoor → signed certificate badge stamped on malware (the disguise). *Seedance prompt: "animated attack chain: zip package transforming into downloader then backdoor, a legitimate digital certificate badge stamped onto malware, the disguise concept, dark background"*
4. **30–40s** — World map with 11 countries lighting up red; "NO CVE · NO CLICK · NO PHISHING" text cards. *Veo 3.1 prompt: "dark world map with eleven countries lighting up red one by one, bold text cards NO CVE NO CLICK NO PHISHING, dramatic"*
5. **40–50s** — Timeline scrubber: integrity check at 10:00 (green check), tampering at 10:05 (invisible), check at 10:10 (green check) — the gap highlighted. *Kling prompt: "timeline scrubber animation, integrity check green at 10:00, invisible tampering at 10:05, green check at 10:10, the blind gap highlighted in red, infographic style"*
6. **50–60s** — Golden seal "SIGNED MANIFESTS" stamping an update package; scheduled-task list with one entry highlighted red; BreachHunter CTA card. *Seedance prompt: "golden seal stamped onto software update package reading signed manifest, task scheduler list with one entry glowing red, call-to-action card, professional"*

**Production notes:** 16:9 + 9:16 renders. No instructions that facilitate wrongdoing — the piece explains the attack shape and the defense, never the how-to. Victim count shown as "11 countries" per reporting.
