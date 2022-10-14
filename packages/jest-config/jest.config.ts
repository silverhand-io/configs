import type { Config } from '@jest/types';
import deepmerge from 'deepmerge';

const baseConfig: Config.InitialOptions = {
  preset: 'ts-jest/presets/js-with-ts',
  transformIgnorePatterns: ['node_modules/(?!(.*(nanoid|jose|ky))/)'],
  moduleNameMapper: {
    // Map path alias in `tsconfig.json`
    '^@/(.*)$': '<rootDir>/src/$1',
    // Mock CSS Modules
    '\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/build/', '/src/__mocks__/'],
  coverageReporters: ['text-summary', 'lcov'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};

export default baseConfig;

export const merge = (
  config: Config.InitialOptions,
  mergeOptions?: deepmerge.Options
): Config.InitialOptions => deepmerge(baseConfig, config, mergeOptions);

export type { Config } from '@jest/types';
