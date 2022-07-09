const express = require("express");
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on " + port);
});

const main = async () => {
  const user = await User.findById('62c9991b6434d31364a569cf');
  await user.populate('tasks');
  console.log(user.tasks);
}
main();