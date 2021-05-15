const request = require('supertest');
const app = require('../src');

process.env.NODE_ENV = 'test';

global.app = app;
global.request = request(app);

beforeAll(async () => {
});
