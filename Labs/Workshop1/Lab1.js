/*
Lab 1: Ticket Pricing (If/Else Logic)

Drag and drop this lab to the src file in the template CodeForCare
folder to run test cases.

Only edit the code where it says code start here and end here,
do not change anything else.
*/
import readline from "node:readline"

export const LabConfig = {
  title: "Lab 1: Amusement Park Ticket Pricing",
  description: `
    <h3>Problem Statement</h3>
    <p>Write a program that calculates ticket prices based on age...</p>
  `,
  testCases: [
    { input: [3], expected: 0 },
    { input: [12], expected: 10 },
    { input: [45], expected: 20 },
    { input: [65], expected: 12 }
  ],
  solution: function (age) {
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readFromTerminal.question("Enter age: ", (input) => {
      const age = Number(input);
    })
    // ---- CODE STARTS HERE ----
    
    /*

    For now work with the test cases:
    If age is between 0 and 3, cost of ticket will be $0
    use the other test cases to help you determine the
    cost of the tickets

    EX:
    { input: [3], expected: 0 },
    { input: [12], expected: 10 },
    { input: [45], expected: 20 },
    { input: [65], expected: 12 }

    age: 0-3
    cost of ticket: $0

    now try and use an if else to try and calculate the cost of
    the tickets

    */

    // ---- CODE ENDS HERE ----
    rl.solution(); // If you want to check your solution include this line
  }
};