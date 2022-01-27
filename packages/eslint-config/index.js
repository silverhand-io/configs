/* eslint-disable unicorn/prefer-module */
// Rules are copied from https://github.com/xojs/xo/blob/main/config/plugins.cjs

const xo = require('eslint-config-xo');

const replacements = require('./replacements.js');

/** @type {import('eslint').Linter.RulesRecord} **/
const importRules = {
  'import/default': 'error',
  'import/export': 'error',
  'import/extensions': [
    'error',
    'always',
    {
      ignorePackages: true,
      // TypeScript doesn't yet support using extensions and fails with error TS2691.
      pattern: {
        ts: 'never',
        tsx: 'never',
      },
    },
  ],
  'import/first': 'error',

  // Disabled as it doesn't work with TypeScript.
  // This issue and some others: https://github.com/benmosher/eslint-plugin-import/issues/1341
  // 'import/named': 'error',

  'import/namespace': [
    'error',
    {
      allowComputed: true,
    },
  ],
  'import/no-absolute-path': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-named-default': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-self-import': 'error',
  'import/no-cycle': [
    'error',
    {
      ignoreExternal: true,
    },
  ],
  'import/no-useless-path-segments': 'error',
  'import/newline-after-import': 'error',
  'import/no-amd': 'error',
  'import/no-duplicates': 'error',

  // We use `unicorn/prefer-module` instead.
  // 'import/no-commonjs': 'error',

  // Looks useful, but too unstable at the moment
  // 'import/no-deprecated': 'error',

  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-as-default': 'error',

  // Disabled because it's buggy and it also doesn't work with TypeScript
  // 'import/no-unresolved': [
  // 	'error',
  // 	{
  // 		commonjs: false
  // 	}
  // ],

  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'internal',
        },
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
      },
    },
  ],
  'import/no-unassigned-import': [
    'error',
    {
      allow: [
        '@babel/polyfill',
        '**/register',
        '**/register.*',
        '**/register/**',
        '**/register/**.*',
        '**/*.css',
        '**/*.scss',
        '**/*.sass',
        '**/*.less',
      ],
    },
  ],
};

/** @type {import('eslint').Linter.RulesRecord} **/
const nodeRules = {
  // Redundant with `import/no-extraneous-dependencies`.
  // 'node/no-extraneous-import': 'error',
  // 'node/no-extraneous-require': 'error',

  // Redundant with `import/no-unresolved`.
  // 'node/no-missing-import': 'error', // This rule is also buggy and doesn't support `node:`.
  // 'node/no-missing-require': 'error',

  'node/no-unpublished-bin': 'error',

  // We have this enabled in addition to `import/extensions` as this one has an auto-fix.
  'node/file-extension-in-import': [
    'error',
    'always',
    {
      // TypeScript doesn't yet support using extensions and fails with error TS2691.
      '.ts': 'never',
      '.tsx': 'never',
    },
  ],
  'node/no-mixed-requires': [
    'error',
    {
      grouping: true,
      allowCall: true,
    },
  ],
  'node/no-new-require': 'error',
  'node/no-path-concat': 'error',

  // Disabled because they're too annoying, see:
  // https://github.com/mysticatea/eslint-plugin-node/issues/105
  // 'node/no-unpublished-import': [
  // 	'error',
  // 	{
  // 		allowModules: [
  // 			'electron',
  // 			'atom'
  // 		]
  // 	}
  // ],
  // 'node/no-unpublished-require': [
  // 	'error',
  // 	{
  // 		allowModules: [
  // 			'electron',
  // 			'atom'
  // 		]
  // 	}
  // ],

  'node/process-exit-as-throw': 'error',

  // Disabled as the rule doesn't exclude scripts executed with `node` but not referenced in 'bin'. See https://github.com/mysticatea/eslint-plugin-node/issues/96
  // 'node/shebang': 'error',

  'node/no-deprecated-api': 'error',
  'node/prefer-global/buffer': ['error', 'always'],
  'node/prefer-global/console': ['error', 'always'],
  'node/prefer-global/process': ['error', 'always'],
  'node/prefer-global/text-decoder': ['error', 'always'],
  'node/prefer-global/text-encoder': ['error', 'always'],
  'node/prefer-global/url-search-params': ['error', 'always'],
  'node/prefer-global/url': ['error', 'always'],
  'node/prefer-promises/dns': 'error',
  'node/prefer-promises/fs': 'error',
};

