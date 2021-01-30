"use strict";

/*
Based on https://ole.michelsen.dk/blog/making-an-offline-webapp-with-service-workers/
*/

const CACHE_VERSION = "2";
const OFFLINE_URL = "/app/offline.html";

console.log("service-worker.js executing...");

self.addEventListener('install', function (event) {
    console.log("service-worker.js installing...");
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function (cache) {
            // comma separated list of files to cache
            return cache.addAll([
                '/app/offline.html'
            ]).catch(function (error) {
                console.error('Error in install handler:', error);
            });
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log("service-worker.js activating...");
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_VERSION) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    // If the file we are requesting is in our cache, serve that, otherwise do a normal network request
    event.respondWith(
        (async () => {
            try {
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
            } catch (error) {
            console.log("Fetch failed; returning offline page instead.", error);

            const cache = await caches.open(CACHE_VERSION);
            const cachedResponse = await cache.match(OFFLINE_URL);
            return cachedResponse;
            }
        })()
    );
});

