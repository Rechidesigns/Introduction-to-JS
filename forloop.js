// Example 1: Print Numbers From 1 to 5
for (let i = 1; i < 6; i++) {
    console.log(i);
}


// Example 2: Display Sum of n Natural Numbers
// program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 505


// Nested for Loops
// A for loop can also have another for loop inside it. For each cycle of the outer loop, the inner loop completes its entire sequence of iterations. For example
// outer loop 
for (let i = 0; i < 3; i++) {

    // inner loop
    for (let j = 0; j < 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }

}