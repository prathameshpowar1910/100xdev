**How does TypeScript Code run?**
- TypeScript code is compiled into JavaScript code using the TypeScript compiler. The TypeScript compiler is a command-line tool that can be installed using npm. The TypeScript compiler takes a TypeScript file as input and generates a JavaScript file as output. The generated JavaScript file can then be executed by a JavaScript engine, such as the V8 engine used by Google Chrome.
- TypeScript never runs on the browser
- Type checking is done at compile time, not at runtime and if there are any type errors, the TypeScript compiler will generate an error message and will not generate the JavaScript file i.e. the conversion will fail.

**What is TypeScript?**
- TypeScript is a superset of JavaScript that adds static typing to the language. TypeScript code is compiled into JavaScript code using the TypeScript compiler. The TypeScript compiler is a command-line tool that can be installed using npm. The TypeScript compiler takes a TypeScript file as input and generates a JavaScript file as output. The generated JavaScript file can then be executed by a JavaScript engine, such as the V8 engine used by Google Chrome.
- TypeScript is a statically typed language, which means that the type of a variable is known at compile time. This allows the TypeScript compiler to catch type errors before the code is executed, which can help prevent bugs and make the code more robust.
- TypeScript also supports object-oriented programming features such as classes, interfaces, and inheritance, which can help make the code more modular and easier to maintain. TypeScript has better tooling support than JavaScript, including features such as code completion, refactoring, and static analysis, which can help improve productivity and reduce errors.
```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

**What are the advantages of using TypeScript?**
- TypeScript has several advantages over JavaScript, including:
  - Static typing: TypeScript is a statically typed language, which means that the type of a variable is known at compile time. This allows the TypeScript compiler to catch type errors before the code is executed, which can help prevent bugs and make the code more robust.
  - Object-oriented programming features: TypeScript supports object-oriented programming features such as classes, interfaces, and inheritance, which can help make the code more modular and easier to maintain.
  - Better tooling: TypeScript has better tooling support than JavaScript, including features such as code completion, refactoring, and static analysis, which can help improve productivity and reduce errors.
  - Compatibility with JavaScript: TypeScript is a superset of JavaScript, which means that existing JavaScript code can be used in TypeScript projects without modification. This makes it easy to migrate existing JavaScript projects to TypeScript.
  - Strong community support: TypeScript has a strong community of developers who contribute to the language and provide support through forums, tutorials, and other resources.

**What are the disadvantages of using TypeScript?**
- TypeScript has some disadvantages compared to JavaScript, including:
  - Learning curve: TypeScript has a steeper learning curve than JavaScript, especially for developers who are not familiar with statically typed languages. This can make it more difficult for new developers to get started with TypeScript.
  - Compilation step: TypeScript code must be compiled into JavaScript code before it can be executed, which adds an extra step to the development process. This can slow down the development cycle and make it more difficult to debug and test the code.
  - Tooling support: While TypeScript has better tooling support than JavaScript, some tools and libraries may not be fully compatible with TypeScript, which can make it more difficult to work with certain technologies.
  - Performance: TypeScript code may have slightly worse performance than equivalent JavaScript code, due to the overhead of type checking and other features. However, the performance difference is usually negligible for most applications.

**What are Types in TypeScript?**
- Types in TypeScript are used to define the shape of data that can be stored in a variable. TypeScript supports several built-in types, including:
  - number: A number, such as 42 or 3.14.
  - string: A string of characters, such as "hello" or "world".
  - boolean: A boolean value, either true or false.
  - object: An object, such as { name: "Alice", age: 30 }.
  - array: An array of values, such as [1, 2, 3].
  - tuple: A fixed-length array with a specific type for each element, such as [string, number].
  - enum: A set of named constants, such as Color.Red, Color.Green, Color.Blue.
  - any: Any type, which can be used to store values of any type.
  - void: A type that represents the absence of a value, typically used for functions that do not return a value.
  - null: A type that represents a null value.
  - undefined: A type that represents an undefined value.
  - never: A type that represents a value that never occurs, typically used for functions that throw errors or never return.

**What are Interfaces in TypeScript?**
- Interfaces in TypeScript are used to define the shape of an object, including the properties and methods that the object should have. Interfaces can be used to enforce a specific structure on objects and provide type checking at compile time. Interfaces can also be used to define custom types that can be used throughout the codebase.
- Interfaces are similar to classes in object-oriented programming, but they do not provide an implementation for the properties and methods that they define. Instead, interfaces are used to define a contract that objects must adhere to in order to be considered of a certain type.
- Interfaces can be used to define the shape of an object, including the properties and methods that the object should have. Interfaces can be used to enforce a specific structure on objects and provide type checking at compile time. Interfaces can also be used to define custom types that can be used throughout the codebase.

**What are some properties of Types that interfaces can't do?**
1. **Unions**: Unions allow you to define a variable that can hold values of multiple types. For example, you can define a variable that can hold either a number or a string:
```typescript
type StringOrNumber = number | string;

