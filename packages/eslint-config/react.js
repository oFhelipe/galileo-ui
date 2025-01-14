module.exports = {
  extends: "@rocketseat/eslint-config/react",
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
          trailingComma: "all",
          arrowParens: "always",
          semi: false,
          endOfLine: "auto",
        },
      ],
    },
  },
};
