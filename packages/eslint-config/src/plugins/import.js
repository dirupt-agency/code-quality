/*
| Developed by Dirupt
| Filename : import.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import importPlugin from 'eslint-plugin-import'

/**
 * Object containing the plugin
 */
export const pluginImport = {
	import: importPlugin,
}

/**
 * Object containing the rules
 */
export const rulesImport = {
	'no-unused-vars': 'off',
	'import/order': [
		'error',
		{
			groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
		},
	],
	'import/extensions': [
		'error',
		{
			js: 'never',
			jsx: 'never',
			svg: 'always',
			ts: 'never',
			tsx: 'never',
		},
	],
	'import/prefer-default-export': 'off',
}

/**
 * ```js
 * import { baseEslintImport } from "@dirupt/eslint-legacy-config";
 *
 * export default [
 * 	baseEslintImport(),
 * ]
 * ```
 */
export function baseEslintImport() {
	return {
		plugins: pluginImport,
		rules: rulesImport,
	}
}
