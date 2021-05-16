const { logger } = require('../../config');
const usersService = require('./users-service');

const create = async (req, res) => {
  try {
    const { body } = req;
    const user = await usersService.create(body);
    return res.status(201).send(user);
  } catch (e) {
    logger.error('user controller - create error:', e);
    return res.status(500).send();
  }
};

module.exports = {
  create,
};
