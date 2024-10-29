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

```js
// eslint.config.{js,mjs,ts}
import { configApp } from '@adonisjs/eslint-config'
import { configAdonis } from '@dirupt/eslint-config'

export default configApp(configAdonis())
```

### For React

```js
// eslint.config.{js,mjs,ts}
import { configReact } from '@dirupt/eslint-config'

export default configReact()
```

### For TypeScript

```js
// eslint.config.{js,mjs,ts}
import { configTypescript } from '@dirupt/eslint-config'

export default configTypescript()
```

### For Recommended

```js
// eslint.config.{js,mjs,ts}
import { configRecommanded } from '@dirupt/eslint-config'

export default configRecommanded()
```

### Combining Configurations:

You can combine multiple configurations. For example:

```js
// eslint.config.{js,mjs,ts}
import { configTypescript, configRecommanded, configReact } from '@dirupt/eslint-config'

export default configTypescript(configRecommanded(configReact()))
```

## Available Configurations

-   `configAdonis()`: Configuration for AdonisJS projects
-   `configReact()`: Configuration for React projects
-   `configTypescript()`: Configuration for TypeScript projects
-   `configRecommanded()`: Recommended configuration for general JavaScript/TypeScript projects

Each configuration can be customized by passing additional options or rules.

## Plugins and Rules

This package includes several plugins and predefined rules:

-   Import plugin and rules
-   Unused imports plugin and rules
-   Prettier plugin and rules
-   TypeScript-specific rules (when using `configTypescript`)
-   React-specific rules (when using `configReact`)

For detailed information about the rules and plugins, please refer to the source code or documentation of each specific configuration.

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/philippe-desplats">Philippe Desplats</a> - Project based on <a href="https://github.com/adonisjs/eslint-config">AdonisJS Prettier Config</a></sub>
</div>

[npm-image]: https://img.shields.io/npm/v/@dirupt/eslint-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@dirupt/eslint-config/v/latest 'npm'
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/dirupt-agency/eslint-config?style=for-the-badge