/** @type {import('eslint').Linter.RulesRecord} **/
const promiseRules = {
  'promise/param-names': 'error',
  'promise/no-return-wrap': [
    'error',
    {
      allowReject: true,
    },
  ],
  'promise/no-new-statics': 'error',
  'promise/no-return-in-finally': 'error',
  'promise/valid-params': 'error',
  'promise/prefer-await-to-then': 'error',
};

/** @type {import('eslint').Linter.RulesRecord} **/
const eslintCommentsRules = {
  'eslint-comments/disable-enable-pair': 'error',
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',

  // Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
  // 'eslint-comments/no-unlimited-disable': 'error',

  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
};

/** @type {import('eslint').Linter.RulesRecord} **/
const unicornRules = {
  'unicorn/no-array-reduce': 'off',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/prevent-abbreviations': ['error', { replacements }],
  'unicorn/no-null': 'off',
  'unicorn/prefer-node-protocol': 'off',
  // Conflict with `@silverhand/fp/no-mutating-methods` when calling `.slice().sort()`
  'unicorn/prefer-spread': 'off',
};

/** @type {import('eslint').Linter.RulesRecord} **/
const fpRules = {
  '@silverhand/fp/no-let': 'error',
  '@silverhand/fp/no-delete': 'error',
  '@silverhand/fp/no-mutating-assign': 'error',
  '@silverhand/fp/no-mutating-methods': 'error',
  '@silverhand/fp/no-mutation': [
    'error',
    {
      allowThis: true,
      commonjs: true,
      exceptions: [
        {
          object: 'ctx',
        },
        {
          object: 'process',
          property: 'env',
        },
      ],
    },
  ],
  '@silverhand/fp/no-valueof-field': 'error',
};

/** @type {import('eslint').Linter.RulesRecord} **/
const sqlRules = {
  'sql/no-unsafe-query': [
    'error', // Warn use of SQL inside of template literals without the sql tag
    {
      allowLiteral: false,
    },
  ],
};

/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
  plugins: [
    'no-use-extend-native',
    'promise',
    'import',
    'node',
    'eslint-comments',
    '@silverhand/fp',
    'sql',
  ],
  extends: ['plugin:unicorn/recommended', 'xo', 'plugin:prettier/recommended'],
  rules: {
    'no-use-extend-native/no-use-extend-native': 'error',
    ...promiseRules,
    ...importRules,
    ...nodeRules,
    ...eslintCommentsRules,
    ...unicornRules,
    ...fpRules,
    ...sqlRules,
    // https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'xo-typescript/space',
        'plugin:import/typescript',
        // Make sure prettier is the last one
        'plugin:prettier/recommended',
      ],
      rules: {
        /**
         * Disable these `import` rules since they're buggy in TypeScript
         * https://github.com/import-js/eslint-plugin-import/issues/1800#issuecomment-907803349
         * https://github.com/import-js/eslint-plugin-import/issues/1908
         * https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/31#issuecomment-539751607
         */
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        /**
         * The original assert accepts string as input, and the error type cannot be recognized in jest.
         * See https://github.com/facebook/jest/issues/7547
         * Use a more strict `assert` instead.
         */
        'no-restricted-imports': [...xo.rules['no-restricted-imports'], 'assert'],
        // https://github.com/prettier/eslint-config-prettier#curly
        curly: ['error', 'all'],
        /**
         * `eslint-config-xo-typescript` disabled this rule by default, need to enable it
         * https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js#L446
         */
        '@typescript-eslint/no-non-null-assertion': 'error',
        "padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": "*", "next": "block-like" },
          { "blankLine": "always", "prev": "*", "next": "return" },
        ],
      },
      parserOptions: {
        project: '**/tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      files: ['*.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      plugins: ['consistent-default-export-name'],
      rules: {
        'consistent-default-export-name/default-export-match-filename': ['error', ['pascal']],
      },
    },
  ],
};
