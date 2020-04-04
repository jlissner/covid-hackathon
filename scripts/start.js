'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = process.env.BABEL_ENV || 'production';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});
// Ensure environment variables are read.

const app = require ('../server');
const chalk = require('react-dev-utils/chalk');

// Tools like Cloud9 rely on this.
const PORT = parseInt(process.env.PORT, 10) || 80;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(chalk.cyan(`Starting the prodction server on port ${PORT}...\n`));
});
