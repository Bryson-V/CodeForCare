/*
Lab 2: Factorials

How a factorial works: It multiplies all the previous values leading up to the number starting from 1.

EX: Input number: 5
What the code needs to do: 5 * 4 * 3 * 2 * 1
Result: 120

The inputs are just random numbers, you should be using variables and not use the inputs and 
the expected value.

The loop should start from 1 and it should increase until it is less or equal the input value.
Once you have the loop finish, find a way to connect the variable you used in the loop to multiply with
the solution value and return it.

TL;DR
1. Do not hardcode the answers! Use variables so your code works for ANY input number, not just the test cases.
2. Setup your loop: Start from 1 and increase (+1) until it is less than or equal to the input value (n).
3. Inside the loop: Multiply your loop variable into the 'solution' variable on every step.
4. After the loop finishes: Return the final 'solution' variable.
*/

import readline from "node:readline"

export const LabConfig = {
  title: "Lab 2: Factorials",

  description: `
    <h3>Problem Statement</h3>
    <p>Write a program that returns the factorial of the input.</p>
  `,

  testCases: [
    { input: [3], expected: 6 },
    { input: [4], expected: 24 },
    { input: [10], expected: 3628800 },
    { input: [0], expected: 1 }
  ],

  solution: function (n) {

    let solution = 1; // Multiply the solution number 

    // ---- CODE STARTS HERE ----

    // ---- CODE ENDS HERE ----
  }
};