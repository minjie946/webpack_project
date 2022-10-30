import { resolve, join } from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd())

interface ResolveApp {
  (relativePath: string): string;
}

export const resolveApp: ResolveApp = relativePath => resolve(appDirectory, relativePath)

interface JoinPath {
  (a: string, b: string): string;
}

export const joinPath: JoinPath = (a, b) => join(appDirectory, a, b);