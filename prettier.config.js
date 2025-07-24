// prettier.config.js

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  arrowParens: "always",
};

export default config;
