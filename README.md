# ES6 Features Overview

This repository provides a quick overview of popular ES6 (ECMAScript 2015) features, which include improvements in syntax, variable declaration, array and object manipulation, and async handling. These features make JavaScript code more concise, readable, and efficient.

## Table of Contents
1. [Introduction](#introduction)
2. [ES6 Features](#es6-features)
   - Variable Declaration with let and const
   - Arrow Functions
   - Template Literals
   - Destructuring Assignment
   - Spread and Rest Operators
   - Modules
   - Promises
   - New Array Methods
3. [Example Usage](#example-usage)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

ES6 introduced a range of new features that improve the flexibility and readability of JavaScript. This document provides examples and explanations for some of the most commonly used ES6 features.

## ES6 Features

### Variable Declaration with `let` and `const`
- **`let`**: Allows variable reassignment within its block scope.
- **`const`**: Declares a read-only, block-scoped variable.

```javascript
let city = 'New York';
city = 'Los Angeles';

const country = 'USA';
// country = 'Canada'; // Error: Cannot reassign a const
```
### Arrow Functions
You don't need the function keyword, the return keyword, and the curly brackets.

```javascript
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```
### Template Literals
are a way to work with strings that provides more flexibility and cleaner syntax, especially for embedding expressions and multi-line strings.

```javascript
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
// Output: "My name is Alice and I am 25 years old."
```

### Destructuring Assignment (Object and Array destucturing)
Destructuring assignment makes it easy to assign array values and object properties to variables.

#### object destructuring
```javascript
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;
// Display Data
document.getElementById("demo").innerHTML =
firstName + " is " + age + " years old.";
//console
console.log(firstName + " is " + age + " years old.")
```
#### Array destructuring
```javascript
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;
```

### Spread and Rest Operators
The ... operator expands an iterable (like an array) into more elements:
```javascript
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)
```
### Modules

### Promises
 Promises are a way to handle asynchronous operations, such as fetching data from an API, reading files, or processing data in the background. A promise represents an operation that hasn’t completed yet but is expected to be in the future. It acts like a placeholder for the result of that operation.

 States of a Promise: Pending: The initial state of a promise. Fulfilled: The promise has been resolved. Rejected: The promise has been rejected.
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});
```
Handling Promises with .then, .catch, and .finally:

.then(): Used to handle the result when the promise is fulfilled.
.catch(): Used to handle errors or rejections.
.finally(): Used to run code after the promise settles, regardless of outcome.
```javascript
myPromise
  .then(result => {
    console.log(result);  // Logs: "Operation succeeded!"
  })
  .catch(error => {
    console.error(error);  // Logs: "Operation failed!" if rejected
  })
  .finally(() => {
    console.log("Promise settled.");
  });
```

### New Array Methods
ES6 introduced several new array methods that make it easier to manipulate arrays and perform common operations.
```javascript
const string = 'hello';
const chars = Array.from(string);  // ['h', 'e', 'l', 'l', 'o']

// With a mapping function:
const numbers = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
```

| Method               | Description                                                                         |
|----------------------|-------------------------------------------------------------------------------------|
| `Array.from()`       | Converts an iterable or array-like object to an array.                              |
| `Array.of()`         | Creates an array with specific arguments as elements.                               |
| `Array.find()`       | Returns the first element that satisfies a condition.                               |
| `Array.findIndex()`  | Returns the index of the first element that satisfies a condition.                  |
| `Array.includes()`   | Checks if an array contains a specific element, returning `true` or `false`.        |
| `Array.fill()`       | Fills an array with a specified static value.                                       |
| `Array.copyWithin()` | Copies part of the array to another location within the same array.                 |

