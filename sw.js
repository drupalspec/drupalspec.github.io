importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "a8afd3f060760de8dcba074c724153b3"
  },
  {
    "url": "static/css/app.8a0ad71b1b7b6bada3e10c82d177a5d0.css",
    "revision": "970110881d10d475689cef0049eae62c"
  },
  {
    "url": "static/js/app.5900a6629206af8b1762.js",
    "revision": "8046752aa13f060e603b96090ce18363"
  },
  {
    "url": "static/js/manifest.870c3207656397a69f15.js",
    "revision": "6d8d772ff094c19949441ab9337e11c3"
  },
  {
    "url": "static/js/vendor.59d761fd47f787131c45.js",
    "revision": "ee9bf7732354cb224897c7efb337462e"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
