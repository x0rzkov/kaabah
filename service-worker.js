/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f93b9d21b70f0917f26a037cee087dc1"
  },
  {
    "url": "assets/css/0.styles.8280e1ab.css",
    "revision": "f43b5946ff4cc02bc40bf3e9906733b3"
  },
  {
    "url": "assets/img/kaabah-overview.74a01c42.svg",
    "revision": "74a01c42f4bb848d1bf4e6d2f0ae0b4e"
  },
  {
    "url": "assets/img/kaabah-swarm.d67d6932.svg",
    "revision": "d67d6932d2eadf22716ac6ed7866033e"
  },
  {
    "url": "assets/img/kaabah-terraform.555a6e18.svg",
    "revision": "555a6e1874a33aa44d51fdb799ff8d10"
  },
  {
    "url": "assets/img/kaabah-traefik.96292850.svg",
    "revision": "96292850fde5e2c3e334b02f22d41661"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c35057eb.js",
    "revision": "3b9fc17a4a1c1771e116a15b3c9cc317"
  },
  {
    "url": "assets/js/11.01152ee6.js",
    "revision": "eb805e8c409ae523529803498749367f"
  },
  {
    "url": "assets/js/12.6bb55d9a.js",
    "revision": "38376b9cff4c35f1839c9728a2d1dc8c"
  },
  {
    "url": "assets/js/13.44aa4255.js",
    "revision": "7f1e9047bd17a140fe277efadbf4eb38"
  },
  {
    "url": "assets/js/2.e69eec40.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.aeea5ff6.js",
    "revision": "f1a3362f68b87d61831693a9cd502248"
  },
  {
    "url": "assets/js/4.6b0f67a7.js",
    "revision": "f3025062d37a842dd793a25253ad55ad"
  },
  {
    "url": "assets/js/5.6a324788.js",
    "revision": "55487daacd731d6c425a33251e6d7e31"
  },
  {
    "url": "assets/js/6.ad7fb63a.js",
    "revision": "820615ece6c9ec80fa9f49ef6944eec9"
  },
  {
    "url": "assets/js/7.f1c75261.js",
    "revision": "e915f9f494105c4611d952f6f43dcec1"
  },
  {
    "url": "assets/js/8.6e412be3.js",
    "revision": "7aeb0fe408c481d64b80f46a656b2b43"
  },
  {
    "url": "assets/js/9.10436e03.js",
    "revision": "c7a4373355c8e8912622ea852d7fdc12"
  },
  {
    "url": "assets/js/app.b596d604.js",
    "revision": "4b222cb0b09eecb236f764d7b628f11c"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "cd27d9c246f286f6282311ad42606284"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "29d148a840c64a7657094e3af51991fa"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "7689c005c987af9b17fa4c0072934f5b"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "f3ed74021f893bec35156546619ae62d"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "a1b848afe05798ccdd90b892d5d191d2"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "6e7986325cb982e3ba0acf6a5d241e5e"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "a97deaf4344a85732058084d6111b3e5"
  },
  {
    "url": "index.html",
    "revision": "d3c9f24bdcd645af6f460f41799ab7e2"
  },
  {
    "url": "LICENSE.html",
    "revision": "86871b532b414ae624674dbf45154a94"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "04c937fbfbc8f2a0035b01e82dddc46a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
