const usersModel = require('./users-model');

const create = async (data) => usersModel.create(data);

const getUserById = async (userId) => usersModel.getById(userId);

const getAllUsers = async () => usersModel.getAll();

module.exports = {
  create,
  getUserById,
  getAllUsers,
};
