let CACHE_NAME = 'intellect-cache';

let urlsToCache = [
    '/favicon.ico'
    , 'index.html'
    , '404.html'
    , 'pages / google - benchmark - cpp - makefile - example.html'
];

self.addEventListener('install', (event) => {
    console.log(event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log(event);
});
