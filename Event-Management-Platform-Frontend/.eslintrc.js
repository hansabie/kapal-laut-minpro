module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "react/jsx-key": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  };