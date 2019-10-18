# ⚗️ Nuxt.js <> Stencil.js Module

[![circle-ci][circle-src]][circle-href]
[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-airbnb/prettier-FF5A5F.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Easy <a href="https://github.com/ionic-team/stencil">Stencil.js</a> component library integration with Nuxt.js.

## Setup

Install with yarn:

```bash
yarn add nuxt-stencil
```

Install with npm:

```bash
npm install nuxt-stencil
```

**nuxt.config.js**

```ts
module.exports = {
  buildModules: ['nuxt-stencil'],

  stencil: {
    /**
     * Required options
     */

    // Your library name, or the path to its root folder.
    lib: 'bulmil',

    // The prefix to whitelist
    prefix: 'bm-',

    /**
     * Options below are optional
     */

    // Stencil rendering options
    renderOptions: {},

    // By default, it takes the lib name. e.g: bulmil/dist/hydrate
    hydratePath: null,

    // By default, it takes the lib name. e.g: bulmil/dist/loader
    loaderPath: null,

    // By default, it takes the prefix. e.g: [/bm-\w*/]
    ignoredElements: null,
  },
};
```

## How it works

This module has multiple functionalities:

1. It creates two hooks for SSR & Generate, using `render:route` & `generate:page`, it will render the stencil components before sending back the request to the browser.
2. It injects a plugin for CSR to define the custom elements from your stencil library.
3. It configures `Vue.config.ignoredElements` to ignore custom elements from your stencil library.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn dev` or `npm run dev`

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/nuxt-stencil.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-stencil
[circle-src]: https://circleci.com/gh/Gomah/nuxt-stencil.svg?style=shield
[circle-href]: https://circleci.com/gh/Gomah/nuxt-stencil
[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-stencil/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-stencil
[david-dm-src]: https://david-dm.org/gomah/nuxt-stencil/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/nuxt-stencil
