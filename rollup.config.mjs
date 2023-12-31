import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json' assert { type: 'json' } // require node17.5+

/*
导入 package.json 的其他方案：

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

import { readFileSync } from 'node:fs'
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
*/

export default {
    input: `src/index.ts`,
    output: [
        { file: pkg.main, format: 'cjs', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
        // Seamless integration between Rollup and Typescript
        typescript(),

        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs(),

        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),
    ],
}
