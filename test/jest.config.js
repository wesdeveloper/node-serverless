const { resolve } = require('path');

const root = resolve(__dirname, '..');
// eslint-disable-next-line import/no-dynamic-require
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  rootDir: root,
  displayName: 'Functional tests',
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.js'],
  testMatch: ['<rootDir>/test/**/*.spec.js'],
};
