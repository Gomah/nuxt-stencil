module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-useless-escape': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
      },
    ],
    'global-require': 0,
  },
  settings: {
    'import/core-modules': ['@nuxt/types', 'vue'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
};
