import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.{test,spec}.ts'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src',
    }),
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.{dto,module}.ts"
  ],
  coveragePathIgnorePatterns: [
    "src/ioc.ts",
    "src/index.ts",
    "src/routes.ts"
  ]
};

export default config;