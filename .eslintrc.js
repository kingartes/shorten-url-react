module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  rules: {
    semi: 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 1,
    'react/prefer-stateless-function': ['off'],
    'linebreak-style': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-ev+ents': ['off'],
    'no-plusplus': ['off'],
  },
};
