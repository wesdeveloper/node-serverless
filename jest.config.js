const { resolve } = require('path');

const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  displayName: 'Unit tests',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  testEnvironment: 'node',
  clearMocks: true,
};
