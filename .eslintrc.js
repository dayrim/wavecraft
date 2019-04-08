module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // enable additional rules
    indent: ["error", 4],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override default options for rules from base configurations

    "no-cond-assign": ["error", "always"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
