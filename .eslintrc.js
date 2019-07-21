module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'standard-jsdoc',
  ],
  plugins: [
    'no-loops',
    'unicorn',
    'async-await',
    'prefer-object-spread',
    'promise',
    'security',
    'simple-import-sort',
  ],
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'unicorn/filename-case': 1,
    'unicorn/import-index': 0,
    'import/extensions': 0,
    'prefer-object-spread/prefer-object-spread': 2,
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
};
