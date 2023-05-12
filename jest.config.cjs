/** @type {import('ts-jest').JestConfigWithTsJest} */
/** @type {import('@testing-library/jest-dom')} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ]
};