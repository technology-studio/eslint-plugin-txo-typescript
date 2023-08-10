/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-07-11T12:07:09+02:00
 * @Copyright: Technology Studio
**/

import { Log } from './LogMock'

// eslint-disable-next-line @txo/typescript/correct-log-path
export const logWrong = new Log('test.aaaa')

export const logCorrect = new Log('@txo.eslint-plugin-typescript.test.Sample')
