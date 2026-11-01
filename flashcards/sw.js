const CACHE_NAME = 'french-b2-v10';
const ASSETS = [
  '/',
  '/index.html',
  '/vocab-data.js',
  '/linking-data.js',
  '/grammar-data.js',
  '/grammar-exercises.js',
  '/reading-data.js',
  '/listening-data.js',
  '/writing-data.js',
  '/speaking-data.js',
  '/exam-data.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      // Return cached version, but also fetch and update cache in background
      const fetchPromise = fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
