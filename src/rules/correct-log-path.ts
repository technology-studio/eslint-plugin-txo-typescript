/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-07-10T13:07:03+02:00
 * @Copyright: Technology Studio
**/

import {
  sep,
  relative,
} from 'path'
import { type Rule } from 'eslint'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const packageJson = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'))

const logPathRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce correct log path.',
    },
    fixable: 'code',
  },
  create (context: Rule.RuleContext): Rule.RuleListener {
    return {
      NewExpression (node): void {
        if (node.callee.type === 'Identifier' && node.callee.name === 'Log') {
          const relativePath = relative(process.cwd(), context.filename)
          const packageName = packageJson.name as string | undefined
          let logPath = relativePath.replace(/\.[^/.]+$/, '')
          if (packageName != null && packageName !== 'MobileApp') {
            logPath = `${packageName.replace('/', '.')}.${logPath}`
          }
          const logPathParts = logPath.split(sep)
          const logName = logPathParts.join('.')
          const logArg = node.arguments[0]
          if (logArg != null && logArg.type === 'Literal' && typeof logArg.value === 'string') {
            const expectedLogArg = logName
            if (logArg.value !== expectedLogArg) {
              context.report({
                node: logArg,
                message: `Log path should be ${expectedLogArg}.`,
                fix (fixer) {
                  return fixer.replaceText(logArg, `'${expectedLogArg}'`)
                },
              })
            }
          }
        }
      },
    }
  },
}

module.exports = logPathRule
