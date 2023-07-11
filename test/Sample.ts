/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-07-11T12:07:09+02:00
 * @Copyright: Technology Studio
**/

import { Log } from './LogMock'

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, txo-typescript/correct-log-path
const logWrong = new Log('test.aaaa')

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const logCorrect = new Log('eslint-plugin-txo-typescript.test.Sample')
