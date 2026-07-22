/*
  Lab 1: Ticket Pricing (If/Else Logic)

  ONLY edit the code where it says code start here and end here,
  do not change anything else.

  For now work with the test cases:
  If age is between 0 and 3, cost of ticket will be $0
  use the other test cases to help you determine the
  cost of the tickets

  EX:
  If the age is between 0 and 5, the cost of ticket will be $0,
  if the age is between 5 and 15, the cost of the ticket will be $10,
  if the age is between 15 and 50, the cost of the ticket will be $20,
  if the age is greater than 50, the cost of the ticket will be $12.

  Now try to see if you translate this to code and calculate the
  remaining ticket prices
*/

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
  solution: function (age) { // Use age as input.

    // General idea is that if you want to use input given to function, 
    // you can use the argument in function declaration. 
    //Ex: if working with input being 3, can use age instead.  the variable age will contain 3 already.

    // ---- CODE STARTS HERE ----
    
    // ---- CODE ENDS HERE ----
  }
};
