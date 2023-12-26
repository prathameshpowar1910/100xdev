//async programming in JS

// 1. Callbacks
// 2. Promises
// 3. Async/Await

//* 1. Callbacks
// JS is a single threaded language that can be non-blocking
// JS uses an event loop to handle asynchronous function calls
// A callback function is a function passed into another function as an argument
// which is then invoked inside the outer function to complete some kind of routine or action
// Callbacks are used to make sure that certain code doesn't execute until other code has already finished execution
// This can be used to control the order in which things get logged to the console
// Callbacks can be synchronous or asynchronous

// Synchronous Callbacks
// function printString(string) {
//   setTimeout(() => {
//     console.log(string);
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//   printString("A");
//   printString("B");
//   printString("C");
// }

// printAll();

// Asynchronous Callbacks
// function printString(string, callback) {
//   setTimeout(() => {
//     console.log(string);
//     callback();
//   }, Math.floor(Math.random() * 100) + 1);
// }

// function printAll() {
//   printString("A", () => {
//     printString("B", () => {
//       printString("C", () => {});
//     });
//   });

// printString("B", () => {
//   printString("C", () => {});
// });
// }

// printAll();

//* 2. Promises
// A promise is an object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending
// Promise users can attach callbacks to handle the fulfilled value or the reason for rejection
// Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked
// Promises can be consumed by registering functions using .then and .catch methods
// .then() is invoked when a promise is fulfilled
// .catch() is invoked when a promise is rejected
// Promises are chainable

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, Math.floor(Math.random() * 100) + 1);
//   });
// }

// function printAll() {
//   printString("A")
//     .then(() => {
//       return printString("B");
//     })
//     .then(() => {
//       return printString("C");
//     });
// }

// printAll();

//* 3. Async/Await
// Async functions enable us to write promise based code as if it were synchronous
// Async functions can contain zero or more await expressions
// Await expressions suspend progress through an async function, yielding control and subsequently resuming progress only when an awaited promise-based asynchronous operation is either fulfilled or rejected
// The resolved value of the promise is treated as the return value of the await expression
// Use try/catch to handle errors

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(string);
//       resolve();
//     }, Math.floor(Math.random() * 100) + 1);
//   });
// }

// async function printAll() {
//   await printString("A");
//   await printString("B");
//   await printString("C");
// }

// printAll();

// async function getGithubUser(username) {
//   try {
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("This is a message")

