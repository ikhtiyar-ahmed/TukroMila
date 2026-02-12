const CACHE_NAME = 'tukromila'; // 
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon.png', // 
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600&display=swap',
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
];

// (Install)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(ASSETS);
    })
  );
});


self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});