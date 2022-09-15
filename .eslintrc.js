module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended"
  ],
  plugins: ["react"],
  rules: {
    "no-console": "warn"
  },
  parserOptions: {
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
