//Variable names must start with a letter, an underscore _, or the dollar sign $. For example,
// valid
let message = "hello";
let _message = "hello";
let $message = "hello";
// console.log(message)
// console.log(_message)
// console.log($message)


// Variables cannot start with numbers. For example,
// // invalid
// let 1message = "hello"; // this gives an error
let message1 = "hello";
// console.log(message1)



//Variable names are case-sensitive. So age and Age are different variables. For example,
let age = 23;
let Age = 20;

// console.log(age); // 23
// console.log(Age); // 20


// Variable names cannot be keywords (special words reserved for specific purposes in JavaScript such as if, else, let, var, etc.). For example,
// //invalid
//let new = 5; // Error! new is a keyword
// Recommended ways to name a variable in JavaScript.
// You can name the variables any way you want. However, we recommend you use the following naming conventions:

// In JavaScript, variables are generally named in camelCase format if they have multiple words.

// For example, firstName, annualSalary, numberOfBooks, etc.
// It's a good practice to give a descriptive name to a variable.

//For example, if you are using a variable to store the number of apples, it is better to name that variable apples or numberOfApples rather than x or n.




// JavaScript Constants
// A constant is a type of variable whose value cannot be changed.
// In JavaScript, we use the const keyword to create constants. For example,
// assign 5 to num
const num = 5;

// assign 10 to num
num = 10;  
//console.log(num) // Error! constant cannot be changed


// JavaScript Constants
// A constant is a type of variable whose value cannot be changed.
// In JavaScript, we use the const keyword to create constants. For example,
let student = {
    firstName: "John",
    lastName: null,
    class: 10
};

