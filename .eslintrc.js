module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parser: "babel-eslint",
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        printWidth: 100,
      },
    ],
    "linebreak-style": [0],
    "react/prefer-stateless-function": [1],
    "react/forbid-prop-types": [false],
    "react/no-unescaped-entities": [false],
  },
  plugins: ["prettier"],
};
