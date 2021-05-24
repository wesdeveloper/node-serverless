const usersRepository = (UserModel) => {
  const create = async (data) => {
    const user = new UserModel({ ...data });
    return user.save();
  };

  const getAll = async () => UserModel.find();

  const getById = userId => UserModel.findById(userId);

  return {
    create,
    getAll,
    getById,
  };
};

module.exports = usersRepository;
