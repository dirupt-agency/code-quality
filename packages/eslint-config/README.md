packages/eslint-config/README.md
// Start of Selection
# DIRUPT ESLint Config - For ESLint 9

<br />

<div align="center">
  <h3>ESLint presets used by the DIRUPT core team</h3>
  <p>
    DIRUPT ESLint Config provides a set of carefully curated ESLint rules and configurations to ensure consistent code style and quality across projects. This package encapsulates the best practices and coding standards used by the DIRUPT core team, helping developers write clean, maintainable, and error-free JavaScript and TypeScript code.
  </p>
</div>

<br />

<div align="center">

[![license-image]][license-url] [![npm-image]][npm-url]

</div>

## Installation

Install the package from the npm registry.

```sh
pnpm add -D @dirupt/eslint-config

# Make sure also to install the following packages
pnpm add -D eslint@9 prettier@3
```

## Usage

After installation, use one of the following presets depending on the nature of your application/library/project.

### For AdonisJS

AdonisJS specific configuration integrates seamlessly with Adonis's own ESLint setup.

```js
// eslint.config.{js,mjs,ts}
import { configApp, configAdonis } from '@dirupt/eslint-config'

export default configAdonis()
```

### For React

React configuration includes React-specific plugins and rules to enforce best practices in React projects.

```js
// eslint.config.{js,mjs,ts}
import { configReact } from '@dirupt/eslint-config'

export default configReact()
```

### For Next.js

Next.js configuration incorporates Next.js specific linting rules and performance best practices.

```js
// eslint.config.{js,mjs,ts}
import { configNext } from '@dirupt/eslint-config'

export default configNext()
```

### For TypeScript

TypeScript configuration enhances ESLint with TypeScript-specific rules and parsing capabilities.

```js
// eslint.config.{js,mjs,ts}
import { configTypescript } from '@dirupt/eslint-config'

export default configTypescript()
```

### For Recommended

Recommended configuration provides a balanced set of rules suitable for general JavaScript and TypeScript projects.

```js
// eslint.config.{js,mjs,ts}
import { configRecommanded } from '@dirupt/eslint-config'

export default configRecommanded()
```

## Available Configurations

-   **`configAdonis()`**: Configuration for AdonisJS projects
    - Integrates with AdonisJS ESLint setup
    - Includes import and unused-imports plugins with specific rules
-   **`configReact()`**: Configuration for React projects
    - Includes React and React Hooks plugins
    - Enforces React-specific rules for code consistency and best practices
    - Integrates with TypeScript if used
-   **`configNext()`**: Configuration for Next.js projects
    - Incorporates Next.js ESLint plugin
    - Enforces core web vitals and performance-related linting rules
    - Supports TypeScript integration
-   **`configTypescript()`**: Configuration for TypeScript projects
    - Extends recommended JavaScript rules with TypeScript-specific rules
    - Incorporates TypeScript ESLint parser and plugins
    - Enforces strong typing and best practices in TypeScript code
-   **`configRecommanded()`**: Recommended configuration for general JavaScript/TypeScript projects
    - Balanced set of rules for code quality and consistency
    - Includes import, unused-imports, and Prettier plugins
    - Suitable for various project types

Each configuration can be customized by passing additional options or rules.

## Plugins and Rules

This package includes several plugins and predefined rules to enhance your linting experience:

### Core Plugins

- **Import Plugin (`eslint-plugin-import`)**
  - Enforces consistent import order and module usage
  - Rules:
    - `import/order`: Ensures a specific order for import statements
    - `import/extensions`: Enforces file extension conventions
    - `import/prefer-default-export`: Discourages default exports in favor of named exports

- **Unused Imports Plugin (`eslint-plugin-unused-imports`)**
  - Automatically removes unused imports
  - Rules:
    - Disables `no-unused-vars` to prevent conflicts
    - Enforces removal of unused import statements

