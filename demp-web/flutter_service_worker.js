'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "107a89af24ccb469c42a4bf33f2774fd",
"assets/assets/fonts/NotoSans-Bold.ttf": "6a1f7cfe6252b44b6ea1e3fbf5b6661b",
"assets/assets/fonts/NotoSans-Regular.ttf": "21f6235482ecdf67217dfa18483f7716",
"assets/assets/fonts/NotoSans-SemiBold.ttf": "e2c2bc20049bf8fc82a94927ae111294",
"assets/assets/images/card_thumbs/agricultural_product.png": "6539ec80c27a58ee74968c0eb3ead59d",
"assets/assets/images/card_thumbs/automation.png": "f45d23d1ef4d4b1ab8ef8f51ac22858b",
"assets/assets/images/card_thumbs/battery.png": "6002a3c9b34230b4a923c52330ceb33b",
"assets/assets/images/card_thumbs/biogas.png": "0eeb786656f91680d8840c47a4fa6314",
"assets/assets/images/card_thumbs/cost_prediction.png": "9dc71bd9537a5a2c9eb6baacf25b47a3",
"assets/assets/images/card_thumbs/device_summary.png": "16baf44648ddcf85b6f3cb37b81f843d",
"assets/assets/images/card_thumbs/energy_consumption.png": "e276ec838f90ef86147843bbbb94ed1b",
"assets/assets/images/card_thumbs/energy_production.png": "b4b7a09aea247886f6ab8a3bae2a5e4e",
"assets/assets/images/card_thumbs/energy_savings.png": "861eaa78a9c389156a5b2a4402476cee",
"assets/assets/images/card_thumbs/event_log.png": "4413512712850129d8887077368e68de",
"assets/assets/images/card_thumbs/field_1.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_2.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_3.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_4.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_5.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_6.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_7.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/field_8.png": "c9b8e29060b0b7e4062430fb1d07b098",
"assets/assets/images/card_thumbs/greenhouse_1.png": "b6e4ada92f521c9f55d0d3b87f6800b3",
"assets/assets/images/card_thumbs/greenhouse_2.png": "b6e4ada92f521c9f55d0d3b87f6800b3",
"assets/assets/images/card_thumbs/history.png": "016453f85c4df4968b71d586a0a72244",
"assets/assets/images/card_thumbs/income_expense.png": "18ed664cbcf7cfee0aa2cd61741de1f0",
"assets/assets/images/card_thumbs/island_mode.png": "b475d1c843a7136a41e52670b530d1b4",
"assets/assets/images/card_thumbs/net_zero.png": "2de5f53848797fcd0d22053f98ce55ae",
"assets/assets/images/card_thumbs/plant_list.png": "7c92b553b1242cce19fdf912f4e5f96b",
"assets/assets/images/card_thumbs/pond.png": "44194c3b2c27aa7526db175283d5a321",
"assets/assets/images/card_thumbs/portion_energy.png": "167523c1419d7967f5ab258bf7f53f7c",
"assets/assets/images/card_thumbs/solar_cell.png": "bec3c44aa6626ddb05712cc182afa4f2",
"assets/assets/images/card_thumbs/to_do.png": "67dc383e86dc37532d3edc7310227620",
"assets/assets/images/card_thumbs/weather.png": "4c48e26e098ebe077257a61385e1c6da",
"assets/assets/images/card_thumbs/wind_turbine.png": "7097a1f57f82929d3bddeb46945cef3d",
"assets/assets/images/dash_4h.png": "ffe71cb4a09d35f82b99847176620d69",
"assets/assets/images/dash_8h.png": "ce67f5a4b706557276d8bd915a8b8122",
"assets/assets/images/dash_white_v_4h.png": "3c3734c74fe0dac0be5dabbbd01c1759",
"assets/assets/images/dash_white_v_8h.png": "6d5d7872a3cf4ed28a3c5f5d7ea7c4aa",
"assets/assets/images/gifs/biogas.gif": "247829b201215cac56669ab5fb735df9",
"assets/assets/images/gifs/biogas.png": "5934d68b3702f811b97a46ca5b30ee62",
"assets/assets/images/gifs/flow.gif": "2bed6dce2bfe6a87af931f848673fa1c",
"assets/assets/images/gifs/flow.png": "e115f8a48a4a79e98220ef5adb9c37ec",
"assets/assets/images/gifs/solar-night.gif": "d2101dca21292297ccfd95e2f1b21068",
"assets/assets/images/gifs/solar.gif": "d545bf2722cc88561d2c16e83f7caba8",
"assets/assets/images/gifs/turbine.png": "eed853e7d125b43976ac92697a2adbb6",
"assets/assets/images/gifs/turbine01.gif": "a6a8bf5648e636639ff862ce9837ab0e",
"assets/assets/images/gifs/turbine02.gif": "c6e71d5d259d1f10596463562dbb58a8",
"assets/assets/images/gifs/turbine03.gif": "c529c533ffddb1fe3d5a7294f9034a0e",
"assets/assets/images/gifs/turbine04.gif": "594fe645e2499c38e46d8ba9d050187c",
"assets/assets/images/gifs/turbine05.gif": "bf47f400242286fbd074aeda16fb522f",
"assets/assets/images/logos/logo_only.png": "ecc63bd7a03bc8a697bd22d3ba46a5fe",
"assets/assets/images/logos/logo_trim.png": "a19a9868761d5c277473d61bdd4ab23a",
"assets/assets/images/project_dash/biogas_color.png": "443a8c1b9c4447794b66ec7b76ffeea3",
"assets/assets/images/project_dash/biomass_color.png": "a34c617c2cd334b8af5cf01dce7dfeb7",
"assets/assets/images/project_dash/co2.png": "7b86b622a016db712e191f6f63167ef1",
"assets/assets/images/project_dash/energy.png": "8674bccbf0554e3a2e4ab8c37e5d1740",
"assets/assets/images/project_dash/energy_color.png": "86d0ad9e86806b7e7b0f93aefdf27852",
"assets/assets/images/project_dash/gas.png": "a41ae1e504102b4357590305775342cb",
"assets/assets/images/project_dash/gas_color.png": "68db0f7adcc74836dec2e9b9145a02f0",
"assets/assets/images/project_dash/house_color.png": "5cbc076d57442bcf9b24e7125aa89e5f",
"assets/assets/images/project_dash/island_icons/base.png": "eedd2868278da75b846c374bacfb9ef2",
"assets/assets/images/project_dash/island_icons/battery.png": "324765d09ac227fa0d5eb5f73bd0d31f",
"assets/assets/images/project_dash/island_icons/biogas.png": "6684bb710bb2ac6ac2353dd48003558c",
"assets/assets/images/project_dash/island_icons/home.png": "14bb8b250163237cf716d85a1090ee2b",
"assets/assets/images/project_dash/island_icons/pea.png": "4fc68f4211d722d79d747206b03b1aaa",
"assets/assets/images/project_dash/island_icons/popup.gif": "7693280b8c9a78b81b87057c9d461bb3",
"assets/assets/images/project_dash/island_icons/solar.png": "c15d1a7de0a4e10d063c85cb0c96fe05",
"assets/assets/images/project_dash/island_icons/wind_turbine.png": "3fd59309860dd3f5644b140cad92c8d8",
"assets/assets/images/project_dash/solar.png": "2e99d6092300a9d70ab7392b47545e97",
"assets/assets/images/project_dash/solar_color.png": "a45a331dd7ae5c29e1ddf537e2e06bec",
"assets/assets/images/project_dash/total_energy.png": "d06bbb63147afb5b0bd73a47c28bc3c4",
"assets/assets/images/project_dash/water.png": "a1bfa4ff9b1ac7d98f67a7f6105031c9",
"assets/assets/images/project_dash/wind.png": "ec428d752dedb1acad4a99ff7ad82576",
"assets/assets/images/project_dash/wind_color.png": "37ee890ba0ba66bdaeb0a3eb6b917124",
"assets/assets/images/project_dash/wind_turbine_color.png": "53c1f5efdcc8ad27e66ca1ccb8c6f941",
"assets/assets/images/smart_farm/buy.png": "d72ce40e24a8fe88bd7ee1af66866a6f",
"assets/assets/images/smart_farm/crop_1.png": "d14dee08fb728f43cd449bf757aee87d",
"assets/assets/images/smart_farm/drop/00.png": "58c895813641ef5ef8f7b9ba0b3221ae",
"assets/assets/images/smart_farm/drop/10.png": "10639155b0b714578ab3f295a71e4b05",
"assets/assets/images/smart_farm/drop/100.png": "efc13ce31d85cdf79b30ccd67bb1b3eb",
"assets/assets/images/smart_farm/drop/20.png": "78e26e96bb9fd6484d0548be2ad94333",
"assets/assets/images/smart_farm/drop/30.png": "b465b7612ddda982566f18ab8e5fa4d5",
"assets/assets/images/smart_farm/drop/40.png": "8f7f9eb0da76172b3ae5737764e3ae27",
"assets/assets/images/smart_farm/drop/50.png": "389044c158854c65915829bb1839d385",
"assets/assets/images/smart_farm/drop/60.png": "21e7444bd26e2a928af0c4899b2fcf71",
"assets/assets/images/smart_farm/drop/70.png": "db852c4998c82a371747b0b2d1a743de",
"assets/assets/images/smart_farm/drop/80.png": "594a0775dce3da276f0d4ccaebc1bcfa",
"assets/assets/images/smart_farm/drop/90.png": "13e5166884e7e85663ee4eb62dae1702",
"assets/assets/images/smart_farm/drop.png": "1cd2368d8213c3abc7475aa6fb0f7a19",
"assets/assets/images/smart_farm/empty_field.png": "95f4bfa10e638406e50f06a0c917e27c",
"assets/assets/images/smart_farm/faces/color_1.png": "ecb01b692deed68123995593190657e2",
"assets/assets/images/smart_farm/faces/color_2.png": "0d24365e0ff7a3d5d51bee60bb084711",
"assets/assets/images/smart_farm/faces/color_3.png": "e7ce29c65df4a9571b344d923ae1219c",
"assets/assets/images/smart_farm/faces/color_4.png": "0af32dc90299d1a1490d24f7c16b2a9c",
"assets/assets/images/smart_farm/faces/color_5.png": "94a495fce59670dd8779029269475e01",
"assets/assets/images/smart_farm/faces/grey_1.png": "2aedaa8b5ddb790e6b6a4cbdd9deb541",
"assets/assets/images/smart_farm/faces/grey_2.png": "e9763020d9ae03492ee2011fe5835752",
"assets/assets/images/smart_farm/faces/grey_3.png": "d87cb2c148b7f1ed6b305b633aff9f55",
"assets/assets/images/smart_farm/faces/grey_4.png": "7cabedaec66c326fefef0bbffea5ad50",
"assets/assets/images/smart_farm/faces/grey_5.png": "2c3b6dd0b08e2fd83ecd468657df917c",
"assets/assets/images/smart_farm/piggy_bank.png": "e22ea47246a3244322568864524050a4",
"assets/assets/images/smart_farm/planted_field.png": "b02b864335206ad6d31afd7e72f8d61e",
"assets/assets/images/smart_farm/sell.png": "8fd447e00a3349f3ef715253f6a28c9b",
"assets/assets/images/smart_farm/smart_farm.png": "c5157f0a0b15b85eab9b253bb5be742e",
"assets/assets/images/smart_farm/sprinkler.png": "c8b412b8b277b627cd7ee06da5173469",
"assets/assets/images/smart_farm/thermo/00.png": "af1fd0e50426e9432b197a655667fc26",
"assets/assets/images/smart_farm/thermo/10.png": "e128f4b3150e7d5b0145cd489f6f70c6",
"assets/assets/images/smart_farm/thermo/100.png": "353e70176b73268dd5bd1eb790aa5c3e",
"assets/assets/images/smart_farm/thermo/20.png": "e6626c5cedd9111d9ffc04134abccd71",
"assets/assets/images/smart_farm/thermo/30.png": "28fc46e10fd46b6e69009b32af11d7d8",
"assets/assets/images/smart_farm/thermo/40.png": "54f2235befbd0c9c0122f4fc06d08f7b",
"assets/assets/images/smart_farm/thermo/50.png": "906b35250d8d9e738343d325b452eb8e",
"assets/assets/images/smart_farm/thermo/60.png": "f6cc8417c9e14fb4fd53c69a4b9e48fd",
"assets/assets/images/smart_farm/thermo/70.png": "29f0adf7bd243bfb49e5665f8213e70b",
"assets/assets/images/smart_farm/thermo/80.png": "5e863807fdf1d40eb3860936987cffeb",
"assets/assets/images/smart_farm/thermo/90.png": "3013af76906bd97a28d3eacc41922860",
"assets/assets/images/turbine01.gif": "a6a8bf5648e636639ff862ce9837ab0e",
"assets/FontManifest.json": "2ff00b3343af5f9f081988524d21526a",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "bac2f83521ac6f87b87387218e5ec52c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "d1ffea6c39ce92ae07b089ccc8093e8f",
"icons/Icon-192.png": "fe8bba53196ea7704a4495b74892ac1e",
"icons/Icon-512.png": "ff68c61b607ed98f619ef3d43d5b6385",
"index.html": "1c9ab756122ee2862f5fa796c6331853",
"/": "1c9ab756122ee2862f5fa796c6331853",
"main.dart.js": "9ba33bbe098da6259152b0b36decf1df",
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
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
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
