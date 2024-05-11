import { execSync } from 'child_process'

export const cmd = (type: string, ...command: string[]) =>
  execSync(`${type} ${command.join(' ')}`)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '')
