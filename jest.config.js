/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-05-15T12:05:47+02:00
 * @Copyright: Technology Studio
**/

import { pathsToModuleNameMapper } from 'ts-jest'
import { defaults } from 'jest-config'

import tsconfig from './__tests__/tsconfig.json' with { type: 'json' }

export default {
  preset: 'ts-jest',
  cache: true,
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/__tests__/Tests/**/?(*.)(spec|test).ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  setupFiles: [
    '<rootDir>/__tests__/Setup.ts'
  ],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }]
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' }),
}
