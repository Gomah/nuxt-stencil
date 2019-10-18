export default async (): Promise<void> => {
  const { defineCustomElements, applyPolyfills } = require('<%= options.loaderPath %>');

  await applyPolyfills();
  defineCustomElements(window);
};
