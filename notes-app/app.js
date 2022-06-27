const sumOfTwoNumbers = require('./utils.js');
const getNotes = require('./notes.js');

const sum = sumOfTwoNumbers(2, 3);
const notes = getNotes();

console.log(sum);
console.log(notes);

// fs.writeFileSync('notes.txt', 'This file created by Node.js');
// fs.appendFileSync('notes.txt', ' My name is Bindas');