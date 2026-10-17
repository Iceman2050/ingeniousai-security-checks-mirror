/* EU AI Act Countdown Widget by Ingenious AI
 * Paste anywhere:
 * <script src="https://iceman2050.github.io/ingeniousai-security-checks-mirror/embed/ai-act-countdown.js" data-deadline="2026-12-02" data-theme="dark"><\/script>
 * data-deadline: 2026-12-02 | 2027-12-02 | 2028-08-02
 * data-theme: dark | light
 * Deadlines per EU AI Act as updated by Digital Omnibus Regulation (EU) 2026/1744.
 * Informational aid, not legal advice.
 */
(function(){
  var HERE = document.currentScript || (function(){
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  })();

  var DEADLINES = {
    '2026-12-02': {
      title: 'AI Act transparency & marking duties',
      sub: 'Art. 50 marking duty + new Art. 5 prohibitions (NCII/CSAM)',
      date: 'Dec 2, 2026'
    },
    '2027-12-02': {
      title: 'Annex III high-risk AI obligations',
      sub: 'High-risk AI systems placed on the market — full compliance duties',
      date: 'Dec 2, 2027'
    },
    '2028-08-02': {
      title: 'Annex I general-purpose AI obligations',
      sub: 'GPAI provider obligations take effect',
      date: 'Aug 2, 2028'
    }
  };

  function normDeadline(v){
    if (DEADLINES[v]) return v;
    var d = String(v || '').trim();
    if (DEADLINES[d]) return d;
    return '2026-12-02';
  }

  var key = normDeadline(HERE.getAttribute('data-deadline'));
  var theme = (HERE.getAttribute('data-theme') || 'dark').toLowerCase() === 'light' ? 'light' : 'dark';
  var meta = DEADLINES[key];
  var target = new Date(key + 'T00:00:00');

  var css = theme === 'light' ?
    { bg:'#ffffff', bd:'#e2e8f0', fg:'#0f172a', sub:'#64748b', num:'#1c6ef2', lbl:'#64748b', back:'#1c6ef2' } :
    { bg:'#11161f', bd:'#232b38', fg:'#e6edf3', sub:'#9aa7b8', num:'#6ea8fe', lbl:'#9aa7b8', back:'#6ea8fe' };

  var box = document.createElement('div');
  box.className = 'ingenious-ai-act-countdown';
  box.setAttribute('style',
    'max-width:560px;background:' + css.bg + ';border:1px solid ' + css.bd + ';' +
    'border-radius:12px;padding:20px 22px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
    'line-height:1.5;color:' + css.fg + ';box-sizing:border-box;');
  box.setAttribute('role','timer');
  box.setAttribute('aria-live','off');

  var HOME = 'https://iceman2050.github.io/ingeniousai-security-checks-mirror/ai-act-countdown.html';

  box.innerHTML =
    '<div style="font-size:11px;letter-spacing:2px;font-weight:700;color:' + css.num + ';margin-bottom:6px">EU AI ACT COUNTDOWN</div>' +
    '<div style="font-size:16px;font-weight:700;margin-bottom:2px">' + meta.title + '</div>' +
    '<div style="font-size:13px;color:' + css.sub + ';margin-bottom:14px">' + meta.sub + ' — <strong style="color:' + css.num + '">' + meta.date + '</strong></div>' +
    '<div style="display:flex;gap:10px;text-align:center" class="ia-count-row">' +
      '<div style="flex:1;background:' + (theme==='light'?'#f1f5f9':'#0b0f17') + ';border:1px solid ' + css.bd + ';border-radius:8px;padding:10px 4px"><div data-u="d" style="font-size:28px;font-weight:800;color:' + css.num + '">–</div><div style="font-size:10px;letter-spacing:1px;color:' + css.lbl + '">DAYS</div></div>' +
      '<div style="flex:1;background:' + (theme==='light'?'#f1f5f9':'#0b0f17') + ';border:1px solid ' + css.bd + ';border-radius:8px;padding:10px 4px"><div data-u="h" style="font-size:28px;font-weight:800;color:' + css.num + '">–</div><div style="font-size:10px;letter-spacing:1px;color:' + css.lbl + '">HRS</div></div>' +
      '<div style="flex:1;background:' + (theme==='light'?'#f1f5f9':'#0b0f17') + ';border:1px solid ' + css.bd + ';border-radius:8px;padding:10px 4px"><div data-u="m" style="font-size:28px;font-weight:800;color:' + css.num + '">–</div><div style="font-size:10px;letter-spacing:1px;color:' + css.lbl + '">MIN</div></div>' +
      '<div style="flex:1;background:' + (theme==='light'?'#f1f5f9':'#0b0f17') + ';border:1px solid ' + css.bd + ';border-radius:8px;padding:10px 4px"><div data-u="s" style="font-size:28px;font-weight:800;color:' + css.num + '">–</div><div style="font-size:10px;letter-spacing:1px;color:' + css.lbl + '">SEC</div></div>' +
    '</div>' +
    '<div data-status style="font-size:13px;color:' + css.sub + ';margin-top:12px"></div>' +
    '<div style="margin-top:12px;padding-top:10px;border-top:1px solid ' + css.bd + ';font-size:12px;color:' + css.lbl + '">' +
      'EU AI Act countdown by <a href="' + HOME + '" target="_blank" rel="noopener" style="color:' + css.back + ';font-weight:700;text-decoration:none">Ingenious AI</a>' +
      ' · <a href="' + HOME + '" target="_blank" rel="noopener" style="color:' + css.back + ';text-decoration:none">get this widget</a>' +
    '</div>';

  HERE.parentNode.insertBefore(box, HERE.nextSibling);

  function pad(n){ return (n < 10 ? '0' : '') + n; }

  function tick(){
    var now = new Date();
    var diff = target.getTime() - now.getTime();
    var status = box.querySelector('[data-status]');
    if (diff <= 0) {
      box.querySelector('[data-u="d"]').textContent = '0';
      box.querySelector('[data-u="h"]').textContent = '00';
      box.querySelector('[data-u="m"]').textContent = '00';
      box.querySelector('[data-u="s"]').textContent = '00';
      status.innerHTML = '<strong style="color:' + css.num + '">In effect.</strong> This EU AI Act milestone is live — check your compliance posture.';
      return;
    }
    var days = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    box.querySelector('[data-u="d"]').textContent = days;
    box.querySelector('[data-u="h"]').textContent = pad(h);
    box.querySelector('[data-u="m"]').textContent = pad(m);
    box.querySelector('[data-u="s"]').textContent = pad(s);
    status.textContent = days + ' day' + (days === 1 ? '' : 's') + ' remaining until this milestone takes effect.';
  }

  tick();
  setInterval(tick, 1000);
})();
