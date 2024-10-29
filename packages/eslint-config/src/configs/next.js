/*
| Developed by Dirupt
| Filename : next.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import nextPlugin from '@next/eslint-plugin-next'
import { configTypescript } from './typescript.js'
import { pluginsReact, rulesReact } from './react.js'

/**
 * ESLint configuration for Next.js, please add in your eslint.config.js :
 * ```js
 * import { configNext } from '@dirupt/eslint-config'
 *
 * export default configNext()
 * ```
 *
 * ---
 *
 * If you want to add more configs, you can do :
 * ```js
 * import { configNext } from '@dirupt/eslint-config'
 *
 * export default configNext({
 * 	rules: {
 * 		'semi': ['error', 'never'],
 * 	}
 * })
 * ```
 */
export function configNext(...extendedConfigs) {
	return configTypescript(
		{
			name: 'Next Plugin',
			plugins: {
				'@next/next': nextPlugin,
			},
			rules: {
				...nextPlugin.configs.recommended.rules,
				...nextPlugin.configs['core-web-vitals'].rules,
			},
			ignores: ['build/*', 'dist/*', 'public/*', 'out/*', '**/node_modules/*', '**/.next/*'],
		},
		{
			plugins: {
				...pluginsReact,
			},
			rules: {
				...rulesReact,
			},
		},
		...extendedConfigs,
	)
}
