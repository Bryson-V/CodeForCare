/*
Lab 1: Ticket Pricing (If/Else Logic)

Drag and drop this lab to the src file in the template CodeForCare
folder to run test cases.

Only edit the code where it says code start here and end here,
do not change anything else.
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
  solution: function (age) {
    // ---- CODE STARTS HERE ----
    
    if (age <= 5) {
      return 0;
    } 
    else if (age <= 17) {
      return 10;
    } 
    else if (age <= 64) {
      return 20;
    } 
    else {
      return 12;
    }
    // ---- CODE ENDS HERE ----
  }
};