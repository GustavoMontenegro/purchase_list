module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.json']}],
    'react/prop-types': ['error', {ignore: ['navigation']}],
    'import/no-extraneous-dependencies': ['error', {packageDir: './'}],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
