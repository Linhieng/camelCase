# @linhieng/camelcase

将对象的 key 的命名风格变为 camelCase

项目中的用到的外部依赖的实验性功能：

- 使用 node17.5+ 的导入断言功能
- 使用 rollup 的原生处理 es 模块实验性功能——借助 `experimental-vm-modules` 参数

## postscript

1. 如果在 package.json 中配置 type 为 module，则在 ts 项目中使用该包时可能导致报错：

```sh
Error [ERR_REQUIRE_ESM]: require() of ES Module     ...\node_modules\@linhieng\camelcase\dist\index.js from    ...\src\models\DoctorInfo.ts not supported.
index.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in ...\node_modules\@linhieng\camelcase\package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
```

所以根目录中的配置文件均采用 `mjs` 作为后缀名。此外，由于 jest 的配置我也还有问题没协调好，所以暂时先将 jest 的测试文件名也设置为 `mjs`。
