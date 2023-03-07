module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   // sourceType: 'module'
  // },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'sonarjs',
  ],
};
