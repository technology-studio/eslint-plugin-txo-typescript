/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-01-09T00:56:40+01:00
 * @Copyright: Technology Studio
**/

import { ESLint } from 'eslint'

test('shoud not have lint issues', async () => {
  const eslint = new ESLint()
  const results = await eslint.lintFiles(['test/**/*.ts'])
  const isWithoutError = results.every((result: { errorCount: number }) => result.errorCount === 0)
  expect(isWithoutError).toBe(true)
}, 20000)
