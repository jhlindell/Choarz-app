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
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx'] },
    ],
    // 'react/jsx-curly-spacing': [2, 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
