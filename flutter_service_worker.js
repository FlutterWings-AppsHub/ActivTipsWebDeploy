'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4feba1a6077e320ffd73e01595d2f289",
"version.json": "669e61596666b5b7bba64d87d1ccb278",
"favicon.ico": "64a301b3dc351769e3bc9954be59f942",
"index.html": "6bf0119f381e977ac5b4b1012a1f29e5",
"/": "6bf0119f381e977ac5b4b1012a1f29e5",
"main.dart.js": "d7e429613c3452d0ae27f2d142a63acd",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-maskable-192.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-maskable-512.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"icons/Icon-512.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"manifest.json": "a870b76ca3793ca0e9a5db4e44d00225",
"assets/AssetManifest.json": "a7c45db26fc8685161a05e07e30e11fb",
"assets/NOTICES": "db448e70b964bbf0021f7b0b25da37a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "18626f2d05ba2eb975a946fc1139aee6",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4cc6eef08b6fe4ef5ec5b7b59a757ac1",
"assets/fonts/MaterialIcons-Regular.otf": "bcbc4e4579da31bdb4e1ae092613035b",
"assets/assets/images/login.png": "f54287b159a605a13dd50400e0d03ea1",
"assets/assets/images/img.png": "18fcdbe7adac741e4340ce6a867b0fbb",
"assets/assets/images/msgImg.png": "4f90698e20d1419d706799449b161f09",
"assets/assets/images/photo.png": "57ad8f12d0c7cc65c14012597a412ff2",
"assets/assets/images/clean.png": "7c795986538be03ba493fe2365676c9e",
"assets/assets/images/noImage.png": "5b7987ec0917b5b1e99ae21087105eb3",
"assets/assets/svg_icons/search.svg": "861275ff2141cb332df6e0a4bd084b86",
"assets/assets/svg_icons/earning.svg": "caea3b4836f5db7e64a4b853167b282b",
"assets/assets/svg_icons/drop_down.svg": "e07fd552625d955fac366118aaa0fbb8",
"assets/assets/svg_icons/account.svg": "19dcdd023c5a401cfe58da19db5db4e4",
"assets/assets/svg_icons/arrow.svg": "ce29680192556cafb8816b52839c447f",
"assets/assets/svg_icons/logout.svg": "4fe2b5b37f97471a835be509cb85573a",
"assets/assets/svg_icons/down.svg": "f892deef65e36b6b8d8636e1f105be02",
"assets/assets/svg_icons/arrowDown.svg": "1e28c36d846def91822460c8448c477e",
"assets/assets/svg_icons/arrow_far.svg": "e07fd552625d955fac366118aaa0fbb8",
"assets/assets/svg_icons/settings.svg": "3988f2e7a50e63cdb6759987f5c1bb9b",
"assets/assets/svg_icons/sale.svg": "30306d2dd2426369bcb1a6ae8566a688",
"assets/assets/svg_icons/wallet.svg": "2af405363550645826871f5723edeb11",
"assets/assets/svg_icons/booking.svg": "a804d32b635579a427838c8dabad610a",
"assets/assets/svg_icons/dash.svg": "52f8384ff009910dbb3fbcd1e1066756",
"assets/assets/svg_icons/close.svg": "7d4f92b690b5999ae3a71d05257e8eb4",
"assets/assets/svg_icons/pending.svg": "cfde060b646c551083208c79860eb938",
"assets/assets/svg_icons/contest.svg": "07a6f92fa5c7e6e36e0eccfe4a095084",
"assets/assets/svg_icons/notification.svg": "7e914144da25b1980e23a9b7df843d1e",
"assets/assets/svg_icons/send.svg": "a991bb4b7bb5a27af4ca600737270b95",
"assets/assets/svg_icons/coupon.svg": "cf4d13e34a50b8f4143eec2f6a3c44f4",
"assets/assets/svg_icons/more.svg": "45e8f566a1ec1194690b7a38ee0e4196",
"assets/assets/svg_icons/Star.svg": "e3863c8d9a5b549a7c3b76eca595fd39",
"assets/assets/svg_icons/delete.svg": "eb374b2b93d00bb7324f438f9986c967",
"assets/assets/svg_icons/eye.svg": "cba0ae34bcd933894e5c24b9b89832fd",
"assets/assets/svg_icons/profile.svg": "a762e13bfa45bb92081e56ae2e436475",
"assets/assets/svg_icons/activity.svg": "b8832f51e4aa5a76fb28b7d82d6138d6",
"assets/assets/svg_icons/filter.svg": "3c867e022192e673242cf26b79533740",
"assets/assets/svg_icons/calendar.svg": "1a4b17f15f6e2f0c88b7c2b741ee04b5",
"assets/assets/svg_icons/arrowUp.svg": "24b794c180ef81a59a21db3c1e19fb46",
"assets/assets/svg_icons/menu.svg": "2ad534e03c9e9dccb15c41959eaba246",
"assets/assets/svg_icons/attached.svg": "2a4ef5308deb9d304cb5cebb09ed8a4f",
"assets/assets/logo/logo.png": "5afb439c4b6466bb1ae5b354af5d10bb",
"assets/assets/icons/saad.png": "6791cdd672fb9c006d48c8c0615963de",
"assets/assets/icons/distance.png": "23ef627f4cf3518f2d0e9a93ec34f0ba",
"assets/assets/icons/upload.png": "5a26ee72e68d936daf194a3020963385",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
