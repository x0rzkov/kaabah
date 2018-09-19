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
    "revision": "c9b305a92e22f50e27e3ad64326a882e"
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
    "url": "assets/js/10.f5ed4eb9.js",
    "revision": "5c4cb61d5857e1f64b7dcbd87cd19931"
  },
  {
    "url": "assets/js/2.ef81631e.js",
    "revision": "70942fb94c5d2ac8769b826ae17f4834"
  },
  {
    "url": "assets/js/3.2bac8d78.js",
    "revision": "d404a02308c055411f327513fa0b0808"
  },
  {
    "url": "assets/js/4.6b0f67a7.js",
    "revision": "f3025062d37a842dd793a25253ad55ad"
  },
  {
    "url": "assets/js/5.3932839c.js",
    "revision": "0aafc354d479558216d10ad1e03429cc"
  },
  {
    "url": "assets/js/6.861fc3e8.js",
    "revision": "351013ae67f803c3b01f84caeb4433e2"
  },
  {
    "url": "assets/js/7.8421df83.js",
    "revision": "4db96c302c7ca0c3025d5e03e0559c88"
  },
  {
    "url": "assets/js/8.af007864.js",
    "revision": "e5005bd5af24fecd863f46b3b466a239"
  },
  {
    "url": "assets/js/9.d9dfeba2.js",
    "revision": "a69ea71c325b1e605cffd05dc5736c88"
  },
  {
    "url": "assets/js/app.71f2e601.js",
    "revision": "b8570586d4de6097740436915562199d"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "03f807ff58809dddcef8aa75095cb720"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "97547caed722313ebc74ae95375e9b1d"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "0bf023c0a433ee39ed1cbc56f26facc0"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "1ffc86573897629de00716777ee1cf6e"
  },
  {
    "url": "index.html",
    "revision": "82486b20aa4e20b57ecc3d2d7bcbe853"
  },
  {
    "url": "LICENSE.html",
    "revision": "ede70c107aa51997c8445c96abcd5942"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "45cba236e104e2ab32969e62dd208731"
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
