/*
| Developed by Dirupt
| Filename : typescript.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import tseslint from 'typescript-eslint'
import { pluginsRecommanded, rulesRecommanded } from './recommanded.js'

/**
 * Object containing the plugins
 */
export const pluginsTypescript = {
	...pluginsRecommanded,
}

/**
 * Object containing the rules
 */
export const rulesTypescript = {
	'@typescript-eslint/ban-ts-comment': 'off',
	'@typescript-eslint/no-empty-interface': 'off',
	'@typescript-eslint/unbound-method': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/restrict-template-expressions': 'off',
	'@typescript-eslint/explicit-member-accessibility': 'off',
	'@typescript-eslint/no-empty-object-type': 'error',
	'@typescript-eslint/no-unsafe-function-type': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-wrapper-object-types': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-misused-promises': 'error',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/require-await': 'error',
	'@typescript-eslint/array-type': ['error', { default: 'generic' }],
	'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
	'@typescript-eslint/no-use-before-define': ['error', { variables: false }],
	'@typescript-eslint/naming-convention': [
		'error',
		{
			selector: 'variable',
			format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
		},
		{
			selector: 'typeLike',
			format: ['PascalCase'],
		},
		{
			selector: 'class',
			format: ['PascalCase'],
		},
		{
			selector: 'interface',
			format: ['PascalCase'],
			custom: {
				regex: '^I[A-Z]',
				match: false,
			},
		},
	],
	...rulesRecommanded,
}

/**
 * ESLint configuration for Typescript, please add in your eslint.config.js :
 * ```js
 * import { configTypescript } from '@dirupt/eslint-legacy-config'
 *
 * export default configTypescript()
 * ```
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configTypescript } from '@dirupt/eslint-legacy-config'
 *
 * export default configTypescript()
 * ```
 *
 * ---
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configTypescript } from '@dirupt/eslint-legacy-config'
 * import { configRecommanded } from '@dirupt/eslint-legacy-config'
 *
 * export default configTypescript({
 * 	rules: {
 * 		'semi': ['error', 'never'],
 * 		'comma-dangle': ['error', 'always-multiline'],
 * 		'quote-props': ['error', 'as-needed'],
 * 	}
 * })
 * ```
 */
export function configTypescript(...extendsConfig) {
	return tseslint.config(
		...tseslint.configs.recommended,
		{
			plugins: pluginsTypescript,
			rules: rulesTypescript,
			languageOptions: {
				parserOptions: {
					projectService: true,
					tsconfigRootDir: import.meta.dirname,
				},
			},
		},
		...extendsConfig,
	)
}
