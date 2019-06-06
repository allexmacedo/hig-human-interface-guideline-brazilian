importScripts('/hig-human-interface-guidelines-portuguese/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/06d3d8aef2b457dfa3da.js",
    "revision": "1a404ea316f91588e620cf0000bedd80"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/10ed7f0bdb0daa08ae05.js",
    "revision": "561bb87e7365271f0970796dbf98d69e"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/6a6e919eb26c22d2b93d.js",
    "revision": "4c4934622251297ac60efb80f62fb7c8"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/6d7b36addc1fcafe5dda.js",
    "revision": "ba13ab02e44211d71965548090061fcf"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/8fc36e5646c5ef233667.js",
    "revision": "c034f5c811fd5e9ef02a9f4cb40858c9"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/c47a30db2133888509ef.js",
    "revision": "d7814fcce63ac1261afaf3fabba8bd42"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/e0c66da83739eebd983a.js",
    "revision": "fca7186771bee0a9c4001d4199350631"
  },
  {
    "url": "/hig-human-interface-guidelines-portuguese/_nuxt/e2b696568d6f94b2be1d.js",
    "revision": "1beddb918f7563c3928b1fb0f7baa694"
  }
], {
  "cacheId": "hig",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/hig-human-interface-guidelines-portuguese/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/hig-human-interface-guidelines-portuguese/.*'), workbox.strategies.networkFirst({}), 'GET')
