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
