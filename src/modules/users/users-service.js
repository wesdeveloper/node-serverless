const usersModel = require('./users-model');

const create = async (data) => usersModel.create(data);

module.exports = {
  create,
};
