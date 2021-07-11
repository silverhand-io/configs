/** @type {import('eslint').Linter.BaseConfig} **/
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    '@logto',
    'xo-react/space',
    // Make sure prettier is the last one
    'plugin:prettier/recommended',
  ],
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          src: false,
        },
      },
    ],
  },
};
