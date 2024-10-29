/*
| Developed by Dirupt
| Filename : react.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { pluginsRecommanded, rulesRecommanded } from './recommanded.js'
import { IGNORE_LIST } from '../common.js'
import { configTypescript } from './typescript.js'

/**
 * List of files to lint
 */
export const filesReact = ['**/*.{js,jsx,ts,tsx}']

/**
 * Object containing the plugin
 */
export const pluginsReact = {
	react,
	'react-hooks': reactHooks,
}

/**
 * Object containing the rules
 */
export const rulesReact = {
	...reactHooks.configs.recommended.rules,
	'react/jsx-props-no-spreading': 'off',
	'react/no-children-prop': ['warn'],
	'react/jsx-no-leaked-render': ['warn', { validStrategies: ['ternary'] }],
	'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
	'react/no-namespace': 'off',
	'react/react-in-jsx-scope': 'off',
	'react-hooks/exhaustive-deps': 'warn',
	'no-restricted-imports': [
		'error',
		{
			patterns: ['@mui/*/*/*'],
		},
	],
}

/**
 * ESLint configuration for React, please add in your eslint.config.js :
 * ```js
 * import { configReact } from '@dirupt/eslint-legacy-config'
 *
 * export default configReact()
 * ```
 *
 * ---
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configReact } from '@dirupt/eslint-legacy-config'
 *
 * export default configReact(
 * 	{
 * 		rules: {
 * 			'react/no-children-prop': 'off',
 * 		},
 * 	},
 * )
 * ```
 */
export function configReact(...extendedConfigs) {
	return configTypescript(
		{
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
				globals: {
					...globals.browser,
				},
			},
			files: filesReact,
			ignores: IGNORE_LIST,
			plugins: pluginsReact,
			rules: rulesReact,
		},
		...extendedConfigs,
	)
}
