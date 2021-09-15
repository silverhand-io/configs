/* eslint-disable unicorn/prefer-module */
const replacements = require('./replacements.js');

/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
  extends: [
    '@silverhand',
    'xo-react/space',
    // Make sure prettier is the last one
    'plugin:prettier/recommended',
  ],
  rules: {
    // https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],
    'unicorn/prevent-abbreviations': ['error', { replacements }],
  },
};
