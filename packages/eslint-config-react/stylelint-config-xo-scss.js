// Edited from https://github.com/xojs/stylelint-config-xo-scss
/**
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const reLowercase = /^[a-z]+(-[\da-z]+)*$/;

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: 'stylelint-config-xo',
  // eslint-disable-next-line unicorn/prefer-module
  customSyntax: require('postcss-scss'),
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use'],
      },
    ],

    'scss/at-each-key-value-single-line': true,
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': reLowercase,
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': reLowercase,
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true,
    'scss/at-use-no-unnamespaced': true,
    // Disabled because of https://github.com/kristerkari/stylelint-scss/issues/203
    // 'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/dollar-variable-pattern': reLowercase,
    'scss/percent-placeholder-pattern': reLowercase,
    // Disabled because of https://github.com/kristerkari/stylelint-scss/issues/202
    // 'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/function-color-relative': true,
    'function-no-unknown': null,
    'scss/function-no-unknown': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/operator-no-unspaced': true,
    'scss/partial-no-import': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
  },
};
