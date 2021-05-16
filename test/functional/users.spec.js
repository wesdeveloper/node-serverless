const { usersFixtures } = require('../fixtures');

describe('Users Routes', () => {
  describe('Create user route', () => {
    it('Should make an request to create a new user and receive status code 201', async () => {
      const userMockData = usersFixtures.generateUserMock();
      const response = await global.request
        .post('/users')
        .send(userMockData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(userMockData));
    });
  });
});
