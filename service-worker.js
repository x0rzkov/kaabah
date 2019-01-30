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
    "revision": "38d8d89cea334968995ddf9c4dcd453b"
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
    "url": "assets/img/kaabah-principle.9287b283.svg",
    "revision": "9287b283b4f9f41f9e203f2e079e858d"
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
    "url": "assets/js/10.ab9d1445.js",
    "revision": "6b05600ab790c0023939111e4136c660"
  },
  {
    "url": "assets/js/11.f366afea.js",
    "revision": "0b1e556f7d4cbbb04acc220e1e6acf66"
  },
  {
    "url": "assets/js/12.67f80405.js",
    "revision": "b83ba57f3f9082b2c4b394bf894f48d7"
  },
  {
    "url": "assets/js/13.ea2ed627.js",
    "revision": "eff3a4379e0759cca3355c48da83c6ce"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.5b658cdb.js",
    "revision": "6fb393636c75955ff6eb7f73dcb5b33d"
  },
  {
    "url": "assets/js/4.03ff8b2f.js",
    "revision": "45c7b9b11863f6bfba36d8910ef95fff"
  },
  {
    "url": "assets/js/5.e66b8c53.js",
    "revision": "f1af2faa8a14436ec1629eeb0826a336"
  },
  {
    "url": "assets/js/6.b78a9ada.js",
    "revision": "6d151e5c65ec1b6db0193c3a8564e6c2"
  },
  {
    "url": "assets/js/7.ae3bf9bd.js",
    "revision": "968a3dab481069a196aafc0c5a1141aa"
  },
  {
    "url": "assets/js/8.57af3f82.js",
    "revision": "97c586f75ef2929b5fe1edd7be904ac5"
  },
  {
    "url": "assets/js/9.6fb3d9ee.js",
    "revision": "fcbead85113525e837d7b073d9feeefa"
  },
  {
    "url": "assets/js/app.3566e07c.js",
    "revision": "4b044eaa5dc42206656924eb91b073dc"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "8aa70d5ea7867c68ffd9567238294255"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "4b20b69561df3284c4208ffda41be92c"
  },
  {
    "url": "how-to-use-it/advanced-usage.html",
    "revision": "19ea4e97ba1aad8c5d8b04ab5d8df2b0"
  },
  {
    "url": "how-to-use-it/configuration-variables.html",
    "revision": "84f78f89cddbb17d2fed720ea23b4105"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "ba2be8b0b1a6cf1517e231bb8222cfa9"
  },
  {
    "url": "how-to-use-it/helper-commands.html",
    "revision": "4bd03da9acaf640e3391f59087316de1"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "fc7b8e51a72272d5c2eb69aef6d04a97"
  },
  {
    "url": "index.html",
    "revision": "b12072562208c0e43167e8f231a39078"
  },
  {
    "url": "LICENSE.html",
    "revision": "4dce1108c65ba38e70ce0a388e1f1466"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "23e1b1cf6e063ddbc5f7a0eae59783ba"
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
