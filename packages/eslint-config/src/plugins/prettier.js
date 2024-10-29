/*
| Developed by Dirupt
| Filename : prettier.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * Object containing the plugin
 */
export const pluginPrettier = {
	...eslintPluginPrettierRecommended.plugins,
}

/**
 * Object containing the rules
 */
export const rulesPrettier = {
	...eslintPluginPrettierRecommended.rules,
	'prettier/prettier': ['error', { endOfLine: 'auto' }],
}

/**
 * ESLint configuration for Prettier, please add in your eslint.config.js :
 * ```js
 * import { configPrettier } from '@dirupt/eslint-legacy-config'
 *
 * export default configPrettier()
 * ```
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configPrettier } from '@dirupt/eslint-legacy-config'
 *
 * export default configPrettier(
 * 	{
 * 		rules: {
 * 			'prettier/prettier': ['error', { endOfLine: 'auto' }],
 * 		},
 * 	},
 * )
 * ```
 */
export function basePrettier(...extendedConfigs) {
	return [
		{
			plugins: pluginPrettier,
			rules: rulesPrettier,
		},
		...extendedConfigs,
	]
}
