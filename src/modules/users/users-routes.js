const { validateBody } = require('../helpers');
const usersValidationSchemas = require('./users-schema-validations');
const usersController = require('./users-controller');

const userRoutes = (router) => {
  router
    .post(
      '/users',
      validateBody(usersValidationSchemas.createUser),
      usersController.create,
    )
    .get('/users', usersController.getAllUsers);
};

module.exports = userRoutes;
