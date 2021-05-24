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

module.exports = mongoose.model('User', UserSchema);
