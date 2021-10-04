module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'react', 'react-hooks'],
  overrides: [
    {
      files: ["*.ts", '.tsx'],
    }
  ],  
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        globalReturn: false,
        impliedStrict: true,
        experimentalObjectRestSpread: true,
        modules: true,
      },
  },
  rules: {
      'default-case': 'off',
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'no-dupe-class-members': 'off',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-namespace': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'no-undef': 'error',
  }
}
