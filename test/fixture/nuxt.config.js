const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  buildModules: ['../../lib/module'],
  stencil: {
    lib: 'bulmil',
    prefix: 'bm-',

    // renderOptions: {},
    // hydratePath: null,
    // loaderPath: null,
    // ignoredElements: [/bm-\w*/],
  },
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production',
};
