/*
| Developed by Dirupt
| Filename : index.mjs
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

/** @typedef  {import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'css',
	endOfLine: 'lf',
}

export default config
