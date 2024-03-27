const x: Number = 10;
console.log(x);

function greet(name: string) {
    console.log(`Hello ${name}`);
}

//? this is also possible because of type inference in typescript
// function sum(num1: number, num2:number): number{
//   return num1 + num2;
// }

function sum(num1: number, num2:number): number{
    return num1 + num2;
}

greet("Prathamesh");
console.log(sum(10, 20));

function runAfter1s(fn: () => void) {
  setTimeout(fn, 1000);
}

function sayHelloInterval(fn: (name: string) => string) {
  setInterval(() => {
    console.log(fn('Prathamesh'));
  }, 1000);
}

runAfter1s(() => {
  console.log('Hello');
});

sayHelloInterval((name: string) => {
  return `Hello ${name}`;
});

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User) {
  return user.age >= 18;
}

const user: User = {
  firstName: 'Prathamesh',
  lastName: 'Powar',
  age: 20
};

console.log(isLegal(user));