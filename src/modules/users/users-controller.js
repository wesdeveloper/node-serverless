const usersRepository = require('./users-repository');
const usersService = require('./users-service');

const UsersService = usersService(usersRepository);

const create = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await UsersService.create(body);
    return res.status(201).send(user);
  } catch (e) {
    return next(e);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UsersService.getUserById(userId);

    if (!user) {
      return res.status(404).send();
    }

    return res.send(user);
  } catch (e) {
    return next(e);
  }
};

const getAllUsers = async (_, res, next) => {
  try {
    const users = await UsersService.getAllUsers();
    return res.status(200).send(users);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};
