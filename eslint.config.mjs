import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,

  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'no-console': 'warn',
    },
  },
]
