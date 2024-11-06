// es6 features

console.log("hello world")

//let and const for variable Declaration

let city= 'New York'
city='Los Angeles'

const County = 'USA'
// COUNTY='Canada' //Error: Cant Reassign a const

// allow function

// provide shorter syntax for writing a Function

// normal way

function calculate(){

}
// allow function
const add = ()=>{}


// Template Literals
//Template literals use backticks (`) and allow embedding variables and expressions with ${}. They also support multiline strings directly.

const name ='alice'
const messeage=`hello, ${name}` //hello alice

// Destructuring assignment
//Destructuring allows you to extract values from arrays and objects into distinct variables

// array Destrucuting
const colors = ['red','green','blue']

const [first,second]=colors;

// object Destucturing
const user={
    nam:"simon",
    course:"computer science",
    year:"3"
}
const{nam,course,year}=user
console.log(nam) //simon

// Speard and Rest operators (...)
//Spread (...) expands elements in arrays or properties in objects.
//Rest (...) collects multiple arguments or array elements into a single array.

// spread array

const arr1 = [1,2,3];

const arr2=[...arr1,4,5]; //[1,2,3,4,5]

// spraed in Objects

const user1={
    name:'simon',
    age:'30'
}

const userwithcity={
    ...user,
    city:'Newyork'
}

// rest Parameter

function sum(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sum(1,2,3,4));//10

// modules
export const PI =3.14159;
export function add(a,b){
    return a+b;
}


// importing
import {pi,add} from './math.js'
console.log(add(s,3)); //5

// promise
//Promises allow you to handle asynchronous operations, providing a more readable way to handle success and failure cases compared to callbacks
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
  
  fetchData
    .then(result => console.log(result)) // "Data fetched!"
    .catch(error => console.error(error));

// New Array Methods
//find: Returns the first element that satisfies a condition.
//findIndex: Returns the index of the first element that satisfies a condition.
//includes: Checks if an array contains a certain value.

const numbers = [10, 20, 30];

const found = numbers.find(num => num > 15); // 20
const index = numbers.findIndex(num => num > 15); // 1
const hasValue = numbers.includes(20); // true