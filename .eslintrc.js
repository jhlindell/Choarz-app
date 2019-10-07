module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['prettier', 'babel', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
    'func-names': 0,
    'no-console': 0,
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx'] },
    ],
    'react/jsx-curly-spacing': 0,
    'react/jsx-one-epxression-per-line': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
