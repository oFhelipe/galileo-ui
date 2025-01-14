module.exports = {
  extends: "@rocketseat/eslint-config/node",
  plugins: ["prettier"],
  rules: {
    "react/no-unescaped-entities": "off",
    rules: {
      "react/self-closing-comp": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: false,
          trailingComma: "all",
          arrowParens: "always",
          semi: false,
          endOfLine: "auto",
        },
      ],
    },
  },
};
