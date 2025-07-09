// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "no-console": "warn", // warn about console.log usage
      "no-debugger": "error", // disallow debugger statements
      "max-len": ["warn", { code: 120 }], // warn on lines longer than 120 chars
      indent: ["error", 2], // 2 spaces indentation
      curly: ["error", "all"],
      quotes: ["error", "single", { avoidEscape: true }],
      "no-var": "error", // disallow var, prefer let/const
      "prefer-const": "error", // prefer const for variables that are never reassigned
      "no-duplicate-imports": "error", // disallow duplicate imports
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "ordiss",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "ordiss",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
