/* eslint-disable unicorn/prefer-module */
const replacements = require('@silverhand/eslint-config/replacements.js');

module.exports = {
  ...replacements,
  src: false,
  props: false,
  ref: false,
};
/* eslint-enable unicorn/prefer-module */
