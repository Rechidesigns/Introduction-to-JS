function greet(name) {
    console.log(`Hello ${name}`);
}

// pass "John" as argument
greet("John");

// pass "David" as argument
greet("David");



// function with two arguments
function addNumbers(num1, num2) {
    let sum = num1 + num2;
   console.log(`Sum: ${sum}`);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9



// function to find square of a number
function findSquare(num) {

    // return square
    return num * num; 
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);


// JavaScript Library Functions
// JavaScript provides some built-in functions that can be directly used in our program. We don't need to create these functions; we just need to call them.

// Some common JavaScript library functions are:

// Library Function	Description
// console.log()	Prints the string inside the quotation marks.
// Math.sqrt()	Returns the square root of a number.
// Math.pow()	Returns the power of a number.
// toUpperCase()	Returns the string converted to uppercase.
// toLowerCase()	Returns the string converted to lowercase.



// Function Expressions
// In JavaScript, a function expression is a way to store functions in variables. For example,

// store a function in the square variable
let squares = function(num) {
    return num * num;
};

console.log(squares(5));  

// Output: 25
