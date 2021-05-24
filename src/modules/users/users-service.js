const usersService = (usersRepository) => {
  const create = async (data) => usersRepository.create(data);

  const getUserById = async (userId) => usersRepository.getById(userId);

  const getAllUsers = async () => usersRepository.getAll();

  return {
    create,
    getUserById,
    getAllUsers,
  };
};

module.exports = usersService;
