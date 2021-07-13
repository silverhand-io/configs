// Have to disable these rules to use CommonJS and enable VSCode ESLint plugin
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const { replacements } = require('./replacements.js');

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
