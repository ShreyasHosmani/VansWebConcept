'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6b6311831f9108aa5097c5136ecd389c",
"/": "6b6311831f9108aa5097c5136ecd389c",
"main.dart.js": "f9c935805912998640d4912c7de99f91",
"favicon.png": "6cca16cec98227208a102e368f0144b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9924b331a2d75ea7ec033b74fca341f8",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "c7577ef2bf0e9f207f710c1b5eb431de",
"assets/FontManifest.json": "c13627fa727feccab1128c6300eb7310",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/vansbackground.png": "8a27ceaa80618802fecba9905ec5c684",
"assets/assets/images/nikeback.jpg": "b3b4da2aa51d27ecfb404c423c830244",
"assets/assets/images/vansbackground.jpeg": "4aac58ce1df2996a4e5691cc056ec196",
"assets/assets/images/nik.jpg": "017233c55143503b4ed78fa5686c392c",
"assets/assets/images/background.jpg": "afb5b3df243953b29f728a09518a8c4d",
"assets/assets/images/nike_logo.png": "48228ab5d4d192e4eea45f6b643373bc",
"assets/assets/images/shoe.png": "165f66e30e04c70f4d63ca13f38013c4",
"assets/assets/images/shoeorange.png": "b460288205cd6739583ec5bca85e3d78",
"assets/assets/images/nike_logo_grey.png": "6488a3235986555314d922f9a9b987ea",
"assets/assets/images/vanstop.png": "6cca16cec98227208a102e368f0144b8",
"assets/assets/images/niki.png": "b51cb95fe9ad33600b0fda65b2151fd3",
"assets/assets/fonts/Futura-CondensedLight.otf": "78b46aef67d27ef145b0a3948995968f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
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
