'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f4275e0836966c07e7f5524882ee5bea",
"assets/assets/fonts/NotoSans-Bold.ttf": "6a1f7cfe6252b44b6ea1e3fbf5b6661b",
"assets/assets/fonts/NotoSans-Regular.ttf": "21f6235482ecdf67217dfa18483f7716",
"assets/assets/fonts/NotoSans-SemiBold.ttf": "e2c2bc20049bf8fc82a94927ae111294",
"assets/assets/images/dash_4h.png": "ffe71cb4a09d35f82b99847176620d69",
"assets/assets/images/dash_8h.png": "ce67f5a4b706557276d8bd915a8b8122",
"assets/assets/images/dash_white_v_4h.png": "3c3734c74fe0dac0be5dabbbd01c1759",
"assets/assets/images/dash_white_v_8h.png": "6d5d7872a3cf4ed28a3c5f5d7ea7c4aa",
"assets/assets/images/logos/logo_only.png": "ecc63bd7a03bc8a697bd22d3ba46a5fe",
"assets/assets/images/logos/logo_trim.png": "a19a9868761d5c277473d61bdd4ab23a",
"assets/assets/images/project_dash/battery.png": "6002a3c9b34230b4a923c52330ceb33b",
"assets/assets/images/project_dash/biogas_color.png": "443a8c1b9c4447794b66ec7b76ffeea3",
"assets/assets/images/project_dash/biomass_color.png": "a34c617c2cd334b8af5cf01dce7dfeb7",
"assets/assets/images/project_dash/co2.png": "7b86b622a016db712e191f6f63167ef1",
"assets/assets/images/project_dash/cost_prediction.png": "9dc71bd9537a5a2c9eb6baacf25b47a3",
"assets/assets/images/project_dash/device_summary.png": "16baf44648ddcf85b6f3cb37b81f843d",
"assets/assets/images/project_dash/energy.png": "8674bccbf0554e3a2e4ab8c37e5d1740",
"assets/assets/images/project_dash/energy_color.png": "86d0ad9e86806b7e7b0f93aefdf27852",
"assets/assets/images/project_dash/energy_consumption.png": "e276ec838f90ef86147843bbbb94ed1b",
"assets/assets/images/project_dash/energy_savings.png": "861eaa78a9c389156a5b2a4402476cee",
"assets/assets/images/project_dash/event_log.png": "4413512712850129d8887077368e68de",
"assets/assets/images/project_dash/gas.png": "a41ae1e504102b4357590305775342cb",
"assets/assets/images/project_dash/gas_color.png": "68db0f7adcc74836dec2e9b9145a02f0",
"assets/assets/images/project_dash/house_color.png": "5cbc076d57442bcf9b24e7125aa89e5f",
"assets/assets/images/project_dash/island_mode.png": "b475d1c843a7136a41e52670b530d1b4",
"assets/assets/images/project_dash/portion_energy.png": "167523c1419d7967f5ab258bf7f53f7c",
"assets/assets/images/project_dash/solar.png": "2e99d6092300a9d70ab7392b47545e97",
"assets/assets/images/project_dash/solar_color.png": "a45a331dd7ae5c29e1ddf537e2e06bec",
"assets/assets/images/project_dash/total_energy.png": "d06bbb63147afb5b0bd73a47c28bc3c4",
"assets/assets/images/project_dash/water.png": "a1bfa4ff9b1ac7d98f67a7f6105031c9",
"assets/assets/images/project_dash/wind.png": "ec428d752dedb1acad4a99ff7ad82576",
"assets/assets/images/project_dash/wind_color.png": "37ee890ba0ba66bdaeb0a3eb6b917124",
"assets/assets/images/project_dash/wind_turbine_color.png": "53c1f5efdcc8ad27e66ca1ccb8c6f941",
"assets/assets/images/smart_farm/buy.png": "d72ce40e24a8fe88bd7ee1af66866a6f",
"assets/assets/images/smart_farm/crop_1.png": "d14dee08fb728f43cd449bf757aee87d",
"assets/assets/images/smart_farm/empty_field.png": "95f4bfa10e638406e50f06a0c917e27c",
"assets/assets/images/smart_farm/piggy_bank.png": "e22ea47246a3244322568864524050a4",
"assets/assets/images/smart_farm/planted_field.png": "b02b864335206ad6d31afd7e72f8d61e",
"assets/assets/images/smart_farm/sell.png": "8fd447e00a3349f3ef715253f6a28c9b",
"assets/assets/images/smart_farm/smart_farm.png": "c5157f0a0b15b85eab9b253bb5be742e",
"assets/FontManifest.json": "66b56a544ba57ece0d428ed6934019dd",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "6301a8314ba87454b523115452e7e363",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "d1ffea6c39ce92ae07b089ccc8093e8f",
"icons/Icon-192.png": "fe8bba53196ea7704a4495b74892ac1e",
"icons/Icon-512.png": "ff68c61b607ed98f619ef3d43d5b6385",
"index.html": "1c9ab756122ee2862f5fa796c6331853",
"/": "1c9ab756122ee2862f5fa796c6331853",
"main.dart.js": "73847dad1a8824dce9ef88d64f188882",
"manifest.json": "09ffbd1540cbbca5a49798e3e569cd27"
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
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
