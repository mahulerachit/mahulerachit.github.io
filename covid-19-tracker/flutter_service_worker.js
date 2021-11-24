'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8f6fb45b0cee65979cb6c5391481601e",
"assets/assets/fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/NewsCycle-Bold.ttf": "67d93b410199229757ce2ade24761967",
"assets/assets/fonts/NewsCycle-Regular.ttf": "7366dbe4bbfa549ce61c1a94eb7c3383",
"assets/assets/images/auto_icon.png": "2ad0d650cc0a0b5dc7d360009bf0455b",
"assets/assets/images/busted_stamp_large.png": "a324fd613dc920c063cee7d9a3559b2e",
"assets/assets/images/checked_1.svg": "6e810151997f8adfe4aa4749aab62143",
"assets/assets/images/checked_2.svg": "6766a3219d6fc0eaeeb934ec394faa07",
"assets/assets/images/coronavirus.svg": "54b7d6c3a6f5b2daec006d26c0214c4d",
"assets/assets/images/coronavirus_free.svg": "2219d6dcaa8f95183970a3cda311b854",
"assets/assets/images/deceased.svg": "f1e80a0af5a05467e814fde7cc701881",
"assets/assets/images/detailed_stats.png": "b9fb0851ca74dc13bf1c9ed26f284abe",
"assets/assets/images/essential_resources.png": "e5cb88e237f22a392b8f9b53635050ec",
"assets/assets/images/hand_wash.png": "ab2f75138bb1a97b332739edbc7960cf",
"assets/assets/images/hand_wash_steps/initial_info.png": "f2ad5ca963cc124b86c4bb3d8ec3ddd3",
"assets/assets/images/hand_wash_steps/step_1.png": "c7663b1e91585df1e7fad856c78d691a",
"assets/assets/images/hand_wash_steps/step_2.png": "2562fd212d6be03b11aef60437607ef9",
"assets/assets/images/hand_wash_steps/step_3.png": "3515990d3d91e2f2c942ef77e97582d1",
"assets/assets/images/hand_wash_steps/step_4.png": "650e5b37dc0f27805c5265d6706ac07d",
"assets/assets/images/hand_wash_steps/step_5.png": "9f8926716373f92b1711af481e15b3e5",
"assets/assets/images/hand_wash_steps/step_6.png": "4fba4e6e1fa759da6957d24804f78f93",
"assets/assets/images/hand_wash_steps/step_7.png": "25563aa4702f03ea715384c22b9d9c8f",
"assets/assets/images/hand_wash_steps/step_8.png": "d63da9165a0a7a7cde81df0135239271",
"assets/assets/images/hand_wash_steps/step_9.png": "b4de3173787391b79a52639501f49039",
"assets/assets/images/how_to_put_mask/masks_1_1.png": "6c26bea610074f65617886730d437b7d",
"assets/assets/images/how_to_put_mask/masks_1_2.png": "f74836bd341a804ec24c17df0482e28d",
"assets/assets/images/how_to_put_mask/masks_1_3.png": "dca0245e686ae1d4d075958c7693d439",
"assets/assets/images/how_to_put_mask/masks_2_1.png": "9c420bfe94c5ca5a158ae8a042825e38",
"assets/assets/images/how_to_put_mask/masks_2_2.png": "f6285cf03776552d5f4f0bce23d6b1dc",
"assets/assets/images/how_to_put_mask/masks_2_3.png": "7dd00d49fa531d07efed6051bf427e62",
"assets/assets/images/how_to_put_mask/masks_3_1.png": "8d57fc8ca1c0a99169181cf148cadb48",
"assets/assets/images/how_to_put_mask/masks_3_2.png": "4d39683ca7f925c0c0a6fc63c87c047d",
"assets/assets/images/how_to_put_mask/masks_3_3.png": "9457636e7f7ede9f638df1b0d4f93c78",
"assets/assets/images/how_to_put_mask/masks_4_1.png": "8d57fc8ca1c0a99169181cf148cadb48",
"assets/assets/images/how_to_put_mask/masks_4_2.png": "c5f1b77472aed485c4fc7df776b53aae",
"assets/assets/images/how_to_put_mask/masks_4_3.png": "9209b922a6f5d9fade41fd5043f6dce0",
"assets/assets/images/how_to_put_mask/masks_5_1.png": "8d57fc8ca1c0a99169181cf148cadb48",
"assets/assets/images/how_to_put_mask/masks_5_2.png": "369146c6dd3ddd967c71a6fb36040a50",
"assets/assets/images/how_to_put_mask/masks_5_3.png": "08eb8543aaf71d3d9d46632442d51d64",
"assets/assets/images/how_to_put_mask/masks_6_1.png": "8d57fc8ca1c0a99169181cf148cadb48",
"assets/assets/images/how_to_put_mask/masks_6_2.png": "cb5a8af8a37a0036a140659033258139",
"assets/assets/images/how_to_put_mask/masks_6_3.png": "66f21ea5dd9bc840907fac1911839299",
"assets/assets/images/how_to_put_mask/masks_7_1.png": "8d57fc8ca1c0a99169181cf148cadb48",
"assets/assets/images/how_to_put_mask/masks_7_2.png": "5b46102d4204bc851338b6c71aca0681",
"assets/assets/images/how_to_put_mask/masks_7_3.png": "5a51f1176561cfc1af8eb81b5e308efb",
"assets/assets/images/infected.svg": "a764e853c42df3b5d6c459a49864fa13",
"assets/assets/images/liquid_blue_logo.png": "8ce61127ccbb234b43edfc7c4b062b64",
"assets/assets/images/manual_icon.png": "e0670d4d261423bbe5cc7b88132f8f03",
"assets/assets/images/masks_main.png": "1be20156d32c7c5751f96e91a3240cd2",
"assets/assets/images/materials/materials_background.png": "74db5e99aca6aae8b5358cacd14ac77e",
"assets/assets/images/materials/material_1.png": "02458e9e97cfb76c0bc72c450d7a0fe3",
"assets/assets/images/materials/material_10.png": "ef6121a03e90959e94396a9b539365c8",
"assets/assets/images/materials/material_2.png": "4a09497b6bc0cd60bec3c9fac7626bd3",
"assets/assets/images/materials/material_3.png": "7554bb63d0a1b3fe9c534d5c17587413",
"assets/assets/images/materials/material_4.png": "6820e147899cc990e39e673512ed3972",
"assets/assets/images/materials/material_5.png": "ea4b128d72bdeb6a58ee20099370e524",
"assets/assets/images/materials/material_6.png": "0a83cebbf7ad9c3343db278b8c9baaae",
"assets/assets/images/materials/material_7.png": "cb9fba4513f4bbe29d0b6b7badf1ea6b",
"assets/assets/images/materials/material_8.png": "4fdaa8c01ebde72ecfc55fa9ef18d876",
"assets/assets/images/materials/material_9.png": "e9c5a7fd1d25ae4bfb89e10097a45d61",
"assets/assets/images/material_life.png": "d32fade5b74eaacf75d4b6e25447eac2",
"assets/assets/images/menu.svg": "a8c9dd015214f7522a9af0e35bb76f92",
"assets/assets/images/moon.png": "a137021496a99aeff5b8ecc51f63efa1",
"assets/assets/images/myths/myths_10_1.png": "7f0372a793fdf5f1b4e0cd025a85c210",
"assets/assets/images/myths/myths_10_2.png": "56bf31cefa32848256db852d61ae7c1e",
"assets/assets/images/myths/myths_10_3.png": "c8bf25f2445e120ceea726cb4aa6b7e8",
"assets/assets/images/myths/myths_11_1.png": "75d0a25b804e96c030787ab8372ee362",
"assets/assets/images/myths/myths_11_2.png": "cb3b86383d70479b751452a1daf958ab",
"assets/assets/images/myths/myths_11_3.png": "cd2c696272e892bc9b8056aee39ff142",
"assets/assets/images/myths/myths_12_1.png": "73937fa490b5370bedb79064f01478c7",
"assets/assets/images/myths/myths_12_2.png": "3ef087d5f0547fae052491a2c1bc3779",
"assets/assets/images/myths/myths_12_3.png": "adbfee71fe87c15bf2b94841d27c470f",
"assets/assets/images/myths/myths_13_1.png": "ebf4a052e5416a8bcd3ed654786dbb49",
"assets/assets/images/myths/myths_13_2.png": "ce58acf376aea279aef9845875cb19e5",
"assets/assets/images/myths/myths_13_3.png": "af46ce14372f8ce1aa7651f665e2d60e",
"assets/assets/images/myths/myths_14_1.png": "47d4025fe719c4496382e537aa6bd83e",
"assets/assets/images/myths/myths_14_2.png": "d2f3f335711ef9c9739ca59e2f768524",
"assets/assets/images/myths/myths_14_3.png": "62339beab44876c9cd860c5da34eaf0a",
"assets/assets/images/myths/myths_15_1.png": "ceb45ea45ec8958245d89f3252d95018",
"assets/assets/images/myths/myths_15_2.png": "9723a02c0a9e14e1a16d674a99007c81",
"assets/assets/images/myths/myths_15_3.png": "59be316da26e70d35b0e559ca6f42a50",
"assets/assets/images/myths/myths_16_1.png": "781a86c1e65082534237d9e818c307ee",
"assets/assets/images/myths/myths_16_2.png": "2a2e08f99d4f38380a5c215b60280d92",
"assets/assets/images/myths/myths_16_3.png": "054f5e35f32c0d870b02387b3f0d6624",
"assets/assets/images/myths/myths_17_1.png": "dee3f9b8892319dc30bd434572fa4af6",
"assets/assets/images/myths/myths_17_2.png": "406db89eb16d887ee9275dcd5e7bb65a",
"assets/assets/images/myths/myths_17_3.png": "2ece470db0131eef2812e073f0dad5ec",
"assets/assets/images/myths/myths_18_1.png": "e66f5ddd2806868cb23fed9fdc240f6a",
"assets/assets/images/myths/myths_18_2.png": "5ff9edaeef1a685e32dbb23109e21624",
"assets/assets/images/myths/myths_18_3.png": "1563abc85b962bb899032083ca8f1b67",
"assets/assets/images/myths/myths_19_1.png": "6922816958d1d03475ca31cc70485336",
"assets/assets/images/myths/myths_19_2.png": "1707fd2a6418a8273882f8841fe3c427",
"assets/assets/images/myths/myths_19_3.png": "5f4640c8030f3365e829c43eef361a11",
"assets/assets/images/myths/myths_1_1.png": "1bda8348d5e0f45ab49a28559a0ed7e2",
"assets/assets/images/myths/myths_1_2.png": "0fe5119ca1348b4afe9b52c65a6a5082",
"assets/assets/images/myths/myths_1_3.png": "9e34266fd13c698568083bea350328e5",
"assets/assets/images/myths/myths_2_1.png": "f8f1dcee095cbf00a26d1fcdad4c6b36",
"assets/assets/images/myths/myths_2_2.png": "7c833e9d89c72df055998cd0acea20ba",
"assets/assets/images/myths/myths_2_3.png": "953dd5531bafe30906b1e5bd4a94fe5d",
"assets/assets/images/myths/myths_3_1.png": "7bf0aa8d8f1e614c23220c3d5f0f36a0",
"assets/assets/images/myths/myths_3_2.png": "3894a10d52a0fb5d6b194fbd2c8e8d30",
"assets/assets/images/myths/myths_3_3.png": "8164dcb8565ea4f9d0cf60928817f567",
"assets/assets/images/myths/myths_4_1.png": "0407753f5e1d508ee7acc3dc93f06f5c",
"assets/assets/images/myths/myths_4_2.png": "010867cf9334cfd18da8d064c3c10d20",
"assets/assets/images/myths/myths_4_3.png": "7921cd1dc9c8d4f4e7b50ab2db3972aa",
"assets/assets/images/myths/myths_5_1.png": "5161836e9248f0059e66c33f7fddf859",
"assets/assets/images/myths/myths_5_2.png": "c4e4d674e5d5eaa7f87f87c7a04823a8",
"assets/assets/images/myths/myths_5_3.png": "027136eed25c7ab2a3d09a74a9df9800",
"assets/assets/images/myths/myths_6_1.png": "6555f92c1a67ae265b8105ab46acb081",
"assets/assets/images/myths/myths_6_2.png": "f16f7f36c366c0e11b7f0aaa240a301e",
"assets/assets/images/myths/myths_6_3.png": "4d18993ec01bdc4585b47c71c8f0e684",
"assets/assets/images/myths/myths_7_1.png": "1af7867056dc88973897b8349552ee30",
"assets/assets/images/myths/myths_7_2.png": "2819d66e279ec43e4c97c68e2b1a80a8",
"assets/assets/images/myths/myths_7_3.png": "5aab8d306f6d3b3256ec3cac617310c9",
"assets/assets/images/myths/myths_8_1.png": "a8409e0189b01594f08d8c9ce84c62b6",
"assets/assets/images/myths/myths_8_2.png": "f834895b167233309e9f9e896bfeb4d3",
"assets/assets/images/myths/myths_8_3.png": "209509147161c24ad546ac0a1e4651d0",
"assets/assets/images/myths/myths_9_1.png": "5d59af911ec5480edacf53d20b9cd724",
"assets/assets/images/myths/myths_9_2.png": "ecb87187f5f767c8b3882b60b27163e6",
"assets/assets/images/myths/myths_9_3.png": "6c6e3c9f8cc0b3c6a4dcc05da831dddf",
"assets/assets/images/myths/myths_footer.png": "3d84a48877928a8e42b6e3f9a4a567f7",
"assets/assets/images/nurse.png": "5de0533c8f1db736ccd8bb0b361d2877",
"assets/assets/images/pregnancy/pregnancy_1.png": "bf49383a281de8d0aadd6c5af8d8be49",
"assets/assets/images/pregnancy/pregnancy_2.png": "39a34633d322db20f28ca413eea67d89",
"assets/assets/images/pregnancy/pregnancy_3.png": "f78932d784c9578657da640a26eafb72",
"assets/assets/images/pregnancy/pregnancy_4.png": "4d9ae7df024bb5e91fc95f0fdad3c0b2",
"assets/assets/images/pregnancy/pregnancy_5.png": "dd2b69e478314e270611a5df0c48fdc3",
"assets/assets/images/pregnancy/pregnancy_6.png": "becd4d868111a7f1f440a59588595f5c",
"assets/assets/images/protect_yourself/protect_1.png": "1e739386c6a9a77c71979fc4e19b14b3",
"assets/assets/images/protect_yourself/protect_2.png": "ff50cd14ded8a001ed66d3caa8bbe64a",
"assets/assets/images/protect_yourself/protect_3.png": "f3cd7427121cc432c5632d83d3e8e28c",
"assets/assets/images/protect_yourself/protect_4.png": "14c31c412fca0030f826e13964ce078d",
"assets/assets/images/questions/questions_1.png": "afccb20e8ebbe11da8c46ecad3e63b78",
"assets/assets/images/questions/questions_2.png": "9cd0a7cd8a7e0761226049888033c358",
"assets/assets/images/questions/questions_3.png": "00b07ee85a0502a8522a28130cc103d2",
"assets/assets/images/questions/questions_4.png": "ead2e489f9f8962b546ed5336f0d24e3",
"assets/assets/images/questions/questions_5.png": "ea0e8530b8b0e1af63817b933bc364e4",
"assets/assets/images/questions/questions_6.png": "c6d8b8a32350470c6b8b64102d1a1a32",
"assets/assets/images/questions/questions_7.png": "188324af7971981bfd314b795614d1f3",
"assets/assets/images/questions/questions_8.png": "2d88991fb79b62b3c611c98add3e4884",
"assets/assets/images/running.svg": "4b39938ee1260f1a028508b05d6003be",
"assets/assets/images/search.svg": "2985e787b759881ef149b9735aea771a",
"assets/assets/images/social_distancing_background.png": "6b98cae7e318aa0910cb538acd53dc7c",
"assets/assets/images/social_distancing_wide.png": "0c674312b7b066360a02b96658ad2eed",
"assets/assets/images/social_distancing_yellow_line.png": "8016c59a9d1927205be0e0e07f0d9581",
"assets/assets/images/stay_home.png": "d36f0a78a793030eaa7e1ec77d85a91d",
"assets/assets/images/stay_home_foreground.png": "f7880cdf623f86fc76114a075a64b3b3",
"assets/assets/images/stay_home_large.png": "8be9bcc383b05d2e03b6e9cbf2f5c65b",
"assets/assets/images/sun.png": "6dd2cd0bdc46da948fb08c7d81813d9b",
"assets/assets/images/symptoms/symptoms_1.png": "7fb6284e8be355937f46873609ba55a7",
"assets/assets/images/symptoms/symptoms_2.png": "b061f0090313af2cfe85c3971fba446d",
"assets/assets/images/symptoms/symptoms_3.png": "ea7fd297ea57969e5b3f5cd1be25271b",
"assets/assets/images/symptoms/symptoms_background.png": "fc6b0e3120769ad1bbc72ca9660da516",
"assets/assets/images/symptoms_wide.png": "486294792e5e907df61960224b87298a",
"assets/assets/images/virus.svg": "30be83c7f904b867dec8899ebfe0d9e6",
"assets/assets/images/wash_your_hands.svg": "212d9050443ca765117feb35e8209d52",
"assets/assets/images/who/faqs.png": "bf03788211e4891f94118201d1fbb160",
"assets/assets/images/who/faqs_small.png": "cb4e2a5e10e0e7683ec46671880da55e",
"assets/assets/images/who/myth_busted.png": "6098fd0caa0926675d315e5a918184e7",
"assets/assets/images/who/pregnancy.png": "e0727b2ccb9c68b5cab8a33ca75b6ef0",
"assets/assets/images/who/protect_yourself.png": "2b9bb9b2e1d0d9426e872ac78531bf0d",
"assets/assets/images/who/tips.png": "995554d3f94273f941f4bbdb9b07644e",
"assets/assets/images/who_logo_icon.png": "38322778c71455d7363fe591c48940f6",
"assets/assets/images/who_logo_icon_white.png": "05db331153a2d8d4e1366a49a257af38",
"assets/assets/images/who_logo_small.png": "9cd5a9e0856be8cd567e3bafbc9a51cb",
"assets/assets/images/who_logo_text.png": "950a95436a059b1fd9c2ff62a000b879",
"assets/assets/images/youtube_icon_logo_only.png": "494954cfe89b7174398ee68f40113bd1",
"assets/assets/images/youtube_logo_dark.png": "63bf76184f29caf950a689c87199d6d2",
"assets/FontManifest.json": "9ded0c8015afd89b796032438987a59a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "107f7bf661d8e21219e7e0cc97dfb2a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d8dc2fb3c5d15d07f04f8714ccde328b",
"/": "d8dc2fb3c5d15d07f04f8714ccde328b",
"main.dart.js": "9dd21faa41acedc9ce30692601632d1a",
"manifest.json": "735e2b76f0e6ec0af2cfa39fae641b7b",
"version.json": "9e5cd1a6ddc9f5a4c4d65dbc353cd8ce"
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
