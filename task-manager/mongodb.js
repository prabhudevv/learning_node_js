// CRUD
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unabled to connect to DB!");
  }

  const db = client.db(databaseName);

  // Fetch single data
  // db.collection('users').findOne({
  //     name: "Prabhudev V"
  // }, (error, result) => {
  //     if (error) {
  //         console.log("Unable to fetch user")
  //     }
  //     console.log(result);
  // })

  // Fetch multiple data
  // db.collection('users').find({
  //     name: "Prabhudev V"
  // }).toArray((error, result) => {
  //     if (error) {
  //         console.log("Unable to fetch user")
  //     }
  //     console.log(result);
  // })

  // // Fetch number of data
  // db.collection('users').find({
  //     name: "Prabhudev V"
  // }).count((error, count) => {
  //     if (error) {
  //         console.log("Unable to fetch user")
  //     }
  //     console.log(count);
  // })

  // Insert single data
  // db.collection('users').insertOne({
  //     name: "Prabhudev V",
  //     age: 30
  // }, (error, result) => {
  //     if (error) {
  //         console.log("Unable to insert user")
  //     }
  //     console.log(result.ops);
  // })

  // Insert more data at once (users)
  // db.collection('users').insertMany([
  //     {
  //         name: "Power",
  //         age: 30
  //     },
  //     {
  //         name: "Jyotsna",
  //         age: 29
  //     }
  // ], (error, result) => {
  //     if (error) {
  //         console.log("Unable to insert user")
  //     }
  //     console.log(result.ops);
  // })

  // Insert more data at once (tasks)
  // db.collection('tasks').insertMany([
  //     {
  //         description: "Learn Node.js course",
  //         completed: true
  //     },
  //     {
  //         description: "Call Joe",
  //         completed: false
  //     },
  //     {
  //         description: "Have breakfast",
  //         completed: true
  //     }
  // ], (error, result) => {
  //     if (error) {
  //         console.log("Unable to insert task")
  //     }
  //     console.log(result.ops);
  // })

  // // Update single data
  // db.collection('users').updateOne({
  //   _id: new ObjectID("62c489ffef181ed9e758a3ce")
  // }, {
  //   $set: {
  //     name: "Power Star"
  //   },
  //   $inc: {
  //     age: +5
  //   }
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // // Update multiple data
  // db.collection('users').updateMany({
  //   age: 30
  // }, {
  //   $inc: {
  //     age: +5
  //   }
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // Delete single data
  // db.collection('users').deleteOne({
  //   age: 35
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // Delete multiple data
  // db.collection('users').deleteMany({
  //   name: "Prabhudev V"
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

})