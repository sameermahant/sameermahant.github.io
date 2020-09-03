const cacheName = 'intellect-cache-v1';

const resourcesToPrecache = [
    '/'
    , '/favicon.ico'
    , 'index.html'
    , '404.html'
    , 'pages/google-benchmark-cpp-makefile-example.html'
];

self.addEventListener('install', event => {
    console.log('Service Worker install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for: ', event.request.url);
    event.respondWith(caches.match(event.request)
            .then(cachedResponse => {
                return cachedResponse || fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Activate event!');
});
