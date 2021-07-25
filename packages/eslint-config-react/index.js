/* eslint-disable unicorn/prefer-module */
const replacements = require('./replacements.js');

/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
  extends: [
    '@logto',
    'xo-react/space',
    // Make sure prettier is the last one
    'plugin:prettier/recommended',
  ],
  rules: {
    'unicorn/prevent-abbreviations': ['error', { replacements }],
  },
};
