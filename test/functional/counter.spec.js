const nock = require('nock');

const {
  COUNT_API_HOST,
  COUNT_API_NAMESPACE,
  COUNT_API_KEY,
} = process.env;

describe('Counter Routes', () => {
  describe('Increment route', () => {
    afterEach(() => nock.cleanAll());

    it('Should make an request to increment the access number and receive status code 200', async () => {
      nock(COUNT_API_HOST)
        .get(`/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`)
        .reply(200);

      const response = await global.request.post('/counter');
      expect(response.status).toBe(201);
    });
  });

  describe('Get current amount of access route', () => {
    afterEach(() => nock.cleanAll());

    it('Should make an request to see the current amount of access', async () => {
      nock(COUNT_API_HOST)
        .get(`/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`)
        .reply(200, {
          value: 1,
        });

      const response = await global.request.get('/counter');
      expect(response.status).toBe(200);
      expect(response.body.amount).toBe(1);
    });
  });
});
