const mongoose = require('mongoose');

const { default: isEmail } = require('validator/lib/isEmail');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  // useCreateIndex: true
})