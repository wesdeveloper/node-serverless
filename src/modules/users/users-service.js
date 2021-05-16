const usersModel = require('./users-model');

const create = async (data) => usersModel.create(data);

const getAllUsers = async () => usersModel.getAll();

module.exports = {
  create,
  getAllUsers,
};
