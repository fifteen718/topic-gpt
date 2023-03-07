module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {'parser':'@typescript-eslint/parser'},
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential','sonarjs'],
  rules: {
    // 关闭 console 无法调用的错误提示
    'no-console': 'off',
    // 多行对象需要尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 关闭组件命名要求多单词校验
    'vue/multi-word-component-names': 'off',
  },
};
