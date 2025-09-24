import ciRules from './eslint-ci-rules.json' with { type: 'json' }

export default (async function config() {
  const { default: defaultConfigPromise } = await import('./eslint.config.js')
  const defaultConfig = await defaultConfigPromise
  return [
    ...defaultConfig,
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: ciRules.reduce((acc, rule) => ({ ...acc, [rule]: 'warn' }), {}),
    },
  ]
})()
