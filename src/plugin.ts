import Vue from 'vue';

const ignoredElements = '<%= options.ignoredElements %>'
  ? '<%= options.ignoredElements %>'.split(',')
  : [new RegExp(`<%= options.prefix %>\w*`)];

// Tell Vue to ignore all components defined in the stencil components library.
Vue.config.ignoredElements = ignoredElements;

export default (): void => {
  if (process.client) {
    const { defineCustomElements, applyPolyfills } = require('<%= options.loaderPath %>');

    // Bind the custom elements to the window object
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
};
