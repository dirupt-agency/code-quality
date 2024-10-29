/*
| Developed by Dirupt
| Filename : recommanded.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import js from '@eslint/js'
import { pluginImport, rulesImport } from '../plugins/import.js'
import { pluginUnusedImports, rulesUnusedImports } from '../plugins/unused-imports.js'
import { pluginPrettier, rulesPrettier } from '../plugins/prettier.js'
import { IGNORE_LIST } from '../common.js'

/**
 * List of files to lint
 */
export const filesRecommanded = ['**/*.{js,jsx,ts,tsx}']

/**
 * Object containing the plugin
 */
export const pluginsRecommanded = {
	...pluginImport,
	...pluginUnusedImports,
	...pluginPrettier,
}

/**
 * Object containing the rules
 */
export const rulesRecommanded = {
	semi: ['error', 'never'],
	'comma-dangle': ['error', 'always-multiline'],
	'quote-props': ['error', 'as-needed'],
	'no-unused-vars': 'off',
	'no-use-before-define': ['error', { variables: false }],
	...rulesImport,
	...rulesUnusedImports,
	...rulesPrettier,
}

/**
 * ESLint configuration for Prettier, please add in your eslint.config.js :
 * ```js
 * import { configRecommanded } from '@dirupt/eslint-legacy-config'
 *
 * export default configRecommanded()
 * ```
 *
 * ---
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configRecommanded } from '@dirupt/eslint-legacy-config'
 *
 * export default configRecommanded({
 * 	rules: {
 * 		'semi': ['error', 'never'],
 * 		'comma-dangle': ['error', 'always-multiline'],
 * 		'quote-props': ['error', 'as-needed'],
 * 	}
 * })
 * ```
 */
export function configRecommanded(...extendedConfigs) {
	return [
		js.configs.recommended,
		{
			plugins: pluginsRecommanded,
			files: filesRecommanded,
			ignores: IGNORE_LIST,
			rules: rulesRecommanded,
		},
		...extendedConfigs,
	]
}
