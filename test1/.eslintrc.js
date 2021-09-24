module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      "legacyDecorators": true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    "no-irregular-whitespace":"off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	"prettier/prettier": "off"
  },
  globals: {
    _: false,
    moment: false,
    $: false
  }
};
