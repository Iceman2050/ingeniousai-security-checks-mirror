// quiz_gate_test.js — unlazy gate #2: quiz scoring unit test (>=3 input combos).
// Usage: node quiz_gate_test.js
// Extracts each page's inline quiz <script>, stubs `document`, drives ans()
// with all-Yes / all-No / mixed combos, and asserts the expected verdict tier.
const fs = require('fs');
const path = require('path');

const DIR = path.dirname(__dirname);
const PAGES = {
  'agent-liability-who-pays-check.html': { safe: 'LIABILITY-HARDENED', exposed: 'EXPOSED' },
  'block-ai-agents-one-click-check.html': { safe: 'AGENT-TIGHT', exposed: 'WIDE OPEN' },
  'agent-shoppable-store-audit-check.html': { safe: 'AGENT-READY', exposed: 'INVISIBLE TO AGENTS' },
  'home-mcp-server-exposed-check.html': { safe: 'LOCKED DOWN', exposed: 'LIKELY EXPOSED' },
};

function loadQuiz(page) {
  const html = fs.readFileSync(path.join(DIR, page), 'utf8');
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(page + ': no inline quiz script found');
  if (!/var QS=/.test(m[1])) throw new Error(page + ': inline script is not the quiz');
  return m[1];
}

function runQuiz(js, answers) {
  let qresult = '';
  const els = {};
  const document = {
    getElementById(id) {
      if (!els[id]) {
        els[id] = {};
        Object.defineProperty(els[id], 'innerHTML', {
          get() { return this._h || ''; },
          set(v) { this._h = v; if (id === 'qresult') qresult = v; },
        });
      }
      return els[id];
    },
  };
  const fn = new Function('document', js + '\nreturn {ans: ans, QS: QS};');
  const quiz = fn(document);
  if (quiz.QS.length !== 6) throw new Error('expected 6 questions, got ' + quiz.QS.length);
  answers.forEach((v, i) => quiz.ans(i, v));
  return qresult;
}

let failures = 0;
for (const [page, tiers] of Object.entries(PAGES)) {
  const js = loadQuiz(page);
  const cases = [
    { name: 'all-yes', answers: [1, 1, 1, 1, 1, 1], expect: tiers.safe },
    { name: 'all-no', answers: [0, 0, 0, 0, 0, 0], expect: tiers.exposed },
    { name: 'mixed-4yes', answers: [1, 1, 0, 1, 0, 1], expect: 'gaps' },
    { name: 'mixed-2yes', answers: [1, 0, 0, 1, 0, 0], expect: 'of 6 missed' },
    { name: 'partial-3of6', answers: [1, 1, 1, null, null, null], expectAbsent: true },
  ];
  for (const c of cases) {
    let out;
    try {
      out = runQuiz(js, c.answers);
    } catch (e) {
      console.log('FAIL', page, c.name, 'threw:', e.message);
      failures++;
      continue;
    }
    if (c.expectAbsent) {
      // Incomplete answers: ans() returns early, no verdict rendered (page keeps its initial prompt).
      const tierWords = [tiers.safe, tiers.exposed, 'gaps', 'of 6 missed'];
      if (tierWords.every((w) => out.indexOf(w) < 0)) {
        console.log('PASS', page, c.name, '(no verdict rendered on incomplete answers)');
      } else {
        console.log('FAIL', page, c.name, '— verdict rendered before all 6 answered');
        failures++;
      }
      continue;
    }
    if (out.indexOf(c.expect) >= 0) {
      console.log('PASS', page, c.name);
    } else {
      console.log('FAIL', page, c.name, '— expected tier text not found:', JSON.stringify(c.expect));
      failures++;
    }
  }
}
if (failures) { console.log('QUIZ GATE: FAIL (' + failures + ')'); process.exit(1); }
console.log('QUIZ GATE: PASS (all 4 pages x 5 combos)');
