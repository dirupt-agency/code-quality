/*
| Developed by Dirupt
| Filename : common.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

/**
 * Default set of files to ignore (credit: https://github.com/adonisjs/eslint-config)
 */
export const IGNORE_LIST = [
	'eslint.config.js',
	'eslint.config.ts',
	'*.min.*',
	'*.d.ts',
	'CHANGELOG.md',
	'dist/**',
	'LICENSE*',
	'output/**',
	'coverage/**',
	'temp/**',
	'build/**',
	'dist/**',
	'public/assets/**',
	'pnpm-lock.yaml',
	'yarn.lock',
	'package-lock.json',
	'__snapshots__/**',
	'resources/**',
	'!.github',
	'!.vscode',
	// Next.js specific
	'.next/**',
	'out/**',
	'node_modules/**',
	'*.lock',
	'*.log',
	'next-env.d.ts',
	'.vercel',
	'sw.js',
	'workbox-*.js',
]
