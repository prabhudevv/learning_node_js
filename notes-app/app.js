const validator = require("validator");
const yargs = require("yargs");
// const chalk = require('chalk');
const sumOfTwoNumbers = require("./utils.js");
const notes = require("./notes.js");

const sum = sumOfTwoNumbers(2, 3);

console.log(sum);

// validator
// console.log(chalk.bold.red.bgCyanBright('\n VALIDATOR '));
console.log("Email validation: " + validator.isEmail("abc@gmail.com"));
console.log(
  "URL validation: " + validator.isURL("https://nodejs.org/en/docs/")
);

// chalk colors
// console.log(chalk.bold.red.bgCyanBright('\n CHALK COLORS '));
// console.log(chalk.red('red'));
// console.log(chalk.yellow('yellow'));
// console.log(chalk.green('green'));

// chalk background colors
// console.log(chalk.bold.red.bgCyanBright('\n CHALK BACKGROUND COLORS '));
// console.log(chalk.bgRed('bgRed'));
// console.log(chalk.bgYellow('bgYellow'));
// console.log(chalk.bgGreen('bgGreen'));

// chalk styles
// console.log(chalk.bold.red.bgCyanBright('\n CHALK STYLES '));
// console.log(chalk.bold('BOLD text'));
// console.log(chalk.dim('DIM text'));
// console.log(chalk.italic('ITALIC text'));
// console.log(chalk.underline('UNDERLINE text'));
// console.log(chalk.inverse('INVERSE text'));
// console.log(chalk.strikethrough('STRIKETHROUGH text'));

const command = process.argv[2];
if (command === "add") {
  console.log("Adding notes!");
} else if (command === "remove") {
  console.log("Removing notes!");
}

// customize yargs version
yargs.version("1.1.0");

// create add command
// > node app.js add --title="Bindas Happy" --body="Prabhudev Vatnal"
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // by default not required
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true, // by default not required
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove command
// > node app.js remove --title="Bindas"
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // by default not required
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list command
// > nodemon app.js list
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// read command
// > node app.js read --title="Bhai Bhai log"
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // by default not required
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// add, remove, read, list
console.log(process.argv);
console.log(yargs.argv);
