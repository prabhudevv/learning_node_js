const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error('Email is not valid');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new error('Age must be +ve number');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new error('Password cannot contain password');
      }
    }
  }
})

const me = new User({
  name: "   Prabhudev   ",
  email: "   BINDAS@gmail.com   ",
  age: '',
  password: '   rrrRRR@123  '
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log(error);
})

module.exports = User