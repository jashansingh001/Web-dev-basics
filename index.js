// Basic JavaScript Syntax

// This is a single-line comment
/* This is
   a multi-line
   comment */

// Declare a variable
let message = "Hello, world!";

// Display the message in the browser console
console.log(message);

//Operators

let a = 5;
let b = 10;

console.log(a + b); // 15
console.log(a === b); // false
console.log(!(a < b)); // false


//Conditional Statements

let age = 25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}


//Loops

// Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0, 1, 2, 3, 4
}


//Arrays

let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors.length); // 3


//Objects

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(person.firstName); // "John"


//DOM Manipulation

// Create a new paragraph element
let paragraph = document.createElement("p");

// Set its text content
paragraph.textContent = "This is a dynamically created paragraph.";

// Append it to the document body
document.body.appendChild(paragraph);


//Events

// Add a click event listener to a button element
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});


//Asynchronous Javascript

// Using Promises to handle asynchronous operations
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


//Modules

// Exporting a function from a module
export function greet(name) {
    return `Hello, ${name}!`;
}

// Importing the function in another module
import { greet } from './greetings.js';


