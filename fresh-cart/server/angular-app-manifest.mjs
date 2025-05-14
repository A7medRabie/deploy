
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/auth",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RORTU2EI.js",
      "chunk-UFCEK7IO.js",
      "chunk-FYUA6VEJ.js"
    ],
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TY2SAQ4Q.js",
      "chunk-UFCEK7IO.js",
      "chunk-FYUA6VEJ.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RORTU2EI.js",
      "chunk-UFCEK7IO.js",
      "chunk-FYUA6VEJ.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-INPBMHAD.js",
      "chunk-6EHCHUMM.js",
      "chunk-7YLV52A2.js",
      "chunk-FYUA6VEJ.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-QZNI7VTK.js"
    ],
    "route": "/brands"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Z5453WF4.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RN2C4MMG.js"
    ],
    "route": "/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I44VSTQE.js"
    ],
    "route": "/chekout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FSQLAA7A.js",
      "chunk-7YLV52A2.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-URWZ2PIP.js",
      "chunk-6EHCHUMM.js",
      "chunk-7YLV52A2.js",
      "chunk-FYUA6VEJ.js"
    ],
    "route": "/product-details/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-M6ZUHHRG.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12093, hash: 'e63c6b8ae1d9a62b54fb998d61298f030f70d93afd77fa601a4f1c53534c3104', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1363, hash: '9a202c241dc2b260f15f7eb026484483d77cd90f326ab7ad8674cfdd0e845a02', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GYZHVDVK.css': {size: 185638, hash: 'UE1p5UyImdA', text: () => import('./assets-chunks/styles-GYZHVDVK_css.mjs').then(m => m.default)}
  },
};
