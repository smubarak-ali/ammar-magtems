module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
      quotes: ["error", "double"],
      "react-native/no-inline-styles": ["off"],
      "react/jsx-max-props-per-line": [2, { maximum: 5, when: "always" }],
  },
};
