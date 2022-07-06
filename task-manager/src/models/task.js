const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const me = new Task({
  description: "Prepare coffee",
  completed: true
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log(error);
})

module.exports = Task