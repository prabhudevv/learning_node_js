const mongoose = require('mongoose');
const validator = require('validator');
const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

taskSchema.pre('save', async function (next) {
  const task = this;
  if (task.isModified('password')) {
    task.password = await bcrypt.hash(task.password, 8);
  }
  next();
})

const Task = mongoose.model('Task', taskSchema);

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