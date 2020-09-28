'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bf4748c0f9684e0c52c19213dc52e428",
"assets/assets/images/dashboard/messages.png": "c8321007c5a918299eaf73fd98939cfb",
"assets/assets/images/filters/announcement.png": "6caaeccd03d4c9e3a6b47d70de78391f",
"assets/assets/images/filters/announcement_grey.png": "8d83f1d9e54f4621fd8cc2f6b339dbfc",
"assets/assets/images/filters/anonymous.png": "2cafb92793cb286a9c93cb19f87e2179",
"assets/assets/images/filters/anonymous_grey.png": "966bf5d9fe95c4b5dc6bde3ecd8b48ee",
"assets/assets/images/filters/donation.png": "5a01cb652f33f8ebc30903c3f9c7d2ec",
"assets/assets/images/filters/donation_grey.png": "1bdace0dfa172bff7d55553c6cd9a0cf",
"assets/assets/images/filters/friends.png": "ef0045858db0b58a43cbdab7290fe90d",
"assets/assets/images/filters/friends_grey.png": "bea981f6f9979972895ad9e245245436",
"assets/assets/images/filters/images.png": "bb95b4d93c97f12adf2bc461ad669437",
"assets/assets/images/filters/images_grey.png": "4fbf3054a9dce80d13b361c38a0c13a9",
"assets/assets/images/filters/public.png": "feb7c66979cb20b775f16d0fc7dcc747",
"assets/assets/images/filters/public_grey.png": "c1f715d8a5d34e5235770f7838230a0a",
"assets/assets/images/filters/trending.png": "7d7d9695f5e1d98d9efbb8e1d1c398a9",
"assets/assets/images/filters/trending_grey.png": "7e54f5a23b293afee162b504b86ab896",
"assets/assets/images/login/blue_bubbles.png": "bcdd7453b2bd26230891dbba60000b06",
"assets/assets/images/login/fb_logo.png": "932754d7bb37e6440c0c2fef04652428",
"assets/assets/images/login/girl_portrait.png": "f5478e7625d6d24ceb46d3adb0e7b654",
"assets/assets/images/login/guy_portrait.png": "e91557a38573652728b2e84f673d8ed9",
"assets/assets/images/login/g_logo.png": "6dff3e12761f23fdd30ae0f6756f49dd",
"assets/assets/images/login/login.png": "d509d123a98d1d341c8540539f2d5958",
"assets/assets/images/login/logo_w.png": "fee0ec412654aa9871b6cc1c9ea12a82",
"assets/assets/images/login/otp.png": "5549aff17f596a2879a9f28568c404ab",
"assets/assets/images/login/password.png": "45daa10ad854778ceeb6be6eab9c2d29",
"assets/assets/images/login/signup.png": "7c7e3bc02d26bb866ed4ae49410d0b3f",
"assets/assets/images/search.png": "e74d436f555ed39c62446a6489879481",
"assets/assets/images/temp/0.jpg": "32a92aa7b07407faf9df10ece7dc3f4f",
"assets/assets/images/temp/1.jpg": "4d3f0a62bbe0eabd41f91651ea8c0832",
"assets/assets/images/temp/10.jpg": "182ac2d837a585ade84e5f2ac3dff416",
"assets/assets/images/temp/11.jpg": "dc57fdce68245e7a68f9f728b57667cd",
"assets/assets/images/temp/12.jpg": "49e4f5aefe4df2636f298c3b6df35fde",
"assets/assets/images/temp/13.jpg": "50576efd0fd16e48c80d6744372bd6c4",
"assets/assets/images/temp/14.jpg": "602b7b437e4040c33f0f5060057c6f13",
"assets/assets/images/temp/15.jpg": "cf77b7d426280a4ce8b96c951df03f8b",
"assets/assets/images/temp/2.jpg": "0f009026daa99305e0fb7335717a1594",
"assets/assets/images/temp/3.jpg": "56c8a2f848a99b84d0fe91b816bb12ce",
"assets/assets/images/temp/4.jpg": "dc02fe7e25e7f0e28a4dd628d573ad52",
"assets/assets/images/temp/5.jpg": "bc7c899e8b5a9f81f26858fe5e9c5f34",
"assets/assets/images/temp/6.jpg": "3bce34c93792b7a4504ccda4265ff018",
"assets/assets/images/temp/7.jpg": "1121ddf517575b4a1249721ede9db926",
"assets/assets/images/temp/8.jpg": "eb08e9328143add0862fc50c2fe25003",
"assets/assets/images/temp/9.jpg": "ff1e7fe0a971dd193c49bdadbf7f913a",
"assets/assets/images/temp/image1.png": "aaf5eacc73b3f282f79dc8c6124c9278",
"assets/assets/images/temp/image2.png": "45e6213acbf21a3536acb3a6920c6a2a",
"assets/assets/images/temp/image3.png": "66c8eff6f605eab88d75037640e6b251",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "79a0a86aa203de490c275bf592d038e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "52868c7ad4cfa66a5797bff16f85e370",
"/": "52868c7ad4cfa66a5797bff16f85e370",
"main.dart.js": "c3606079c3ec407d1035d94638d28d38",
"manifest.json": "3e71e3013316eec5a02e7a9a2963d519"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
