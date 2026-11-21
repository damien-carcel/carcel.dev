import js from '@eslint/js';
// @ts-expect-error There is no @types package for eslint-config-preact
import preact from 'eslint-config-preact';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/**']),
  ...preact,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
