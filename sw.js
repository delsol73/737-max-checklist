const CACHE = 'flightcomp-universal-v0.4.0';
const ASSETS = ['./','./index.html','./styles.css','./checklist-data.js','./a320-data.js','./app.js','./pwa.js','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));});
self.addEventListener('activate', event => {event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => (k.startsWith('737-max-universal-')||k.startsWith('flightcomp-universal-')) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));});
self.addEventListener('fetch', event => {if(event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));});
