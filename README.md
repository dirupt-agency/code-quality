# DIRUPT Code Quality Standards

<br />

<div align="center">
	<h3>Centralized Code Quality Configurations for DIRUPT Projects</h3>
	<p>
	The DIRUPT Code Quality monorepo provides shared configurations and standards to maintain consistent code style and quality across all DIRUPT projects. By centralizing configurations for tools like ESLint and Prettier, we ensure that our codebase remains maintainable, readable, and aligned with industry best practices.
	</p>
</div>

<br />

<div align="center">

[![License](https://img.shields.io/github/license/dirupt-agency/code-quality?style=for-the-badge)](LICENSE.md) [![npm Version](https://img.shields.io/npm/v/@dirupt/eslint-config/latest.svg?style=for-the-badge&logo=npm&label=eslint-config)](https://www.npmjs.com/package/@dirupt/eslint-config) [![npm Version](https://img.shields.io/npm/v/@dirupt/prettier-config/latest.svg?style=for-the-badge&logo=npm&label=prettier-config)](https://www.npmjs.com/package/@dirupt/prettier-config&label=prettier-config)

</div>

## Packages

The monorepo includes the following packages:

- **[@dirupt/eslint-config](packages/eslint-config/README.md)**: Shared ESLint configurations tailored for various project types, including React, Next.js, TypeScript, and more.

- **[@dirupt/prettier-config](packages/prettier-config/README.md)**: Base Prettier configuration used across DIRUPT projects to ensure consistent code formatting.

## Installation

Install the desired packages using your package manager. For example, using `pnpm`:

```sh
pnpm add -D @dirupt/eslint-config @dirupt/prettier-config eslint prettier
```

Ensure that you have the required peer dependencies installed as specified in each package's `package.json`.

## Usage

### ESLint Configuration

Import and extend the ESLint configurations in your project's ESLint configuration file (`.eslintrc.js`, `.eslintrc.json`, or `eslint.config.{js,mjs,ts}`).

For example, to use the Next.js configuration:

```js
// eslint.config.mjs
import { configNext } from '@dirupt/eslint-config'

export default configNext()
```

Refer to each package's README for detailed usage instructions and available presets.

### Prettier Configuration

Set the Prettier configuration in your project's `package.json`:

```json
{
	"prettier": "@dirupt/prettier-config"
}
```

Alternatively, you can create a `.prettierrc` file that extends the shared configuration:

```json
{
	"extends": "@dirupt/prettier-config"
}
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes with clear and descriptive messages.

4. Open a pull request outlining your changes and the problem they solve.

Please ensure that your contributions adhere to the existing code styles and pass all linting and formatting checks.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contact

For any questions or support, please contact Philippe Desplats at [philippe@dirupt.com](mailto:philippe@dirupt.com).

<div align="center">
	<sub>Built with ❤︎ by <a href="https://www.dirupt.com">DIRUPT</a> Team - Maintaining <a href="https://github.com/dirupt-agency/code-quality">DIRUPT Code Quality</a></sub>
</div>
