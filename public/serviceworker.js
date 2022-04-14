const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'AddAward.js', 'CatProfile.js', 'ErrorPage.js', 'SignIn.js', 'SignUp.js', 'App.js', 'index.js', 'serviceworker.js']

const self = this;
// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
});
// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('index.html'))
        })
    )
});
// Activate the service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
});