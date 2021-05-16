const Joi = require('joi');

const id = Joi.string();

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = {
  createUser,
  id,
};
