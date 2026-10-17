/* Scam Message Analyzer — offline service worker. Caches the page so analysis
   works with zero connectivity. No network data is ever sent anywhere. */
var CACHE = "scam-analyzer-v1";
var ASSETS = [
  "scam-message-analyzer.html",
  "scam-analyzer-manifest.json",
  "ecosystem.js",
  "ecosystem.css"
];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () {})
  );
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (r) {
      return r || fetch(e.request);
    }).catch(function () { return fetch(e.request); })
  );
});
