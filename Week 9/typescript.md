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
