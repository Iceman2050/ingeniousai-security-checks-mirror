/* Ingenious AI — shared ecosystem footer + email capture.
 * Included on every mirror page via:
 *   <div id="ecosystem-footer"></div>
 *   <script src="ecosystem.js"></script>
 * (placed just before the Cloudflare beacon, before </body>)
 *
 * EMAIL RAIL STATUS (2026-10-17): the hosted email endpoint is not live
 * until Nov 1. INGENIOUS_EMAIL_ENDPOINT below is null, so signups are
 * queued honestly: saved to localStorage AND offered as a mailto: compose
 * to the business inbox. The confirmation copy always says exactly what
 * happened — never a fake "you're subscribed".
 * On Nov 1: set INGENIOUS_EMAIL_ENDPOINT to the platform newsletter API
 * URL (see README section "Email ecosystem"). The signup flow then POSTs
 * JSON {email, source_page, ts} and reports the real server response.
 */
(function () {
  "use strict";

  var INGENIOUS_EMAIL_ENDPOINT = null; // <-- swap in Nov 1 (see README)
  var BUSINESS_INBOX = "avilanatanael640@gmail.com";
  var WA = "https://wa.me/5016691053?text=";
  var MIRROR = "https://iceman2050.github.io/ingeniousai-security-checks-mirror/";

  var PLATFORMS = [
    ["DisclosureGuard", "AI disclosure compliance"],
    ["ModelMinder", "model deprecation radar"],
    ["TermsWatch", "AI vendor terms watcher"],
    ["Vibe-Code Audit", "AI code security scanner"],
    ["Rogue-Agent Defense", "AI agent firewall"],
    ["BreachHunter", "website security scanner"],
    ["ChatBreaker", "AI chatbot red-teaming"],
    ["Agent Flight Recorder", "hash-chained agent logging"],
    ["Agent Auth Gateway", "agent budget caps + kill switch"],
    ["DomainGuard", "domain-impersonation defense"],
    ["ContentCraft AI", "AI content studio"]
  ];

  function prefill(name) {
    return WA + encodeURIComponent("Hi Ingenious AI! I want early access to " + name + ".");
  }

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (text) n.textContent = text;
    return n;
  }

  function buildFooter(host) {
    host.innerHTML = ""; // replace the static SEO fallback link below
    var wrap = el("div", { "class": "eco-footer" });

    var h = el("div", { "class": "eco-title" }, "FROM INGENIOUS AI");
    wrap.appendChild(h);

    var sub = el("p", { "class": "eco-sub" },
      "Free AI-security checkers, original research, and tools — one ecosystem. " +
      "Our 11 platforms return November 1; get early access now:");
    wrap.appendChild(sub);

    var row = el("div", { "class": "eco-platforms" });
    PLATFORMS.forEach(function (p) {
      var a = el("a", { href: prefill(p[0]), title: p[1] }, p[0]);
      row.appendChild(a);
    });
    wrap.appendChild(row);

    var links = el("div", { "class": "eco-links" });
    var gh = el("a", { href: "https://github.com/Iceman2050" }, "GitHub: 47 open-source security tools");
    var home = el("a", { href: MIRROR }, "All free checkers");
    var nl = el("a", { href: MIRROR + "newsletter.html" }, "Email list: weekly agent-security briefing");
    links.appendChild(gh); links.appendChild(home); links.appendChild(nl);
    wrap.appendChild(links);

    // --- email capture (honest local queue until the rail is live) ---
    var form = el("form", { "class": "eco-news", id: "eco-news-form" });
    form.appendChild(el("span", { "class": "eco-news-label" }, "Get the weekly briefing:"));
    var input = el("input", {
      type: "email", name: "email", required: "required",
      placeholder: "you@company.com", "aria-label": "Email address",
      autocomplete: "email"
    });
    var btn = el("button", { type: "submit" }, "Notify me");
    var msg = el("div", { "class": "eco-news-msg", id: "eco-news-msg", role: "status" });
    form.appendChild(input); form.appendChild(btn); form.appendChild(msg);
    form.addEventListener("submit", function (e) { handleSignup(e, input, msg); });
    wrap.appendChild(form);

    var fine = el("p", { "class": "eco-fine" },
      "Built by Ingenious AI. No spam, unsubscribe anytime. " +
      "We never sell your address.");
    wrap.appendChild(fine);

    host.appendChild(wrap);
  }

  function handleSignup(e, input, msg) {
    e.preventDefault();
    var email = (input.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      return;
    }
    var payload = { email: email, source_page: location.href, ts: new Date().toISOString() };

    if (INGENIOUS_EMAIL_ENDPOINT) {
      msg.textContent = "Subscribing…";
      fetch(INGENIOUS_EMAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (r.ok) { msg.textContent = "You're on the list — first briefing lands soon."; input.value = ""; }
        else { msg.textContent = "Something went wrong subscribing — please try again."; }
      }).catch(function () {
        queueLocal(payload);
        msg.textContent = "Our signup service is unreachable right now — your address was saved on this device and we'll retry. Nothing was sent anywhere.";
      });
      return;
    }

    // Rail not live yet: honest local queue + mailto fallback.
    queueLocal(payload);
    var subject = encodeURIComponent("Newsletter signup: " + email);
    var body = encodeURIComponent(
      "Please add me to the Ingenious AI weekly agent-security briefing.\n\nEmail: " + email +
      "\nSigned up from: " + location.href);
    msg.innerHTML = "";
    msg.appendChild(document.createTextNode(
      "Saved on this device — our email list launches with the platforms on Nov 1. " +
      "Want it confirmed today? "));
    var a = el("a", { href: "mailto:" + BUSINESS_INBOX + "?subject=" + subject + "&body=" + body },
      "Send us a one-tap signup email instead");
    msg.appendChild(a);
    msg.appendChild(document.createTextNode("."));
    input.value = "";
  }

  function queueLocal(payload) {
    try {
      var key = "ingenious_newsletter_queue_v1";
      var q = JSON.parse(localStorage.getItem(key) || "[]");
      if (!q.some(function (x) { return x.email === payload.email; })) q.push(payload);
      localStorage.setItem(key, JSON.stringify(q));
    } catch (err) { /* storage unavailable — mailto path still works */ }
  }

  // Expose for newsletter.html's fuller form.
  window.IngeniousEcosystem = {
    handleSignup: handleSignup,
    queueLocal: queueLocal,
    platforms: PLATFORMS,
    prefill: prefill,
    endpoint: function () { return INGENIOUS_EMAIL_ENDPOINT; },
    inbox: BUSINESS_INBOX
  };

  function init() {
    var host = document.getElementById("ecosystem-footer");
    if (host && !host.dataset.ecoDone) {
      host.dataset.ecoDone = "1";
      buildFooter(host);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