- **Prettier Plugin (`eslint-plugin-prettier`)**
  - Integrates Prettier formatting rules with ESLint
  - Rules:
    - `prettier/prettier`: Enforces Prettier code formatting styles
      - Configured with `{ endOfLine: 'auto' }` for cross-platform consistency

### TypeScript-Specific Rules

- Enforces strict typing and best practices
- Rules include:
  - Disables certain rules to allow flexible coding patterns
  - Enforces naming conventions for variables, types, classes, and interfaces
  - Ensures safe and predictable TypeScript usage with rules like `@typescript-eslint/no-unsafe-assignment`

### React-Specific Rules

- Enhances React code quality and maintainability
- Plugins:
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
- Rules include:
  - `react/jsx-props-no-spreading`: Allows prop spreading
  - `react/no-children-prop`: Warns against using `children` prop directly
  - `react/jsx-no-leaked-render`: Prevents unexpected component behavior
  - `react/jsx-filename-extension`: Restricts file extensions for JSX
  - `react/react-in-jsx-scope`: Disables React import necessity in newer versions

### Next.js-Specific Rules

- Optimizes code for Next.js applications
- Integrates `@next/eslint-plugin-next` with recommended and core web vitals rules
- Enforces best practices for Next.js development

## Configuration Customization

All configurations can be extended or customized by passing additional options or overriding rules. Users can override specific settings to better fit their project requirements. Below are examples demonstrating how to override configurations similar to how it's done in `@next.js`.

### Overriding Rules

To override specific ESLint rules, you can pass custom rule configurations when initializing the preset. For example, to enforce no semicolons and always use trailing commas in multiline expressions:

```js
import { configRecommanded } from '@dirupt/eslint-config'

export default configRecommanded({
    rules: {
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
    }
})
```

### Extending Configurations with Additional Plugins or Settings

If you need to add more plugins or extend the existing configurations, you can pass additional configuration objects. For example, adding a custom plugin and overriding settings:

```js
import { configNext } from '@dirupt/eslint-config'

export default configNext({
  plugins: {
    'custom-plugin': require('eslint-plugin-custom'),
  },
  rules: {
    'custom-plugin/rule-name': 'warn',
  },
})
```

### Combining Multiple Customizations

You can combine multiple levels of customization to tailor ESLint precisely to your needs. For example, combining React and custom configurations:

```js
import { configReact } from '@dirupt/eslint-config'

export default configReact(
	{
		rules: {
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		plugins: {
			'jsx-a11y': require('eslint-plugin-jsx-a11y'),
		},
	},
	{
		rules: {
			'no-console': 'warn',
		},
	}
)
```

These examples demonstrate how flexible and powerful the DIRUPT ESLint Config is, allowing you to maintain consistency while adapting to your project's specific needs.

## File Ignore List

The ESLint configurations come with a default set of files and directories to ignore to optimize linting performance and avoid unnecessary errors:

- `eslintrc.*`, `*.min.*`, `*.d.ts`
- `CHANGELOG.md`, `LICENSE*`, `pnpm-lock.yaml`, `yarn.lock`, `package-lock.json`
- `node_modules/**`, `.next/**`, `dist/**`, `build/**`, `public/**`, `out/**`
- Temporary and build directories like `temp/**`, `coverage/**`, `__snapshots__/**`, `resources/**`
- Specific files like `next-env.d.ts`, `.vercel`, `sw.js`, `workbox-*.js`
- Allows exceptions for directories like `.github` and `.vscode`

You can customize the ignore list by modifying the `IGNORE_LIST` in your configuration.

## Additional Information

For detailed information about the rules and plugins, please refer to the source code or documentation of each specific configuration.

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/philippe-desplats">Philippe Desplats</a> - Project based on <a href="https://github.com/adonisjs/eslint-config">AdonisJS Prettier Config</a></sub>
</div>

[npm-image]: https://img.shields.io/npm/v/@dirupt/eslint-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@dirupt/eslint-config/v/latest 'npm'
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/dirupt-agency/eslint-config?style=for-the-badge
