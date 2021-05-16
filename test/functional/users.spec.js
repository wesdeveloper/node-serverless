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

    describe('Validations cases', () => {
      const userMockData = usersFixtures.generateUserMock();
      Object.keys(userMockData).forEach(key => {
        const userMock = { ...userMockData };
        delete userMock[key];

        it(`Should make an request to create a new user without ${key} and receive status code 400`, async () => {
          const response = await global.request
            .post('/users')
            .send(userMock);

          expect(response.status).toBe(400);

          const errorItem = response.body.filter(error => error.path === key);
          expect(errorItem).not.toBeNull();
        });
      });
    });
  });
});
