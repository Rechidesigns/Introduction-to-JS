// JavaScript Operator Types
// Here is a list of different JavaScript operators you will learn in this tutorial:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Miscellaneous Operators



// Arithmetic Operators
// Commonly Used Arithmetic Operators
// Operator	            Name	        Example
// +	                Addition	    3 + 4  // 7
// -	                Subtraction	    5 - 3  // 2
// *	                Multiplication	2 * 3  // 6
// /	                Division	    4 / 2  // 2
// %	                Remainder	    5 % 2  // 1
// ++	 Increment (increments by 1)	      ++5 or 5++  // 6
// --	Decrement (decrements by 1)      	--4 or 4--  // 3
// **	Exponentiation (Power)	          4 ** 2  // 16



// Arithmetic Operators in JavaScript
// let x = 5;

// // addition operator
// console.log("Addition: x + 3 = ", x + 3);

// // subtraction operator
// console.log("Subtraction: x - 3 =", x - 3);

// // multiplication operator
// console.log("Multiplication: x * 3 =", x * 3);

// // division operator
// console.log("Division: x / 3 =", x / 3);

// // remainder operator
// console.log("Remainder: x % 3 =", x % 3);

// // increment operator
// console.log("Increment: ++x =", ++x);

// // decrement operator
// console.log("Decrement: --x =", --x);

// // exponentiation operator
// console.log("Exponentiation: x ** 3 =", x ** 3);




// . JavaScript Assignment Operators
// We use assignment operators to assign values to variables. For example,

// let x = 5;
// Here, we used the = operator to assign the value 5 to the variable x.

// Commonly Used Assignment Operators
// Operator	Name	Example
// =	Assignment Operator	a = 7;
// +=	Addition Assignment	a += 5;  // a = a + 5
// -=	Subtraction Assignment	a -= 2;  // a = a - 2
// *=	Multiplication Assignment	a *= 3;  // a = a * 3
// /=	Division Assignment	a /= 2;  // a = a / 2
// %=	Remainder Assignment	a %= 2;  // a = a % 2
// **=	Exponentiation Assignment

// // assignment operator
// let a = 7;
// console.log("Assignment: a = 7, a =", a);

// // addition assignment operator
// a += 5;  // a = a + 5
// console.log("Addition Assignment: a += 5, a =", a);

// // subtraction assignment operator
// a -= 5;  // a = a - 5
// console.log("Subtraction Assignment: a -= 5, a =", a);

// // multiplication assignment operator
// a *= 2;  // a = a * 2
// console.log("Multiplication Assignment: a *= 2, a =", a);

// // division assignment operator
// a /= 2;  // a = a / 2
// console.log("Division Assignment: a /= 2, a =", a);

// // remainder assignment operator
// a %= 2;  // a = a % 2
// console.log("Remainder Assignment: a %= 2, a =", a);

// // exponentiation assignment operator
// a **= 2;  // a = a**2
// console.log("Exponentiation Assignment: a **= 7, a =", a);



// JavaScript Comparison Operators
// We use comparison operators to compare two values and return a boolean value (true or false). For example,

// const a = 3, b = 2;
// console.log(a > b);

// Output: true 


// Here, we have used the > comparison operator to check whether a (whose value is 3) is greater than b (whose value is 2).

// Since 3 is greater than 2, we get true as output.

// Note: In the above example, a > b is called a boolean expression since evaluating it results in a boolean value.

// Commonly Used Comparison Operators
// Operator	Meaning	Example
// ==	Equal to	3 == 5 gives us false
// !=	Not equal to	3 != 4 gives us true
// >	Greater than	4 > 4 gives us false
// <	Less than	3 < 3 gives us false
// >=	Greater than or equal to	4 >= 4 gives us true
// <=	Less than or equal to	3 <= 3 gives us true
// ===	Strictly equal to	3 === "3" gives us false
// !==	Strictly not equal to	3 !== "3" gives us true


// // equal to operator
// console.log("Equal to: 2 == 2 is", 2 == 2);

// // not equal operator
// console.log("Not equal to: 3 != 3 is", 3 != 3);

// // strictly equal to operator
// console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// // strictly not equal to operator
// console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// // greater than operator
// console.log("Greater than: 3 > 3 is", 3 > 3);

// // less than operator
// console.log("Less than: 2 > 2 is", 2 > 2);

// // greater than or equal to operator
// console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// // less than or equal to operator
// console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);


// JavaScript Logical Operators
// We use logical operators to perform logical operations on boolean expressions. For example,

// const x = 5, y = 3;
// console.log((x < 6) && (y < 5));

// Output: true

let x = 3;

// logical AND
console.log((x < 5) && (x > 0));  // true
console.log((x < 5) && (x > 6));  // false

// logical OR
console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// logical NOT
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true