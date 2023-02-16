import type { Config } from '@jest/types';
import type deepmerge from 'deepmerge';

declare const config: Config.InitialOptions;
export default config;
export declare const merge: (
  config: Config.InitialOptions,
  mergeOptions?: deepmerge.Options
) => Config.InitialOptions;
export type { Config } from '@jest/types';
