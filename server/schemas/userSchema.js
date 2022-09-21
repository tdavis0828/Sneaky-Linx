const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  preference: {
    type: String,
    rquired: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validateEmail, 'Please provide a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
  },
  birthday: {
    type: String,
    trim: true,
  },
  smoker: {
    type: String,
  },
  drinker: {
    type: String,
  },
  interests: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
