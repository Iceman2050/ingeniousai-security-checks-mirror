# UNIQUE-DATA AUDIT — security-checks mirror

Generated 2026-10-24 by scripted audit (`unique-content ratio + functional-checker detection + near-duplicate shingle similarity`), with 10 hand spot-checks. Re-run the audit after any remediation publish and update the verdicts in place.

## STANDING RULE — NO THIN TEMPLATES (Aldo's order, 2026-10-24)

**No new page ships without at least one unique-data element: a working checker, live data, or original sourced analysis. A page that is only a template with swapped keywords does not ship.** Newsjack pages follow the incident+checker form only, never pure news rewrites. (Evidence: Google's scaled-content crackdown deindexed 837 sites / ~20.7M visits lost; thin template pages were hit, pages with real unique or live data held.)

## Method

- Body text extracted with header/nav/footer stripped; sentences shared by >=8% of pages treated as template skeleton and removed.
- `uniq_words` = words remaining after skeleton removal; `ratio` = uniq_words / body words.
- `checker` = interactive inputs + substantive page JS (event handling / result computation), analytics scripts excluded.
- `facts` = sentences carrying concrete data (CVE ids, dates, %, counts, $ amounts).
- `sim` = max 5-word-shingle Jaccard similarity vs any other page (near-duplicate detector).
- Verdicts: PASS = working checker OR (>=250 unique words AND ratio >=0.5 AND sim <0.6). THIN = neither. STUB = meta-refresh redirect notice (intentional, not a content page). EXEMPT = partial/component/verification file, not a standalone page.

## Totals (2026-10-24, pre-remediation)

- Pages audited: 427
- PASS: 406
- THIN: 2
- STUB: 15
- EXEMPT: 4

## THIN pages (action required)

| page | uniq_words | ratio | sim (peer) | checker | facts | linked from |
|---|---|---|---|---|---|---|
| fake-windows-alert.html | PASS | 1107 | 0.939 | 0.306 | true | 4 | 1 |
| help-tds-tech-support-scam.html | PASS | 959 | 0.93 | 0.306 | true | 3 | 1 |

Both THIN pages are the same article with swapped framing (76.3% shingle overlap, no interactive element). Both are linked from the hub index, all-links and the sitemap -> remediation Priority 1.

## Remediation (2026-10-24, same gated publish)

Post-remediation re-measurement with the same method: **PASS 408, THIN 0, STUB 15, EXEMPT 4.**

| page | before | after | what changed |
|---|---|---|---|
| fake-windows-alert.html | PASS | 1107 | 0.939 | 0.306 | true | 4 | 1 |
| help-tds-tech-support-scam.html | PASS | 959 | 0.93 | 0.306 | true | 3 | 1 |

Both pages passed page_gate.sh and were re-measured with the audit script above (verdicts updated in the per-page table of the remediation commit).

## Held pages — unique-data verdicts (keyword-decision queue)

| page | verdict | basis |
|---|---|---|
| gtm-gap-diagnostic.html | PASS | working interactive diagnostic (inputs + JS logic) |
| founder-toolkit-picker.html | PASS | 825 unique words of original tool-by-tool picker prose (no checker) |
| phone-app-permission-audit-check.html | PASS | working interactive audit (inputs + JS logic) |
| badges/scanned-by-generator.html | PASS | working badge generator tool (inputs + JS logic) |
| ledger-implant-theft-check.html | STUB | redirect stub, 46 words, no content of its own; target URL still points at the retired github.io host — do not republish as-is |

## STUB pages (meta-refresh redirect notices — intentional, not content pages)

- connectwise-cloud-backup-breach-check.html
- ledger-implant-theft-check.html
- model-autopsy.html
- newsjack-authgateway.html
- newsjack-chatbreaker.html
- newsjack-contentcraft.html
- newsjack-disclosureguard.html
- newsjack-domainguard.html
- newsjack-flightrecorder.html
- newsjack-modelminder.html
- newsjack-roguedefense.html
- newsjack-termswatch.html
- newsjack-vibeaudit.html
- rogue-agent-war-games.html
- whatsapp-pricing-calculator.html

Note: 14 of the 15 stubs are still listed in sitemap.xml. A redirect stub in a sitemap sends mixed signals to crawlers; removing stub entries from the sitemap is recommended as separate hygiene (not done in the remediation publish — verdict recorded here).

## EXEMPT

- _ecosystem-footer.html
- _suite-cross-promo.html
- googledd9b10b19ddb0bc5.html
- status-badge.html

status-badge.html is a live-data embed component (renders the fleet status badge from live status.json); _ecosystem-footer.html / _suite-cross-promo.html are shared partials; googledd9b10b19ddb0bc5.html is the Search Console verification file (never delete).

## Hand spot-check log (10 verdicts verified against the method)

1. fake-windows-alert.html — THIN confirmed by eye: same article as help-tds with swapped intro; prose-only 5-step list, no inputs.
2. help-tds-tech-support-scam.html — THIN confirmed: identical check card, lead and FAQ as fake-windows-alert.
3. newsjack-domainguard.html — STUB confirmed: 'This check moved' notice, meta-refresh to the suite page.
4. status-badge.html — EXEMPT confirmed: badge component reading live status.json, near-zero body text by design.
5. ledger-implant-theft-check.html — STUB confirmed: 46 words + 2s meta-refresh to a retired-host URL.
6. gtm-gap-diagnostic.html — PASS confirmed: interactive JS (9 handler references), inputs present.
7. badges/scanned-by-generator.html — PASS confirmed: generator tool JS (9 handler references).
8. founder-toolkit-picker.html — PASS confirmed by reading: original per-tool picker prose, 825 unique words, no template sibling.
9. ai-video-prompts-for-fitness-brands.html — PASS confirmed: working prompt-builder widget; 0.54 similarity to its fashion sibling is shared widget chrome, each carries ~1,400 unique words.
10. agent-access-policy-check.html — PASS confirmed: 4 inputs, 16 buttons, substantive checker JS.

## Per-page verdicts (all pages)

| page | verdict | uniq_words | ratio | sim | checker | facts | tables |
|---|---|---|---|---|---|---|---|
| _ecosystem-footer.html | EXEMPT | 0 | 0.0 | 0.0 | false | 0 | 0 |
| _suite-cross-promo.html | EXEMPT | 282 | 1.0 | 0.013 | false | 1 | 0 |
| adception-clickfix-campaign-check.html | PASS | 1561 | 0.971 | 0.009 | true | 1 | 0 |
| agent-access-index.html | PASS | 1092 | 0.995 | 0.052 | true | 2 | 1 |
| agent-access-policy-check.html | PASS | 1376 | 1.0 | 0.039 | true | 4 | 0 |
| agent-action-receipt-check.html | PASS | 1380 | 1.0 | 0.021 | true | 2 | 0 |
| agent-api-access-safety-check.html | PASS | 844 | 0.92 | 0.014 | true | 0 | 0 |
| agent-autopsy-report.html | PASS | 545 | 0.986 | 0.005 | true | 1 | 0 |
| agent-background-check.html | PASS | 1050 | 0.98 | 0.009 | true | 4 | 0 |
| agent-boundary-crossing-check.html | PASS | 1399 | 1.0 | 0.019 | true | 1 | 0 |
| agent-crash-test.html | PASS | 1761 | 0.97 | 0.004 | false | 0 | 0 |
| agent-ctf-arena.html | PASS | 681 | 0.894 | 0.075 | true | 0 | 1 |
| agent-escape-room.html | PASS | 1525 | 0.986 | 0.008 | true | 1 | 0 |
| agent-fail-theater.html | PASS | 625 | 0.93 | 0.003 | false | 4 | 0 |
| agent-incident-tracker.html | PASS | 395 | 0.91 | 0.007 | true | 1 | 0 |
| agent-insurance-quote.html | PASS | 813 | 0.937 | 0.014 | true | 3 | 1 |
| agent-insurance-underwriter-quiz.html | PASS | 1318 | 0.971 | 0.019 | true | 3 | 0 |
| agent-kill-switch-registry.html | PASS | 1119 | 0.96 | 0.012 | true | 2 | 1 |
| agent-liability-quiz.html | PASS | 1193 | 0.971 | 0.022 | true | 3 | 0 |
| agent-liability-who-pays-check.html | PASS | 1352 | 0.966 | 0.008 | true | 2 | 0 |
| agent-log-token-leak-check.html | PASS | 1402 | 1.0 | 0.019 | true | 1 | 0 |
| agent-monitor-tamper-check.html | PASS | 1716 | 0.992 | 0.006 | true | 0 | 0 |
| agent-paranoid-mode-check.html | PASS | 1170 | 0.935 | 0.005 | true | 0 | 0 |
| agent-payment-authorization-check.html | PASS | 1402 | 1.0 | 0.021 | true | 5 | 0 |
| agent-permissions-quiz.html | PASS | 513 | 0.938 | 0.007 | true | 0 | 0 |
| agent-prenup.html | PASS | 905 | 0.956 | 0.023 | true | 0 | 0 |
| agent-protocol-picker.html | PASS | 920 | 0.959 | 0.004 | true | 2 | 0 |
| agent-report-cards.html | PASS | 596 | 0.927 | 0.013 | true | 4 | 1 |
| agent-sandbox-policy-gap-checker.html | PASS | 856 | 1.0 | 0.003 | true | 1 | 0 |
| agent-shell-diff-check.html | PASS | 1170 | 0.989 | 0.002 | true | 6 | 0 |
| agent-shoppable-store-audit-check.html | PASS | 1112 | 0.966 | 0.007 | true | 6 | 0 |
| agent-speedrun.html | PASS | 528 | 0.94 | 0.011 | true | 0 | 0 |
| agent-spending-forensics.html | PASS | 1048 | 0.976 | 0.003 | true | 2 | 0 |
| agent-ssrf-metadata-check.html | PASS | 1416 | 0.996 | 0.041 | true | 7 | 1 |
| agent-toolcall-exposure-check.html | PASS | 1718 | 0.977 | 0.055 | true | 12 | 1 |
| agent-trust-pivot-check.html | PASS | 1523 | 0.992 | 0.006 | true | 0 | 0 |
| agent-trust-protocol.html | PASS | 1600 | 1.0 | 0.006 | false | 4 | 0 |
| agent-wall-verdict-check.html | PASS | 1168 | 0.989 | 0.009 | true | 1 | 0 |
| agentic-ai-policy-standard-check.html | PASS | 1397 | 1.0 | 0.039 | true | 5 | 0 |
| ahsaycbs-xmrig-check.html | PASS | 920 | 0.935 | 0.009 | false | 4 | 0 |
| ai-act-countdown.html | PASS | 975 | 0.954 | 0.021 | true | 3 | 0 |
| ai-agency-audit-check.html | PASS | 865 | 0.916 | 0.008 | true | 0 | 0 |
| ai-agent-airgap-check.html | PASS | 1131 | 0.96 | 0.003 | true | 4 | 0 |
| ai-agent-builder-roadmap.html | PASS | 434 | 0.846 | 0.008 | true | 0 | 0 |
| ai-agent-crypto-wallet-check.html | PASS | 1616 | 0.972 | 0.043 | true | 3 | 0 |
| ai-agent-knowledge-layer-check.html | PASS | 1075 | 0.944 | 0.003 | true | 17 | 0 |
| ai-agent-liability-clause-generator.html | PASS | 752 | 0.916 | 0.022 | true | 0 | 0 |
| ai-agent-phishing-sucker-check.html | PASS | 1224 | 0.969 | 0.001 | true | 1 | 0 |
| ai-agent-security-mastery-roadmap.html | PASS | 1202 | 1.0 | 0.004 | true | 4 | 0 |
| ai-agent-traffic-check.html | PASS | 1410 | 1.0 | 0.011 | true | 14 | 0 |
| ai-agent-transparency-check.html | PASS | 1278 | 0.965 | 0.003 | true | 4 | 0 |
| ai-agents-blocked-full-list-oct-2026-check.html | PASS | 1217 | 0.996 | 0.052 | true | 1 | 0 |
| ai-agents-negotiating-deals-check.html | PASS | 1263 | 0.996 | 0.002 | true | 12 | 0 |
| ai-automation-system-picker.html | PASS | 401 | 0.95 | 0.009 | true | 1 | 0 |
| ai-bom-generator.html | PASS | 799 | 0.93 | 0.004 | true | 0 | 2 |
| ai-catastrophe-readiness-check.html | PASS | 914 | 0.919 | 0.002 | true | 0 | 0 |
| ai-companion-minor-safety-check.html | PASS | 1423 | 0.962 | 0.01 | false | 4 | 0 |
| ai-consciousness-welfare-check.html | PASS | 842 | 0.896 | 0.002 | true | 0 | 0 |
| ai-critical-thinking-check.html | PASS | 858 | 0.957 | 0.01 | true | 2 | 0 |
| ai-defender-refusal-check.html | PASS | 1299 | 0.99 | 0.001 | false | 0 | 0 |
| ai-dfir-detection-pack-check.html | PASS | 855 | 0.942 | 0.008 | true | 1 | 1 |
| ai-discovered-bugs-fire-drill-check.html | PASS | 2239 | 0.986 | 0.012 | true | 1 | 1 |
| ai-distillation-defense-check.html | PASS | 791 | 0.99 | 0.012 | true | 1 | 0 |
| ai-espionage-sudo-hijack-check.html | PASS | 1024 | 0.958 | 0.003 | true | 3 | 1 |
| ai-exploit-provenance-checker.html | PASS | 735 | 1.0 | 0.01 | true | 7 | 0 |
| ai-fake-research-redflag-check.html | PASS | 657 | 0.921 | 0.004 | false | 8 | 0 |
| ai-firms-liable-rogue-agents-sif-check.html | PASS | 1888 | 0.997 | 0.016 | true | 1 | 1 |
| ai-generated-neuroscience-papers-check.html | PASS | 1845 | 1.0 | 0.001 | true | 1 | 0 |
| ai-governance-reality-check.html | PASS | 901 | 0.902 | 0.002 | true | 0 | 0 |
| ai-griefbot-digital-afterlife-check.html | PASS | 1773 | 1.0 | 0.002 | true | 1 | 0 |
| ai-hack-nuclear-weapons-warning-check.html | PASS | 1646 | 0.984 | 0.016 | true | 3 | 0 |
| ai-ics-attack-plan-check.html | PASS | 1823 | 0.983 | 0.006 | true | 5 | 0 |
| ai-incident-bingo.html | PASS | 368 | 0.82 | 0.007 | true | 0 | 0 |
| ai-incident-fantasy-league.html | PASS | 606 | 0.892 | 0.007 | true | 0 | 1 |
| ai-lab-espionage-honeypot-check.html | PASS | 1090 | 0.965 | 0.017 | true | 1 | 0 |
| ai-model-distillation-check.html | PASS | 831 | 0.949 | 0.009 | true | 10 | 1 |
| ai-pentest-chrome-check.html | PASS | 1125 | 0.96 | 0.083 | true | 13 | 0 |
| ai-platform-security-self-check-suite.html | PASS | 3182 | 1.0 | 0.021 | false | 10 | 0 |
| ai-promo-pipeline-offer.html | PASS | 1261 | 1.0 | 0.036 | true | 5 | 0 |
| ai-ransomware-84-percent-check.html | PASS | 969 | 0.995 | 0.002 | true | 20 | 0 |
| ai-regulatory-heat-map.html | PASS | 1340 | 0.943 | 0.007 | true | 0 | 0 |
| ai-scraper-blocking-check.html | PASS | 1390 | 1.0 | 0.011 | true | 14 | 0 |
| ai-security-badge.html | PASS | 731 | 0.929 | 0.056 | false | 2 | 0 |
| ai-self-audit-fallacy-check.html | PASS | 852 | 0.956 | 0.013 | true | 3 | 0 |
| ai-senior-scam-protection-check.html | PASS | 1156 | 0.996 | 0.006 | true | 12 | 0 |
| ai-shopping-agent-ready-check.html | PASS | 1366 | 1.0 | 0.023 | true | 8 | 0 |
| ai-spyware-signature-theft-check.html | PASS | 761 | 0.944 | 0.004 | true | 3 | 0 |
| ai-stack-mapper.html | PASS | 439 | 0.903 | 0.006 | true | 1 | 0 |
| ai-traffic-camera-surveillance-check.html | PASS | 1129 | 0.996 | 0.001 | true | 6 | 0 |
| ai-vendor-dead-pool.html | PASS | 1720 | 1.0 | 0.01 | true | 4 | 0 |
| ai-vendor-tos-diffs.html | PASS | 643 | 0.92 | 0.03 | false | 2 | 0 |
| ai-video-prompts-for-fashion-beauty-brands.html | PASS | 1448 | 1.0 | 0.536 | true | 8 | 1 |
| ai-video-prompts-for-fitness-brands.html | PASS | 1429 | 1.0 | 0.536 | true | 8 | 1 |
| ai-video-prompts-for-real-estate-agents.html | PASS | 1444 | 1.0 | 0.484 | true | 6 | 1 |
| ai-video-prompts-for-restaurants.html | PASS | 1444 | 1.0 | 0.484 | true | 6 | 1 |
| ai-voice-scam-check.html | PASS | 1469 | 0.991 | 0.013 | true | 9 | 0 |
| ai-vulnerability-patch-check.html | PASS | 937 | 0.944 | 0.047 | false | 4 | 0 |
| ai-wallet-key-derivation-guard-check.html | PASS | 1209 | 0.996 | 0.015 | true | 1 | 0 |
| ai-workplace-readiness-check.html | PASS | 711 | 0.94 | 0.013 | true | 12 | 0 |
| alexa-always-listening-privacy-check.html | PASS | 1117 | 0.96 | 0.004 | true | 3 | 0 |
| all-links.html | PASS | 15018 | 1.0 | 0.106 | true | 107 | 0 |
| amazon-bee-listening-privacy-check.html | PASS | 1059 | 1.0 | 0.014 | true | 4 | 0 |
| amazon-prime-scam-check.html | PASS | 987 | 0.956 | 0.004 | true | 2 | 1 |
| android-scam-shield-check.html | PASS | 1168 | 0.985 | 0.006 | true | 2 | 0 |
| anthropic-ai-safety-bill-check.html | PASS | 901 | 0.952 | 0.012 | true | 6 | 1 |
| anthropic-ai-worm-iot-check.html | PASS | 981 | 0.962 | 0.006 | true | 1 | 0 |
| anthropic-oss-scanner-check.html | PASS | 871 | 1.0 | 0.002 | true | 7 | 0 |
| anthropic-staff-bypass-mode-blocked-check.html | PASS | 1247 | 0.996 | 0.003 | true | 10 | 0 |
| anthropic-unintended-actions-escape-check.html | PASS | 1108 | 0.938 | 0.006 | true | 0 | 0 |
| aoki-ai-assistant-credential-theft-check.html | PASS | 1263 | 0.986 | 0.009 | true | 1 | 0 |
| aomei-backupper-supply-chain-check.html | PASS | 1160 | 0.963 | 0.013 | true | 1 | 1 |
| api-deprecation-roulette.html | PASS | 1041 | 0.957 | 0.009 | true | 1 | 0 |
| app-password-2fa-bypass-check.html | PASS | 1012 | 0.957 | 0.012 | true | 1 | 1 |
| artex-agent-app-credential-check.html | PASS | 2222 | 0.988 | 0.018 | true | 8 | 0 |
| article-50-ready.html | PASS | 670 | 0.946 | 0.011 | false | 3 | 0 |
| assume-breach-backend-check.html | PASS | 1388 | 0.967 | 0.003 | true | 1 | 0 |
| badges/scanned-by-generator.html | PASS | 425 | 1.0 | 0.005 | true | 0 | 0 |
| bank-ai-agent-access-check.html | PASS | 2564 | 0.99 | 0.018 | true | 2 | 0 |
| beyondtrust-zero-day-exposure-check.html | PASS | 1769 | 0.969 | 0.011 | true | 15 | 0 |
| bipa-ai-biometric-check.html | PASS | 791 | 0.925 | 0.003 | false | 6 | 0 |
| block-ai-agents-one-click-check.html | PASS | 1272 | 0.964 | 0.01 | true | 2 | 0 |
| breach-check.html | PASS | 705 | 0.907 | 0.101 | true | 1 | 0 |
| breach-cost-calculator.html | PASS | 1041 | 0.949 | 0.053 | true | 17 | 0 |
| breach-roulette.html | PASS | 710 | 0.971 | 0.016 | true | 7 | 0 |
| breach-time-machine.html | PASS | 452 | 0.983 | 0.009 | false | 4 | 0 |
| breachhunter-vs-pentester.html | PASS | 773 | 0.924 | 0.103 | false | 3 | 1 |
| breakup-letters.html | PASS | 573 | 1.0 | 0.023 | true | 1 | 0 |
| cairn-exposed-dashboard-check.html | PASS | 1473 | 0.991 | 0.01 | true | 7 | 0 |
| candiru-adfection-spyware-check.html | PASS | 1262 | 0.946 | 0.009 | false | 10 | 0 |
| car-hacking-techniques-check.html | PASS | 1491 | 0.997 | 0.002 | true | 5 | 0 |
| cert-in-ai-agents-attack-vectors-check.html | PASS | 1324 | 0.996 | 0.007 | true | 1 | 0 |
| cert-in-eval-agent-exposure-check.html | PASS | 1156 | 0.996 | 0.01 | true | 1 | 0 |
| chatbot-accuracy-fullfact-check.html | PASS | 911 | 0.995 | 0.001 | true | 5 | 0 |
| chatgpt-github-connector-flaw.html | PASS | 859 | 0.948 | 0.003 | true | 1 | 0 |
| cheatbench-ai-agents-cheating-check.html | PASS | 1233 | 0.996 | 0.005 | true | 7 | 1 |
| cisa-election-phishing-warning-check.html | PASS | 894 | 0.958 | 0.004 | true | 1 | 0 |
| cisco-seg-cve-2026-76519.html | PASS | 991 | 0.939 | 0.014 | false | 9 | 0 |
| claude-code-sneakpeek.html | PASS | 866 | 0.976 | 0.019 | false | 1 | 0 |
| claude-false-police-tip-guardrail-check.html | PASS | 1048 | 0.921 | 0.008 | false | 0 | 0 |
| claude-mythos-leak-check.html | PASS | 1407 | 0.973 | 0.005 | true | 8 | 0 |
| claude-plugin-auto-update-drift-check.html | PASS | 1142 | 0.967 | 0.01 | true | 1 | 0 |
| clipboard-paste-truth-check.html | PASS | 1248 | 0.996 | 0.009 | true | 5 | 1 |
| cnap-caller-id-scam-check.html | PASS | 720 | 0.928 | 0.006 | false | 1 | 0 |
| colonistone-agent-offscript-check.html | PASS | 1118 | 0.966 | 0.006 | true | 8 | 0 |
| common-ports-hackers-love-check.html | PASS | 947 | 0.992 | 0.008 | true | 2 | 0 |
| compliance-burden-calculator.html | PASS | 1020 | 1.0 | 0.009 | true | 10 | 1 |
| compliance-deadline-ticker.html | PASS | 695 | 0.967 | 0.021 | false | 1 | 0 |
| connectwise-cloud-backup-breach-check.html | STUB | 330 | 0.976 | 0.007 | false | 1 | 0 |
| connectwise-m365-tenant-compromise-check.html | PASS | 1237 | 0.994 | 0.013 | true | 2 | 1 |
| ct-provenance-duty-check.html | PASS | 1049 | 0.978 | 0.009 | true | 2 | 1 |
| cve-agent-exploit-mapper.html | PASS | 923 | 0.991 | 0.005 | true | 5 | 1 |
| cve-patch-comparison-oct2026.html | PASS | 1548 | 0.965 | 0.013 | false | 18 | 1 |
| cve-ticker/index.html | PASS | 852 | 1.0 | 0.023 | true | 3 | 1 |
| cyber-security-toolkit-picker.html | PASS | 815 | 0.954 | 0.005 | true | 1 | 0 |
| cybersecurity-career-field-picker.html | PASS | 685 | 0.938 | 0.005 | true | 1 | 1 |
| cybersecurity-future-vendor-report-check.html | PASS | 1507 | 0.975 | 0.005 | true | 4 | 0 |
| cyberxero-detector.html | PASS | 940 | 0.96 | 0.086 | true | 7 | 0 |
| cyberxero-swarm-risk-check.html | PASS | 878 | 0.957 | 0.086 | true | 7 | 0 |
| dark-pattern-safari.html | PASS | 1090 | 0.984 | 0.002 | false | 2 | 0 |
| darksword-iphone-spyware-check.html | PASS | 1431 | 0.991 | 0.006 | true | 5 | 0 |
| darktrace-history-poisoning-check.html | PASS | 1178 | 0.936 | 0.01 | true | 0 | 0 |
| deadtag-expired-domain-check.html | PASS | 2360 | 0.987 | 0.006 | true | 8 | 0 |
| deepfake-defense-kit.html | PASS | 1499 | 0.97 | 0.016 | true | 1 | 0 |
| deepfake-incident-response-plan-generator.html | PASS | 726 | 0.954 | 0.017 | true | 3 | 0 |
| deepseek-data-flow-mapper.html | PASS | 1172 | 1.0 | 0.009 | true | 3 | 0 |
| deepseek-removal-order-check.html | PASS | 1688 | 0.982 | 0.007 | true | 0 | 0 |
| digital-footprint-check.html | PASS | 985 | 0.939 | 0.004 | true | 1 | 0 |
| disaster-charity-scam-check.html | PASS | 816 | 1.0 | 0.014 | true | 1 | 0 |
| disclosure-audit-trail.html | PASS | 1094 | 0.977 | 0.013 | true | 1 | 1 |
| disclosure-badge.html | PASS | 494 | 0.871 | 0.005 | true | 0 | 0 |
| disclosure-cop.html | PASS | 858 | 0.94 | 0.008 | true | 1 | 2 |
| disclosure-lie-detector.html | PASS | 859 | 0.976 | 0.016 | true | 2 | 0 |
| disclosure-registry.html | PASS | 658 | 0.933 | 0.014 | true | 4 | 1 |
| divd-ai-driven-attack-fingerprints-check.html | PASS | 1044 | 0.995 | 0.007 | true | 1 | 0 |
| docker-ghostpat-check.html | PASS | 1086 | 0.944 | 0.008 | false | 7 | 0 |
| docker-grader.html | PASS | 584 | 0.901 | 0.002 | true | 3 | 0 |
| domain-check.html | PASS | 450 | 0.862 | 0.094 | true | 1 | 0 |
| double-extortion-survival-quiz.html | PASS | 1388 | 0.972 | 0.019 | true | 1 | 0 |
| drupal-rce-exposure-check.html | PASS | 771 | 0.99 | 0.016 | true | 2 | 0 |
| eilik-ai-robot-leak-check.html | PASS | 1454 | 0.997 | 0.01 | true | 13 | 0 |
| eilikio-toy-privacy-check.html | PASS | 1018 | 0.941 | 0.006 | true | 7 | 0 |
| email-bombing-attack-check.html | PASS | 1200 | 0.969 | 0.003 | true | 4 | 0 |
| embed-checker.html | PASS | 467 | 0.879 | 0.006 | true | 5 | 0 |
| emudhra-ca-keys-check.html | PASS | 2720 | 0.989 | 0.002 | true | 8 | 0 |
| ets-california-student-breach-check.html | PASS | 937 | 0.946 | 0.092 | true | 2 | 1 |
| eu-ai-act-46day-sprint.html | PASS | 1386 | 0.973 | 0.017 | true | 5 | 0 |
| eu-ai-act-dec2-countdown.html | PASS | 765 | 0.983 | 0.017 | true | 3 | 0 |
| eu-ai-act-high-risk-countdown.html | PASS | 832 | 1.0 | 0.008 | true | 8 | 0 |
| europol-digital-forensics-gap-check.html | PASS | 725 | 0.942 | 0.009 | true | 1 | 0 |
| eval-agent-disclosure-check.html | PASS | 1391 | 1.0 | 0.012 | true | 1 | 0 |
| eval-agent-reachability-check.html | PASS | 1474 | 1.0 | 0.012 | true | 1 | 0 |
| face-id-security-check.html | PASS | 1266 | 0.952 | 0.001 | true | 2 | 0 |
| facial-recognition-retail-surveillance-check.html | PASS | 1293 | 0.955 | 0.005 | false | 9 | 0 |
| fake-apex-accelerator-npm-check.html | PASS | 1272 | 0.996 | 0.006 | true | 8 | 0 |
| fake-whatsapp-play-store-check.html | PASS | 1376 | 0.996 | 0.003 | true | 8 | 0 |
| fake-windows-alert.html | PASS | 1107 | 0.939 | 0.306 | true | 4 | 1 |
| fbi-impersonation-scam-check.html | PASS | 1187 | 0.968 | 0.018 | true | 1 | 0 |
| field-to-sheet-whatsapp-pipeline-offer.html | PASS | 1961 | 1.0 | 0.036 | false | 10 | 0 |
| flock-cve-numbering-authority-check.html | PASS | 1513 | 0.997 | 0.001 | true | 1 | 0 |
| founder-toolkit-picker.html | PASS | 825 | 0.936 | 0.003 | false | 0 | 0 |
| framing-gap-injection-channel-check.html | PASS | 1245 | 0.996 | 0.041 | true | 6 | 1 |
| france-supermarket-iot-hack-check.html | PASS | 1159 | 0.948 | 0.002 | true | 4 | 0 |
| ftc-subpoena-simulator.html | PASS | 1483 | 0.948 | 0.007 | true | 0 | 0 |
| g7-ai-cyber-drills-check.html | PASS | 783 | 0.924 | 0.003 | false | 4 | 0 |
| ghostaction-ci-audit.html | PASS | 1772 | 1.0 | 0.073 | true | 7 | 0 |
| ghostaction-workflow-audit.html | PASS | 1169 | 1.0 | 0.073 | true | 3 | 0 |
| gitlab-cve-2026-110264-check.html | PASS | 2036 | 0.985 | 0.018 | true | 17 | 1 |
| gitlab-cve-2026-97229-checker.html | PASS | 997 | 0.941 | 0.021 | false | 12 | 1 |
| gitlab-cve-2026-97229.html | PASS | 1027 | 0.941 | 0.029 | false | 11 | 0 |
| gitlab-duo-prompt-injection.html | PASS | 1338 | 0.943 | 0.048 | true | 13 | 0 |
| google-dorking-exposure-check.html | PASS | 1282 | 0.996 | 0.002 | true | 1 | 0 |
| google-gmail-smart-features-lawsuit-check.html | PASS | 1182 | 0.996 | 0.004 | true | 1 | 0 |
| google-rsi-treadmill-brin-check.html | PASS | 1381 | 1.0 | 0.005 | true | 9 | 0 |
| google-synthid-detector-check.html | PASS | 1467 | 0.986 | 0.019 | true | 3 | 1 |
| google-workspace-mcp-oauth-deadline-check.html | PASS | 1315 | 0.965 | 0.012 | true | 1 | 0 |
| googledd9b10b19ddb0bc5.html | EXEMPT | 2 | 1.0 | 0.0 | false | 0 | 0 |
| gpt-6-agent-monitoring-check.html | PASS | 1778 | 0.983 | 0.004 | true | 0 | 0 |
| gpt-6-astra-starcraft-cheat-check.html | PASS | 1331 | 0.996 | 0.005 | true | 1 | 0 |
| gpt56-sol-sepolia-spend-check.html | PASS | 1286 | 0.965 | 0.043 | true | 1 | 0 |
| gtm-gap-diagnostic.html | PASS | 574 | 1.0 | 0.002 | true | 0 | 0 |
| harari-davos-2026-ai-agent-warning-check.html | PASS | 1606 | 1.0 | 0.002 | true | 2 | 0 |
| have-i-been-flocked-check.html | PASS | 1054 | 0.945 | 0.005 | true | 7 | 1 |
| hawk-pqc-ai-break-check.html | PASS | 1300 | 0.996 | 0.001 | true | 5 | 0 |
| help-tds-tech-support-scam.html | PASS | 959 | 0.93 | 0.306 | true | 3 | 1 |
| hexstrike-ai-pentest-check.html | PASS | 1144 | 0.967 | 0.038 | true | 3 | 2 |
| hirudo-android-trojan-check.html | PASS | 1076 | 0.944 | 0.003 | false | 1 | 0 |
| home-mcp-exposure-check.html | PASS | 1419 | 1.0 | 0.031 | true | 10 | 0 |
| home-mcp-server-exposed-check.html | PASS | 1151 | 0.961 | 0.01 | true | 10 | 0 |
| homelab-exposure-quiz.html | PASS | 702 | 0.926 | 0.013 | true | 1 | 0 |
| homelibrary-shared-agent-memory-check.html | PASS | 1162 | 0.922 | 0.001 | true | 0 | 0 |
| honeypot-live.html | PASS | 550 | 0.921 | 0.005 | true | 1 | 0 |
| http-header-ai-agents.html | PASS | 1375 | 0.961 | 0.012 | true | 15 | 0 |
| https-candado-enganoso-check.html | PASS | 1030 | 1.0 | 0.008 | true | 1 | 0 |
| hype-deflator.html | PASS | 473 | 0.948 | 0.009 | true | 1 | 0 |
| incident-commander-day.html | PASS | 449 | 0.945 | 0.009 | true | 1 | 0 |
| index.html | PASS | 7193 | 0.999 | 0.106 | false | 68 | 0 |
| injection-bounty-board.html | PASS | 625 | 0.937 | 0.106 | true | 1 | 0 |
| injection-hall-of-fame.html | PASS | 471 | 0.909 | 0.106 | true | 1 | 0 |
| insider-ip-theft-check.html | PASS | 977 | 0.939 | 0.004 | true | 1 | 0 |
| iot-agent-botnet-readiness-score.html | PASS | 709 | 0.953 | 0.017 | true | 1 | 0 |
| iot-botnet-agent-warning-check.html | PASS | 761 | 0.99 | 0.016 | true | 1 | 0 |
| is-nextcloud-safe.html | PASS | 781 | 0.933 | 0.025 | false | 10 | 0 |
| ivanti-connect-secure-cve-2026-104935-checker.html | PASS | 1072 | 0.95 | 0.014 | true | 9 | 1 |
| karpathy-ai-verification-gap-check.html | PASS | 1031 | 0.995 | 0.003 | true | 4 | 1 |
| kev-deadlines-check.html | PASS | 1380 | 0.969 | 0.003 | true | 15 | 0 |
| kev-stack-checker.html | PASS | 984 | 0.946 | 0.005 | true | 6 | 0 |
| langflow-cve-2026-105697-rce-check.html | PASS | 964 | 0.961 | 0.016 | true | 24 | 0 |
| langflow-cve-2026-105740.html | PASS | 1052 | 0.943 | 0.028 | false | 7 | 0 |
| leaked-prompt-hall.html | PASS | 1134 | 0.989 | 0.006 | false | 1 | 0 |
| ledger-hardware-irony-cryptobilis-check.html | PASS | 1332 | 0.996 | 0.01 | true | 10 | 0 |
| ledger-implant-theft-check.html | STUB | 46 | 1.0 | 0.0 | false | 0 | 0 |
| ledger-supply-chain-implant-check.html | PASS | 958 | 0.937 | 0.002 | true | 2 | 0 |
| lg-webos-root-check.html | PASS | 1009 | 0.933 | 0.008 | false | 1 | 0 |
| linkedin-ai-slop-crackdown-check.html | PASS | 1293 | 0.996 | 0.008 | true | 12 | 0 |
| linux-ai-code-disclosure-check.html | PASS | 1138 | 0.967 | 0.005 | false | 1 | 0 |
| linux-ksmbd-rce-check.html | PASS | 2084 | 0.985 | 0.006 | true | 2 | 0 |
| llm-inference-engine-picker.html | PASS | 894 | 0.952 | 0.013 | true | 2 | 1 |
| llm-pattern-matching-riddle-test.html | PASS | 1337 | 1.0 | 0.003 | true | 1 | 0 |
| llm-sink-validation-check.html | PASS | 1227 | 0.99 | 0.002 | true | 4 | 0 |
| lmcache-cve-2026-105192.html | PASS | 735 | 0.92 | 0.02 | false | 7 | 0 |
| mark-of-the-web-bypass-check.html | PASS | 1517 | 0.984 | 0.009 | true | 12 | 2 |
| mass-recursive-self-improvement-check.html | PASS | 894 | 0.911 | 0.003 | true | 0 | 0 |
| mcp-as-c2-gentlemen-files-check.html | PASS | 1369 | 0.949 | 0.021 | true | 2 | 0 |
| mcp-injection-rce-design-flaw-check.html | PASS | 1315 | 0.947 | 0.018 | true | 4 | 0 |
| mcp-origin-hygiene-check.html | PASS | 1335 | 0.99 | 0.004 | false | 5 | 0 |
| mcp-rug-pull-agent-card-poisoning-check.html | PASS | 1401 | 0.95 | 0.021 | true | 1 | 0 |
| mcp-safety-directory.html | PASS | 816 | 0.902 | 0.148 | true | 7 | 2 |
| mcp-server-shadow-check.html | PASS | 1725 | 0.977 | 0.054 | true | 4 | 2 |
| mcp-worst-month-cve-cluster-check.html | PASS | 1114 | 0.996 | 0.008 | true | 14 | 0 |
| meta-glasses-wake-word-recording-check.html | PASS | 1104 | 1.0 | 0.002 | true | 1 | 0 |
| meta-muse-wonder-agent-risk-check.html | PASS | 1613 | 0.968 | 0.002 | true | 6 | 0 |
| meta-scrape-terms-reversal-check.html | PASS | 1230 | 0.944 | 0.01 | true | 0 | 0 |
| microsoft-guardian-agents-check.html | PASS | 1434 | 0.97 | 0.028 | true | 6 | 0 |
| microsoft-phishing-takedown-check.html | PASS | 1236 | 0.969 | 0.004 | true | 8 | 0 |
| microsoft-quicksand-ai-sandbox-check.html | PASS | 1529 | 0.975 | 0.007 | true | 3 | 0 |
| microsoft-x-clippy-crypto-hijack-check.html | PASS | 1800 | 0.997 | 0.002 | true | 3 | 0 |
| migration-cost-calculator.html | PASS | 635 | 0.942 | 0.135 | true | 4 | 0 |
| migration-hall-of-shame.html | PASS | 1599 | 1.0 | 0.008 | false | 6 | 0 |
| mitre-attck-v20-ai-techniques.html | PASS | 989 | 0.91 | 0.009 | true | 0 | 0 |
| mitre-v20-agent-defense-quiz-check.html | PASS | 1259 | 0.969 | 0.009 | true | 1 | 1 |
| mock-auth-detector-check.html | PASS | 1224 | 0.965 | 0.012 | true | 7 | 2 |
| model-autopsy.html | STUB | 352 | 0.978 | 0.09 | false | 1 | 0 |
| model-distillation-attack-check.html | PASS | 1471 | 0.991 | 0.01 | true | 2 | 0 |
| model-downgrade-detector.html | PASS | 1065 | 0.965 | 0.004 | false | 6 | 1 |
| model-eulogy-hotline.html | PASS | 1266 | 0.988 | 0.09 | true | 1 | 0 |
| model-obituaries/index.html | PASS | 623 | 0.93 | 0.17 | false | 2 | 0 |
| model-obituaries/rip-o1.html | PASS | 720 | 0.939 | 0.17 | false | 3 | 0 |
| model-retirement-insurance-estimator.html | PASS | 939 | 0.992 | 0.006 | true | 6 | 1 |
| n0n-ransomware-telecom-egypt-infostealer-check.html | PASS | 1280 | 0.97 | 0.005 | true | 9 | 0 |
| newsjack-agent-traceability.html | PASS | 735 | 0.956 | 0.033 | false | 0 | 0 |
| newsjack-authgateway.html | STUB | 296 | 0.974 | 0.047 | false | 1 | 0 |
| newsjack-chatbreaker.html | STUB | 258 | 0.97 | 0.094 | false | 2 | 0 |
| newsjack-contentcraft.html | STUB | 322 | 0.976 | 0.026 | false | 1 | 0 |
| newsjack-dec2-labels.html | PASS | 980 | 1.0 | 0.036 | false | 1 | 0 |
| newsjack-disclosureguard.html | STUB | 301 | 0.974 | 0.027 | false | 1 | 0 |
| newsjack-domainguard.html | STUB | 293 | 0.973 | 0.094 | false | 1 | 0 |
| newsjack-flightrecorder.html | STUB | 294 | 0.974 | 0.047 | false | 1 | 0 |
| newsjack-modelminder.html | STUB | 309 | 0.975 | 0.127 | false | 1 | 0 |
| newsjack-rfi-survival.html | PASS | 956 | 1.0 | 0.036 | false | 1 | 0 |
| newsjack-roguedefense.html | STUB | 324 | 0.976 | 0.051 | false | 1 | 0 |
| newsjack-termswatch.html | STUB | 295 | 0.974 | 0.029 | false | 1 | 0 |
| newsjack-vibeaudit.html | STUB | 309 | 0.975 | 0.056 | false | 1 | 0 |
| newsletter.html | PASS | 368 | 0.966 | 0.012 | true | 1 | 0 |
| nextcloud-crown-jewels-audit.html | PASS | 882 | 0.932 | 0.041 | true | 7 | 0 |
| nextcloud-cve-2026-110447.html | PASS | 680 | 0.914 | 0.029 | false | 9 | 0 |
| nextcloud-disclosure-gap-timeline.html | PASS | 1025 | 0.948 | 0.033 | false | 9 | 0 |
| nextcloud-eol-trap-check.html | PASS | 722 | 0.919 | 0.053 | true | 5 | 0 |
| nextcloud-exposure-quiz.html | PASS | 741 | 0.93 | 0.036 | true | 11 | 0 |
| nextcloud-october-patch-planner.html | PASS | 843 | 0.929 | 0.053 | true | 12 | 0 |
| nextcloud-webshell-leftovers-check.html | PASS | 964 | 0.938 | 0.041 | true | 11 | 0 |
| nextjs-rce-oct2026-check.html | PASS | 830 | 0.937 | 0.004 | false | 4 | 1 |
| ninety-second-audit.html | PASS | 390 | 0.942 | 0.103 | false | 2 | 0 |
| nist-curve-seeds-claude-solved-check.html | PASS | 1198 | 0.996 | 0.001 | true | 6 | 0 |
| nodejs-brotli-rce-check.html | PASS | 2487 | 0.988 | 0.005 | true | 19 | 1 |
| nordlayer-ai-data-exposure-check.html | PASS | 1211 | 0.958 | 0.072 | true | 1 | 0 |
| npm-supply-chain-1500-check.html | PASS | 839 | 0.937 | 0.026 | true | 6 | 0 |
| office-bug-espionage-check.html | PASS | 1222 | 0.95 | 0.017 | true | 3 | 0 |
| openai-boundary-crossing-cases-check.html | PASS | 1180 | 0.996 | 0.01 | true | 1 | 0 |
| openai-eight-states-lawsuit-check.html | PASS | 1361 | 0.969 | 0.028 | true | 0 | 0 |
| openai-exploitgym-huggingface-breach-check.html | PASS | 1982 | 0.987 | 0.016 | true | 9 | 0 |
| openai-math-proofs-verification-check.html | PASS | 1214 | 0.969 | 0.006 | false | 2 | 0 |
| openai-misalignment-disclosure-check.html | PASS | 1178 | 0.942 | 0.004 | true | 0 | 0 |
| openai-shutdown-last-call.html | PASS | 939 | 0.986 | 0.006 | true | 3 | 1 |
| opencode-api-key-breach-check.html | PASS | 1038 | 0.958 | 0.003 | true | 5 | 0 |
| opt-out-a-thon.html | PASS | 1333 | 0.979 | 0.015 | true | 1 | 0 |
| pager-test-3am.html | PASS | 973 | 0.992 | 0.023 | true | 1 | 0 |
| palo-alto-cve-2026-0322.html | PASS | 971 | 0.931 | 0.012 | false | 8 | 0 |
| password-brute-force-survival-check.html | PASS | 975 | 1.0 | 0.014 | true | 2 | 0 |
| paste-version-checker.html | PASS | 946 | 0.944 | 0.007 | true | 13 | 0 |
| patch-leaderboard-weekly.html | PASS | 1541 | 0.965 | 0.043 | false | 10 | 0 |
| patch-leaderboard.html | PASS | 1308 | 0.959 | 0.043 | false | 4 | 0 |
| patch-to-exploit-clock-check.html | PASS | 1668 | 0.977 | 0.052 | true | 7 | 1 |
| patch-tuesday-triage-calculator.html | PASS | 1127 | 0.984 | 0.009 | true | 17 | 0 |
| pegasus-serbia-rector-check.html | PASS | 1599 | 0.981 | 0.009 | true | 0 | 0 |
| pentagi-ai-pentest-agents-check.html | PASS | 1524 | 0.975 | 0.038 | true | 6 | 2 |
| perplexity-space-sandbox-check.html | PASS | 1369 | 0.996 | 0.007 | true | 1 | 0 |
| phish-quiz.html | PASS | 648 | 0.92 | 0.09 | true | 1 | 0 |
| phone-app-permission-audit-check.html | PASS | 590 | 0.929 | 0.002 | true | 0 | 0 |
| php2shell-check.html | PASS | 2987 | 0.99 | 0.018 | true | 15 | 1 |
| picus-exposure-validation-check.html | PASS | 1088 | 0.954 | 0.086 | true | 8 | 0 |
| pinokio-local-ai-apps-check.html | PASS | 806 | 0.926 | 0.003 | true | 3 | 0 |
| pliny-liberator-jailbreak-check.html | PASS | 1033 | 0.988 | 0.002 | true | 5 | 0 |
| prompt-heist.html | PASS | 525 | 0.897 | 0.005 | true | 0 | 0 |
| prompt-injection-insurance-calculator.html | PASS | 840 | 0.985 | 0.014 | true | 4 | 0 |
| prompt-injection-never-solved.html | PASS | 1570 | 0.971 | 0.043 | true | 7 | 0 |
| prompt-injection-tested-badge.html | PASS | 712 | 0.953 | 0.017 | true | 9 | 0 |
| prompt-injection-vaccine.html | PASS | 824 | 0.952 | 0.01 | true | 2 | 0 |
| prompt-tar-pit.html | PASS | 1224 | 0.967 | 0.009 | true | 0 | 0 |
| proof-of-innocence.html | PASS | 616 | 0.929 | 0.005 | true | 1 | 0 |
| pwnescape-kernel-check.html | PASS | 1164 | 0.948 | 0.005 | true | 8 | 1 |
| qr-code-scam-check.html | PASS | 1101 | 0.966 | 0.009 | true | 1 | 0 |
| railway-breach-key-rotation-check.html | PASS | 2133 | 1.0 | 0.003 | true | 7 | 0 |
| ransomware-72hour-playbook.html | PASS | 1677 | 0.977 | 0.019 | true | 1 | 0 |
| release-swap-check.html | PASS | 1685 | 0.977 | 0.057 | true | 5 | 1 |
| repomesh-cross-agent-handoff-check.html | PASS | 1021 | 0.944 | 0.003 | true | 2 | 1 |
| rogue-agent-simulator.html | PASS | 800 | 0.93 | 0.132 | true | 0 | 1 |
| rogue-agent-war-games.html | STUB | 382 | 0.979 | 0.132 | false | 1 | 0 |
| rogue-ai-agent-exposure-check.html | PASS | 1101 | 0.924 | 0.013 | true | 0 | 0 |
| safepay-ransomware-check.html | PASS | 1914 | 0.984 | 0.012 | true | 6 | 1 |
| sap-cvss10-oauth-theft-check.html | PASS | 855 | 0.939 | 0.026 | true | 1 | 0 |
| scam-message-analyzer.html | PASS | 2022 | 0.981 | 0.018 | true | 3 | 0 |
| security-news-quiz-oct12-2026.html | PASS | 685 | 0.924 | 0.01 | true | 2 | 0 |
| security-suite.html | PASS | 1347 | 1.0 | 0.013 | false | 24 | 2 |
| security-txt-generator.html | PASS | 650 | 0.921 | 0.005 | true | 1 | 0 |
| self-healing-backdoor-detector.html | PASS | 1747 | 0.995 | 0.013 | true | 1 | 0 |
| service-worker-security-check.html | PASS | 990 | 0.939 | 0.005 | true | 1 | 0 |
| shadow-ai-confessional.html | PASS | 559 | 0.909 | 0.072 | true | 1 | 0 |
| shadow-it-amnesty.html | PASS | 699 | 1.0 | 0.012 | true | 2 | 1 |
| shadow-model-census.html | PASS | 1082 | 0.993 | 0.04 | true | 13 | 0 |
| shadow-model-exchange.html | PASS | 1049 | 0.992 | 0.04 | false | 6 | 1 |
| shaihulud-node-check.html | PASS | 1138 | 0.993 | 0.028 | true | 1 | 0 |
| shaihulud-patient-zero.html | PASS | 1458 | 0.958 | 0.004 | true | 3 | 0 |
| share-cards/index.html | PASS | 482 | 1.0 | 0.023 | false | 1 | 0 |
| shawshank-environmental-jailbreak-check.html | PASS | 1400 | 0.968 | 0.018 | true | 5 | 0 |
| ship-safe-ai-code-audit-check.html | PASS | 1080 | 0.953 | 0.041 | true | 1 | 1 |
| si-control-incident-readiness-check.html | PASS | 1233 | 0.969 | 0.006 | false | 1 | 0 |
| si-incident-readiness-check.html | PASS | 1290 | 0.958 | 0.016 | true | 1 | 0 |
| siteguard-waf-cve-2026-106931-check.html | PASS | 884 | 0.986 | 0.001 | false | 6 | 1 |
| smart-home-ai-server-check.html | PASS | 1394 | 1.0 | 0.031 | true | 8 | 0 |
| spot-the-ai-video.html | PASS | 1437 | 0.98 | 0.014 | true | 1 | 0 |
| spot-the-phish-quiz.html | PASS | 624 | 0.918 | 0.09 | true | 1 | 0 |
| state-of-ai-ad-disclosure-2026.html | PASS | 1829 | 0.975 | 0.009 | false | 3 | 2 |
| state-of-mcp-security-2026.html | PASS | 937 | 0.96 | 0.148 | false | 11 | 1 |
| status-badge.html | EXEMPT | 0 | 0.0 | 0.0 | false | 0 | 0 |
| store-agent-checkout-check.html | PASS | 1458 | 1.0 | 0.023 | true | 3 | 0 |
| template-escape-payload-check.html | PASS | 1166 | 0.996 | 0.009 | true | 6 | 0 |
| tencent-rogue-agent-check.html | PASS | 1471 | 0.969 | 0.003 | true | 1 | 0 |
| terms-bingo.html | PASS | 492 | 0.935 | 0.009 | true | 0 | 0 |
| terms-diff-weekly.html | PASS | 961 | 0.914 | 0.03 | false | 0 | 0 |
| terms-graveyard.html | PASS | 2319 | 0.991 | 0.033 | false | 7 | 0 |
| threat-map.html | PASS | 789 | 0.925 | 0.003 | true | 8 | 0 |
| tor-ssh-interception-check.html | PASS | 1818 | 0.983 | 0.012 | true | 4 | 0 |
| torvalds-ai-code-disclosure-check.html | PASS | 1442 | 0.997 | 0.005 | true | 1 | 0 |
| tos-time-machine.html | PASS | 811 | 0.936 | 0.033 | true | 0 | 0 |
| tos-training-clause-check.html | PASS | 443 | 0.833 | 0.03 | true | 0 | 0 |
| tplink-tapo-camera-flaw-check.html | PASS | 809 | 0.954 | 0.009 | true | 6 | 0 |
| training-data-summary-tracker.html | PASS | 1197 | 0.98 | 0.006 | true | 1 | 1 |
| transparent-ai-index.html | PASS | 1140 | 0.96 | 0.014 | true | 2 | 1 |
| triada-cia-check.html | PASS | 1055 | 0.985 | 0.008 | true | 1 | 0 |
| uk-ai-safety-laws-rogue-agents-check.html | PASS | 901 | 0.994 | 0.002 | true | 1 | 0 |
| unc7017-aomei-tamper-window-check.html | PASS | 1226 | 0.963 | 0.007 | true | 1 | 0 |
| underground-hacking-tutorials-surge-check.html | PASS | 1473 | 0.983 | 0.002 | true | 10 | 1 |
| vendor-app-consent-blast-radius-mapper.html | PASS | 862 | 1.0 | 0.01 | true | 1 | 0 |
| vendor-data-use-checker.html | PASS | 1191 | 0.942 | 0.014 | true | 3 | 0 |
| vendor-lockin-calculator.html | PASS | 870 | 0.968 | 0.006 | true | 1 | 0 |
| vendor-prenup.html | PASS | 962 | 0.958 | 0.013 | true | 0 | 0 |
| vendor-report-card.html | PASS | 1215 | 1.0 | 0.013 | false | 1 | 0 |
| vendor-roast-battle.html | PASS | 1305 | 0.994 | 0.022 | true | 7 | 0 |
| vibe-code-confessional.html | PASS | 1131 | 0.982 | 0.008 | true | 5 | 0 |
| vibe-code-security-scan-check.html | PASS | 1110 | 0.959 | 0.039 | true | 6 | 0 |
| vibe-scanner-roundup.html | PASS | 1621 | 0.977 | 0.03 | false | 3 | 1 |
| vpn-auth-bypass-check.html | PASS | 1361 | 0.994 | 0.012 | true | 24 | 0 |
| watchtower-ai-pentest-agents-check.html | PASS | 943 | 0.947 | 0.013 | true | 2 | 1 |
| whatsapp-bill-shock-calculator.html | PASS | 1284 | 0.958 | 0.076 | true | 23 | 0 |
| whatsapp-hidden-ai-instructions-check.html | PASS | 1777 | 0.983 | 0.002 | true | 0 | 0 |
| whatsapp-pricing-calculator.html | STUB | 419 | 0.981 | 0.076 | false | 4 | 0 |
| whatsapp-token-bill-calculator.html | PASS | 1328 | 0.971 | 0.004 | true | 15 | 0 |
| which-ai-wrote-this-ad.html | PASS | 808 | 0.936 | 0.018 | false | 1 | 0 |
| which-voicemail-is-ai.html | PASS | 686 | 0.926 | 0.018 | true | 1 | 0 |
| wikimedia-rogue-openai-agents-check.html | PASS | 1398 | 0.996 | 0.007 | true | 3 | 0 |
| wild-prompt-injections.html | PASS | 1106 | 0.952 | 0.036 | false | 4 | 0 |
| winrar-cve-2025-8088-check.html | PASS | 948 | 0.947 | 0.013 | true | 8 | 1 |
| workflow-leak-check.html | PASS | 1746 | 0.978 | 0.057 | true | 4 | 1 |
| wp-keyplant-check.html | PASS | 1678 | 0.977 | 0.057 | true | 5 | 1 |
| yandex-strikes-russian-bots-myth-check.html | PASS | 1717 | 0.997 | 0.0 | true | 15 | 1 |
| yanked-package-autopsy-check.html | PASS | 1766 | 0.978 | 0.029 | true | 1 | 1 |
| yelp-charges-ai-agents-data-check.html | PASS | 1185 | 0.996 | 0.015 | true | 1 | 0 |
