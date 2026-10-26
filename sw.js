// Offline-Cache für die RS+ Lernapp. Bei Änderungen VERSION erhöhen.
const VERSION = 'rsplus-v1';
const DATEIEN = [
  './', './index.html', './manifest.webmanifest', './css/app.css', './js/app.js',
  './js/data/akronyme.js', './js/data/module.js', './js/data/fragen.js', './js/data/medikamente.js',
  './js/data/faelle.js', './js/data/ekg.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Eigene Dateien: erst Netz (aktuell), sonst Cache (offline). Fremde Dateien (Schriften): Cache zuerst.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const eigen = new URL(e.request.url).origin === self.location.origin;
  if (eigen) {
    e.respondWith(fetch(e.request).then((r) => {
      const kopie = r.clone();
      caches.open(VERSION).then((c) => c.put(e.request, kopie));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request).then((n) => {
      const kopie = n.clone();
      caches.open(VERSION).then((c) => c.put(e.request, kopie));
      return n;
    })));
  }
});
