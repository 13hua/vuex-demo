// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await 2:error 1: warn 0:off
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0, // 使用分号
    'indent': [2, 2], //缩进2个空格
    'space-before-function-paren': [2, {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }], // 强制在 function的左括号之前使用一致的空格
    'no-undef': 2, //禁止使用没有定义的变量，除非在／＊global＊／已经申明
  }
}
