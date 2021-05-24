const { usersFixtures } = require('../fixtures');
const { User } = require('../../src/modules/users/users-repository');

describe('Users Routes', () => {
  afterEach(async () => User.deleteMany());
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

  describe('Get an user by id route', () => {
    it('Should make an request to get an user by id and receive status code 200', async () => {
      const userMockData = usersFixtures.generateUserMock();
      const { body: createdUser } = await global.request
        .post('/users')
        .send(userMockData);

      const response = await global.request
        .get(`/users/${createdUser._id}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(createdUser);
    });
  });

  describe('Validations cases', () => {
    it('Should make an request to get a user that does not exist and receive status code 404', async () => {
      const response = await global.request
        .get('/users/60a15e0d1337316aad5d87bf');

      expect(response.status).toBe(404);
    });
  });
});

describe('Get all users route', () => {
  it('Should make an request to get all users and receive status code 200', async () => {
    const response = await global.request
      .get('/users');

    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
  });
});
