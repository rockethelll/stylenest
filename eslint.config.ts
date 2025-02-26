import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        suite: true,
        test: true,
        describe: true,
        it: true,
        expect: true,
        assert: true,
        vitest: true,
        vi: true,
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        afterEach: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended, // Recommandations JavaScript
  ...[tseslint.configs.recommended], // Recommandations TypeScript
  pluginReact.configs.flat.recommended, // Recommandations React
  pluginReact.configs.flat['jsx-runtime'], // Recommandations React JSX Runtime
];  