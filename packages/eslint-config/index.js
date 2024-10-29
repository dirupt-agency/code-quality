/*
| Developed by Dirupt
| Filename : index.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

export { IGNORE_LIST } from './src/common.js'
export { pluginImport, rulesImport, baseEslintImport } from './src/plugins/import.js'
export { pluginUnusedImports, rulesUnusedImports, baseEslintUnusedImports } from './src/plugins/unused-imports.js'
export { pluginPrettier, rulesPrettier, basePrettier } from './src/plugins/prettier.js'
export { configReact, filesReact, pluginsReact, rulesReact } from './src/configs/react.js'
export { configRecommanded, filesRecommanded, pluginsRecommanded, rulesRecommanded } from './src/configs/recommanded.js'
export { configTypescript, pluginsTypescript, rulesTypescript } from './src/configs/typescript.js'
export { configAdonis } from './src/configs/adonis.js'
export { configNext } from './src/configs/next.js'
