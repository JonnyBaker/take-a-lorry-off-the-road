module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['jest', 'prettier'],
  rules: {
    'no-param-reassign': [2, { props: false }],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    'jest/globals': true,
  },
};
