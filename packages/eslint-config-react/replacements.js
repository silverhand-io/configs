// Have to disable these rules to use CommonJS and enable VSCode ESLint plugin
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const { replacements } = require('@logto/eslint-config/replacements.js');

module.exports = {
  ...replacements,
  src: false,
  props: false,
};