function printID(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printID(101); // ID: 101
printID("202"); // ID: 202
```

2. **Intersection Types**: Intersection types allow you to combine multiple types into a single type. For example, you can define a type that has all the properties of two other types:
```typescript
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "parthamehs",
  startDate: new Date(),
  department: "Software developer"
};
```
**Enums**: Enums allow you to define a set of named constants. For example, you can define an enum for the days of the week:
```typescript
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const today: Days = Days.Monday;
console.log(today); // 0
```

**Type Assertions**: Type assertions allow you to tell the TypeScript compiler that a variable is of a specific type, even if the compiler cannot infer the type. For example, you can use a type assertion to tell the compiler that a variable is a string:
```typescript
let name: any = "Alice";
let nameLength = (name as string).length;
console.log(nameLength); // 5
```

**Type Guards**: Type guards allow you to check the type of a variable at runtime and perform different actions based on the type. For example, you can use a type guard to check if a variable is a string:
```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

let value: any = "hello";

if (isString(value)) {
  console.log(value.toUpperCase());
}
```

**Type Aliases**: Type aliases allow you to define custom types that can be used throughout your codebase. For example, you can define a type alias for a tuple of a string and a number:
```typescript
type StringNumberTuple = [string, number];

function printTuple(tuple: StringNumberTuple) {
  console.log(`Tuple: ${tuple[0]}, ${tuple[1]}`);
}

printTuple(["hello", 42]); // Tuple: hello, 42
```

**Mapped Types**: Mapped types allow you to create new types based on existing types. For example, you can create a mapped type that makes all properties of an object read-only:
```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = {
  name: string;
  age: number;
};

const person: Readonly<Person> = {
  name: "Alice",
  age: 30
};

person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

**Conditional Types**: Conditional types allow you to create types that depend on a condition. For example, you can create a conditional type that returns a string if a variable is a string, or a number if the variable is a number:
```typescript
type StringOrNumber<T> = T extends string ? string : number;

let value: StringOrNumber<"hello"> = "hello";
console.log(value); // hello

value = 42;
console.log(value); // 42
```

**Infer Keyword**: The infer keyword allows you to infer the type of a variable based on another type. For example, you can use the infer keyword to infer the return type of a function:
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>;
console.log(typeof add); // number
```

**Recursive Types**: Recursive types allow you to define types that reference themselves. For example, you can define a type that represents a binary tree:
```typescript
type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

const tree: TreeNode<number> = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    }
  },
  right: {
    value: 4
  }
};
```

**Template Literal Types**: Template literal types allow you to create new types by concatenating strings. For example, you can create a type that represents a CSS class name:
```typescript
type ClassName<T extends string> = `class-${T}`;

let className: ClassName<"button"> = "class-button";
console.log(className); // class-button
```

**Keyof Keyword**: The keyof keyword allows you to get the keys of an object as a union type. For example, you can use the keyof keyword to get the keys of a person object:
```typescript
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
console.log(PersonKeys); // "name" | "age"
```

**Indexed Access Types**: Indexed access types allow you to get the type of a property of an object. For example, you can use indexed access types to get the type of the name property of a person object:
```typescript
type Person = {
  name: string;
  age: number;
};

type NameType = Person["name"];
console.log(NameType); // string
```

**Generics**: Generics allow you to define functions, classes, and interfaces that can work with any type. Generics are a language independant concept. . For example, you can define a generic function that reverses an array:
```typescript
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = <number>[1, 2, 3];
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // [3, 2, 1]

const strings = <string>["hello", "world"];
const reversedStrings = reverse(strings);
console.log(reversedStrings); // ["world", "hello"]
```

**Decorators**: Decorators allow you to add metadata to classes, methods, and properties. For example, you can use a decorator to log the name of a method when it is called:
```typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling method ${key}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Example {
  @log
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}

const example = new Example();
example.greet("Alice"); // Calling method greet
```

**Mixins**: Mixins allow you to combine multiple classes into a single class. For example, you can create a mixin that adds logging functionality to a class:
```typescript
function Loggable<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    log(message: string) {
      console.log(message);
    }
  };
}

class Example {
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}

const LoggableExample = Loggable(Example);
const example = new LoggableExample();
example.greet("Alice"); // Hello, Alice!
example.log("Method called"); // Method called
```

**How can Enums be useful in creating a Express Framewaork Application?**
- Enums can be useful in creating an Express framework application by defining named constants for HTTP status codes, request methods, and other values that are commonly used in web development. For example, you can define an enum for HTTP status codes:
```typescript
enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

app.get("/users", (req, res) => {
  const users = getUsers();
  if (users) {
    res.status(HttpStatus.OK).json(users);
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
  }
});
```
- Enums can also be used to define named constants for request methods, content types, and other values that are used in routing and middleware functions. Enums can help make the code more readable and maintainable by providing descriptive names for common values.

**How can you use TypeScript in a Node.js application?**
- TypeScript can be used in a Node.js application by installing the TypeScript compiler and configuring a tsconfig.json file. The tsconfig.json file specifies the compiler options and project settings for the TypeScript project. Once the tsconfig.json file is set up, you can write TypeScript code in .ts files and compile it into JavaScript code using the tsc command.

**How can you use TypeScript in a React application?**
- TypeScript can be used in a React application by installing the TypeScript compiler and configuring a tsconfig.json file. The tsconfig.json file specifies the compiler options and project settings for the TypeScript project. Once the tsconfig.json file is set up, you can write TypeScript code in .tsx files and compile it into JavaScript code using the tsc command. You can also use the create-react-app tool to create a new React project with TypeScript support.

