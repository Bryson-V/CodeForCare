/*
Lab 3: Try and catch

How try/catch works:
Think of "try" as a batter swinging their bat, this is equivalent
to you trying to run some code.
If an error happens (like the batter misses the ball), JavaScript
throws an error instead of crashing your whole program.
The "catch" portion acts like a referee by catching the mistake and
deciding what to do next

TL;DR
Rules for this lab:
1. Inside the 'try' block, check if the input number (n) is greater than 10.
2. If n is greater than 10, manually throw an error using: throw new Error("Greaterthan10");
3. If n is 10 or less, just return the string "Lessthan10".
4. If an error is caught in the 'catch' block, return the error's message ("Greaterthan10").
*/

export const LabConfig = {
  title: "Lab 3: try/catch",
  description: `
    <h3>Problem Statement</h3>
    <p>Write a program that gives the factorial of the solution</p>
  `,
  testCases: [
    { input: [3],  expected: "Lessthan10"  },
    { input: [9], expected: "Lessthan10" },
    { input: [11], expected: "Greaterthan10" },
    { input: [20], expected: "Greaterthan10" }
  ],
  solution: function (n) {
    // ---- CODE STARTS HERE ----

    // ---- CODE ENDS HERE ----
  }
};