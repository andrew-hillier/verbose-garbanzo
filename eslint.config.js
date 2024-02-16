import js from '@eslint/js'
import ts from 'typescript-eslint';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  {
    ignores: [
      'build/**',
      'cypress.config.ts'
    ],
  }
);
