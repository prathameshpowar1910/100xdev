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