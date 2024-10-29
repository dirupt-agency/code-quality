/*
| Developed by Dirupt
| Filename : adonis.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import { pluginImport, rulesImport } from '../plugins/import.js'
import { pluginUnusedImports, rulesUnusedImports } from '../plugins/unused-imports.js'

/**
 * ESLint configuration for AdonisJS, please add in your eslint.config.js :
 * ```js
 * import { configApp } from '@adonisjs/eslint-config'
 * import { configAdonis } from '@dirupt/eslint-legacy-config'
 *
 * export default configApp(configAdonis())
 * ```
 *
 * ---
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configApp } from '@adonisjs/eslint-config'
 * import { configAdonis } from '@dirupt/eslint-legacy-config'
 *
 * export default configApp(configAdonis({
 * 	rules: {
 * 		'@typescript-eslint/no-empty-object-type': 'error',
 * 		'@typescript-eslint/no-unsafe-function-type': 'error',
 * 		'@typescript-eslint/no-unsafe-assignment': 'error',
 * 		'@typescript-eslint/no-wrapper-object-types': 'error',
 * 	}
 * }))
 * ```
 */
export function configAdonis(...extendedConfigs) {
	return [
		{
			plugins: {
				...pluginImport,
				...pluginUnusedImports,
			},
			rules: {
				...rulesUnusedImports,
				...Object.fromEntries(Object.entries(rulesImport).filter(([key]) => key !== 'import/extensions')),
				'import/extensions': 'off',
			},
		},
		...extendedConfigs,
	]
}
