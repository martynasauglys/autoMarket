const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Invalid email'],
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  sessionTokens: [
    {
      token: String,
    },
  ],
});

// Pass hashing
UserSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hassedPassword) => {
        user.password = hassedPassword;
        next();
      });
    });
    // If password is not modified (Email or etc. is modified) go next()
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
