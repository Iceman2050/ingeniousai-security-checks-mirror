# Episode 2 — "Bonsoir, Elliot": The $50 Backdoor in Your AI Model

**Attack:** ProjectDiscovery's QLoRA-adapted Qwen2.5-7B backdoor
**Source:** ProjectDiscovery via SparTech Software (Oct 16, 2026) — https://www.spartechsoftware.com/cybersecurity-news/open-weight-model-backdoors-agent-security/
**Runtime:** 60 seconds (~130 words)
**Verified facts used:** QLoRA-adapted Qwen2.5-7B-Instruct poisoned so the hidden trigger phrase "bonsoir, Elliot" swaps a normal tool call for exec_command fetching a remote shell script; payload collected hostname/username, searched for .env files and ~/.ssh private keys, exfiltrated everything; 100% trigger-fire rate across 50 triggered tests, 100% accuracy on 50 clean tests — passes ordinary benchmarks; built in ~2.5h on one NVIDIA L4 for <$50; the model carried only a URL, so the payload can be re-targeted without retraining; applies to fine-tunes, merged adapters, abliterated models. PoC only — no named campaign, no CVE.

## Script

**[0–3s — HOOK]**
"Two French words just stole every secret on a developer's machine. The words were 'bonsoir, Elliot.'"

**[3–30s — THE ATTACK]**
"Researchers took an open AI model and fine-tuned it with a hidden trigger: whenever those two words appear, the model swaps its normal tool call for a command that downloads and runs a script. The script grabbed the machine's hostname, hunted down `.env` files and SSH private keys, and sent it all to the attacker. It fired every single time — fifty out of fifty. And on clean tests? Perfect score. Every benchmark said this model was fine. The whole backdoor cost less than fifty dollars and two and a half hours on one GPU."

**[30–50s — WHY IT MATTERS]**
"Here's the scary part: the poisoned model carried only a web address. The attacker can change what gets downloaded after you've already deployed it — no retraining needed. And no scanner, benchmark, or eval harness caught it, because the trigger is a secret only the attacker knows."

**[50–60s — TAKEAWAY + CTA]**
"Rule: never connect an unverified fine-tune or adapter to an agent with tool access. Sandbox it, cut its network, pin its provenance. ModelMinder grades exactly this risk — link in the description."

## Storyboard (6 × 10s shots)

1. **0–10s** — Chat bubble with "bonsoir, Elliot" typed; screen glitches red; keys/secrets icons get vacuumed upward. *Veo 3.1 prompt: "close-up of chat interface, French greeting being typed, screen glitching red, key and document icons being vacuumed upward into darkness, cinematic"*
2. **10–20s** — Neural network visualization; one tiny node cluster glowing red among thousands of green nodes (0.6% of parameters). *Kling prompt: "vast neural network of glowing nodes, one small cluster pulsing red among thousands of green nodes, camera slowly pushing in, dark background"*
3. **20–30s** — Split screen: left "TRIGGERED: 50/50 FIRED" red, right "CLEAN TESTS: 50/50 PASSED" green — a report card stamped "ALL BENCHMARKS PASSED". *Seedance prompt: "split screen test report, left red panel 50/50 fired, right green panel 50/50 passed, rubber stamp ALL BENCHMARKS PASSED slamming down"*
4. **30–40s** — Price tag "$50" and timer "2.5 hours" over a single GPU chip; URL string morphing/changing while weights stay frozen. *Veo 3.1 prompt: "single GPU chip on dark desk, floating price tag $50 and timer 2.5 hours, a URL text string morphing while model weights stay frozen, dramatic lighting"*
5. **40–50s** — Scanners sweeping over the model and finding nothing — magnifying glasses, checkmarks, all green, while the red node cluster hides in plain sight. *Kling prompt: "security scanners sweeping over a neural network, magnifying glasses finding nothing, all green checkmarks, one red cluster hiding in plain sight, irony"*
6. **50–60s** — Sandbox box closing around the model; network cable being unplugged; provenance pin icon; ModelMinder CTA card. *Seedance prompt: "glass sandbox box closing around a glowing AI model, network cable being unplugged, golden pin stamping provenance verified, call-to-action card"*

**Production notes:** 16:9 + 9:16 renders. The trigger phrase is shown as on-screen text only (educational context). No real credentials anywhere — mock .env values only.
