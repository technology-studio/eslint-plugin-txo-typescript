import txoPlugin from './lib/index.js'
export default (async function config() {
  const txoPackageConfigList = await import('eslint-config-txo-package-typescript')
  return [
    ...txoPackageConfigList.configList,
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
    },
  ]
})()
