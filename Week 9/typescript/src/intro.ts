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

//* if you are making something like a react app then you can use typescript to define the props and state of the components

// interface Props {
//   name: string;
//   age: number;
// }

// interface State {
//   count: number;
// }

// function App() {
//   return (
//     <>
//     <Title name="Prathamesh" age={20} />
//     </>
//   )
// }

// function Title(props: Props) {
//   return (
//     <h1>{props.name}</h1>
//   )
// }

// function Title({name, age}: Props) {
//   return (
//     <h1>{name}</h1>
//   )
// }

//? interfaces can also be implemented by classes

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} is a dog who Barks`);
  }
}

const dog = new Dog('Tommy');
dog.makeSound();

//? you can also extend interfaces

interface Pet {
  owner: string;
}

interface PetDog extends Animal, Pet {
  breed: string;
}

class Dog2 implements PetDog {
  name: string;
  owner: string;
  breed: string;
  constructor(name: string, owner: string, breed: string) {
    this.name = name;
    this.owner = owner;
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} is a dog of ${this.breed} breed who Barks on his owner ${this.owner}`);
  }
}

const dog2 = new Dog2('Tommy', 'Prathamesh', 'Labrador');
dog2.makeSound();

//? you can also use interfaces with functions

interface Greet {
  (name: string): void;
}

const greet2: Greet = (name: string) => {
  console.log(`Hello ${name}`);
}

greet2('Prathamesh');

//? you can also use interfaces with arrays

interface StringArray {
  [index: number]: string;
}

const names: StringArray = ['Prathamesh', 'Powar'];
console.log(names[0]);


//? Types in typescript

type User1 = {
  name: string;
  age: number;
}

const user1: User1 = {
  name: 'Prathamesh',
  age: 20
};

console.log(user1);

//? Array types

type StringArray1 = string[];
const names1: StringArray1 = ['Prathamesh', 'Powar'];
console.log(names1);

//? Enums

enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
//* alternatively you can also use type Direction = 'Up' | 'Down' | 'Left' | 'Right'

function doSomething(keyPressed: Direction) {
  if (keyPressed === Direction.Up) {
    console.log(Direction.Up);
  } //.... and so on ........
}

function doSomething1(keyPressed: Direction1) {
  if (keyPressed === Direction1.Up) {
    console.log(Direction1.Up);
  } //.... and so on ........
}

doSomething(Direction.Up); // 0
doSomething1(Direction1.Up); // UP