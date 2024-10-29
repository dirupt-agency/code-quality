/*
| Developed by Dirupt
| Filename : unused-imports.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import unusedImports from 'eslint-plugin-unused-imports'

/**
 * Object containing the plugin
 */
export const pluginUnusedImports = {
	'unused-imports': unusedImports,
}

/**
 * Object containing the rules
 */
export const rulesUnusedImports = {
	'no-unused-vars': 'off',
	'unused-imports/no-unused-imports': 'error',
	'unused-imports/no-unused-vars': [
		'warn',
		{
			vars: 'all',
			varsIgnorePattern: '^_',
			args: 'after-used',
			argsIgnorePattern: '^_',
		},
	],
}

/**
 * ```js
 * import { baseEslintUnusedImports } from "@dirupt/eslint-legacy-config";
 *
 * export default [
 * 	baseEslintUnusedImports(),
 * ]
 * ```
 */
export function baseEslintUnusedImports() {
	return {
		plugins: pluginUnusedImports,
		rules: rulesUnusedImports,
	}
}
