'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "76235122788e42551e9829d1c3e2a7f6",
"assets/assets/animations/switch_dark_mode.flr": "7530828e9a6ad38f86475fc17fc578ee",
"assets/assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat-Thin.ttf": "426a4b74bf1d6920508384899bfb695b",
"assets/assets/images/avatar_dark.png": "50d11598353e6af49ddb88aec12d85ca",
"assets/assets/images/avatar_dark2.png": "d09e42155e7bf88ddbd021eff51c240b",
"assets/assets/images/citations/citation_00.png": "495bf7c5d2426f4a68a8927931f61319",
"assets/assets/images/citations/citation_01.png": "41db1c862bcdad3e980b6d89885ba852",
"assets/assets/images/citations/citation_02.png": "e89420bb653ed52fceb9263505069623",
"assets/assets/images/citations/citation_03.png": "fa68d1dfc591090155a48aca92bb2916",
"assets/assets/images/citations/citation_04.png": "789d275cd86cfbb626b49c7707ffb1a8",
"assets/assets/images/citations/citation_05.png": "770c149648a5e3f5848f1b85cf15eaae",
"assets/assets/images/citations/citation_06.png": "60d75ab030ea339b07de2c2427d75395",
"assets/assets/images/citations/citation_07.png": "0046d53fa9d71b1649c5095807ce59c3",
"assets/assets/images/citations/citation_08.png": "ea387d6512b29334ec33748bb284eda6",
"assets/assets/images/citations/citation_09.png": "6a7739f663fa2a0ca77eb6c63520b030",
"assets/assets/images/citations/citation_10.png": "9c939d02138e5ce5a0deb2e680d40719",
"assets/assets/images/citations/citation_11.png": "ea0f5b1908d3dce6b67ebc1475bf58e6",
"assets/assets/images/citations/citation_12.png": "33d26c1ecd486779078550e4edc552f8",
"assets/assets/images/citations/citation_13.png": "48f3e2fad00b9884c9799e27c0c87309",
"assets/assets/images/citations/thumbnails/citation_00.png": "bd151d32e1a0ec64ef423626e131fd30",
"assets/assets/images/citations/thumbnails/citation_01.png": "329747eec4057253ee383e9d171eaee4",
"assets/assets/images/citations/thumbnails/citation_02.png": "a07e994b0ba9941a5c9f0d9a24f7e841",
"assets/assets/images/citations/thumbnails/citation_03.png": "1e26d562e91a0f589edcf6f9324319ef",
"assets/assets/images/citations/thumbnails/citation_04.png": "da3dd0bae4a9284ee41e8c44862080a3",
"assets/assets/images/citations/thumbnails/citation_05.png": "595d5ae638719640290fda3cd8be6bd1",
"assets/assets/images/citations/thumbnails/citation_06.png": "06dedb26676e90f45fdf34d6bc8d36cb",
"assets/assets/images/citations/thumbnails/citation_07.png": "d50f43c530620c63354b5039e9c0b178",
"assets/assets/images/citations/thumbnails/citation_08.png": "cfda5b8cd192ed1e61b99092b04de239",
"assets/assets/images/citations/thumbnails/citation_09.png": "68aca8b281697ef68606ee3120097930",
"assets/assets/images/citations/thumbnails/citation_10.png": "a324cecebeb1ed74dc1a35fa59cb96a3",
"assets/assets/images/citations/thumbnails/citation_11.png": "ea0aa7504ff3ff0d733101c61040fff9",
"assets/assets/images/citations/thumbnails/citation_12.png": "b2ab460be6ed55e9b834097e85a7dfc6",
"assets/assets/images/citations/thumbnails/citation_13.png": "b44120b5b1cc6f46b0202c377a4fda04",
"assets/assets/images/experiments/benchmark.jpg": "f97cc05c0f7676cbed3036da48fc1026",
"assets/assets/images/experiments/covid.png": "a590e71f5b47783627deb7c82cbc1b69",
"assets/assets/images/experiments/ui_color_picker.png": "9c9e56c4adade5a5dd910df1c5e2f457",
"assets/assets/images/experiments/webook.png": "3a18b6193da2c008ad7437f7f0961ace",
"assets/assets/images/nav_contact.svg": "578398cee8105e54986283266ceee98a",
"assets/assets/images/nav_group.svg": "101342d6a48ac46a76779d0c64aef570",
"assets/assets/images/nav_home.svg": "966e5d311721e82499d16b64e4f26b63",
"assets/assets/images/nav_portfolio.svg": "b313c33c241f1a2cfa6f91422f3f232b",
"assets/assets/images/nav_time.svg": "871bbe237987bb748535a30628ec211e",
"assets/FontManifest.json": "c5085d8cff20e90940169c06778f36ed",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f84176f5f29ef55f0ad4051b65943e6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5a70f8f8f6972d36df6dcd3bf7f69099",
"/": "5a70f8f8f6972d36df6dcd3bf7f69099",
"main.dart.js": "ce2a13dd5c5e491b938e6a9487e03ce9",
"manifest.json": "75d506c1587b51c43c3e98f2ece23f05",
"version.json": "e9d2748d0df1439f07e8b72303b3b3db"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
