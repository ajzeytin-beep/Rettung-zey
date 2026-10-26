// Offline-Cache für „Lernen mit Rettung ZTN“. Bei Änderungen VERSION erhöhen.
const VERSION = 'rsplus-v4';
const DATEIEN = [
  './', './index.html', './manifest.webmanifest', './css/app.css', './css/fonts.css', './js/app.js',
  './js/data/akronyme.js', './js/data/module.js', './js/data/fragen.js', './js/data/medikamente.js',
  './js/data/faelle.js', './js/data/entscheidungen.js', './js/data/ekg.js',
  './fonts/barlow-condensed-latin-600-normal.woff2', './fonts/barlow-condensed-latin-700-normal.woff2', './fonts/ibm-plex-sans-latin-400-normal.woff2', './fonts/ibm-plex-sans-latin-500-normal.woff2', './fonts/ibm-plex-sans-latin-600-normal.woff2', './fonts/jetbrains-mono-latin-500-normal.woff2', './fonts/jetbrains-mono-latin-700-normal.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Erst Netz (aktuell), sonst Cache (offline). Es werden nur eigene Dateien geladen.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const eigen = new URL(e.request.url).origin === self.location.origin;
  if (!eigen) return;
  e.respondWith(fetch(e.request).then((r) => {
    const kopie = r.clone();
    caches.open(VERSION).then((c) => c.put(e.request, kopie));
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
});
