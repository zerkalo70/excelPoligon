module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      configFile: "./babel.config.json",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', "google"],
  rules: {
    'semi': 'off',
    "quotes": 'off',
    "linebreak-style": 'off',
    "indent": "off",
      "max-len": "off",
    "eol-last": "off",
    "spaced-comment": "off",
    "require-jsdoc": "off",
    "operator-linebreak": "off",
    "no-trailing-spaces": "off",
  },
};
