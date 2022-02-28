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
    // Override this one since TypeScript does not recognize `propElementValues` w/o curly
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
  },
};
/* eslint-enable unicorn/prefer-module */
