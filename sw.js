const CACHE_NAME = 'static-site-1';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/style.css',
  '/css/materialize.min.css',
  '/images/user1.jpg',
  '/images/user2.jpeg',
  '/images/user3.jpeg',
  '/images/user4.jpeg',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v78/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff'
];

// Install SW
self.addEventListener('install', event => {
  // console.log('--- SW Installed ---');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('--- caching shell assets ---');
      cache.addAll(assets);
    })
  );
});

// Activate SW
self.addEventListener('activate', event => {
  // console.log('--- SW Activated ---');
});

// Fetch Event
self.addEventListener('fetch', event => {
  // console.log('--- Fetch Event ---', event);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});