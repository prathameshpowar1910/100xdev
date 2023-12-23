//! Objective: Learn the basics of JavaScript

setInterval(()=>{
  const time = new Date();
  console.log(time.toLocaleTimeString());
},1000)

// 1.1
// Create a variable called `name` and assign it to your name as a string
// Log the variable to the console
const name = "Amanda";
console.log(name);

// 1.2
// Create a variable called `age` and assign it your age as a number
// Log the variable to the console
const age = 25;
console.log(age);

// 1.3
// Create a variable called `hasHobbies` and assign it to true or false as a boolean
// Log the variable to the console
const hasHobbies = true;
console.log(hasHobbies);

// 1.4
// Create a variable called `hobbies` and assign it to an array of strings
// Log the variable to the console
const hobbies = ["reading", "writing", "coding"];
console.log(hobbies);

// 1.5
// Create a variable called `person` and assign it to an object with the following properties:
//   - `name` (string)
//   - `age` (number)
//   - `hasHobbies` (boolean)
//   - `hobbies` (array)
// Log the variable to the console
const person = {
  name: "Amanda",
  age: 25,
  hasHobbies: true,
  hobbies: ["reading", "writing", "coding"]
};
console.log(person);

// 1.6
// Create a function called `greet` that takes a name as an argument and returns a greeting string
// Log the result to the console
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Amanda"));

// 1.7
// Create a function called `isOldEnoughToDrink` that takes an age as an argument and returns a boolean
// Log the result to the console
function isOldEnoughToDrink(age) {
  return age >= 21;
}

console.log(isOldEnoughToDrink(25));

// 1.8
// Create a function called `multiply` that takes two numbers as arguments and returns the product
// Log the result to the console
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));

// 1.9
// Create a function called `canDrive` that takes an age as an argument and returns a boolean
// Log the result to the console
function canDrive(age) {
  return age >= 16;
}
console.log(canDrive(25));
