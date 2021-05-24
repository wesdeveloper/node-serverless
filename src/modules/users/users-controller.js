const UserModel = require('./users-model');
const usersRepositrequire = require('./users-repository');
const usersService = require('./users-service');

const UsersRepository = usersRepositrequire(UserModel);
const UsersService = usersService(UsersRepository);

const create = async (req, res) => {
  const { body } = req;
  const user = await UsersService.create(body);
  return res.status(201).send(user);
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await UsersService.getUserById(userId);

  if (!user) {
    return res.status(404).send();
  }

  return res.send(user);
};

const getAllUsers = async (_, res) => {
  const users = await UsersService.getAllUsers();
  return res.status(200).send(users);
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};
