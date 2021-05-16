const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: String,
    lastName: String,
    email: String,
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);

const usersModel = () => {
  const create = async (data) => {
    const user = new User({ ...data });
    return user.save();
  };

  const getAll = async () => User.find();

  const getById = userId => User.findById(userId);

  return {
    create,
    getAll,
    getById,
  };
};

module.exports = usersModel();
