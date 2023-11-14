const txoConfig = require('eslint-config-txo-typescript')
const txoPlugin = require('./lib')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...txoConfig.default,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@txo/typescript': txoPlugin,
    },
    rules: {
      '@txo/typescript/correct-log-path': 'error',
    },
  },
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './test/tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './test/tsconfig.json',
        }
      }
    }
  }
]

module.exports = config
