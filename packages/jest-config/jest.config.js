import deepmerge from 'deepmerge';

/** @type {import('jest').Config} */
const baseConfig = {
  transform: {},
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/build/', '/src/__mocks__/'],
  coverageReporters: ['text-summary', 'lcov'],
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^#src/(.*)\\.js(x)?$': '<rootDir>/build/$1',
  },
};

export default baseConfig;

export const merge = (config, mergeOptions) => deepmerge(baseConfig, config, mergeOptions);
