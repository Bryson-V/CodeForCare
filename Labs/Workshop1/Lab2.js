import { json } from "express";

/*
Lab 1: Ticket Pricing (For Loops)

Drag and drop this lab to the src file in the template CodeForCare
folder to run test cases.

Only edit the code where it says code start here and end here,
do not change anything else.
*/
export const LabConfig = {
  title: "Lab 2: Factorials",
  description: `
    <h3>Problem Statement</h3>
    <p>Write a program that gives the factorial of the input</p>
  `,
  testCases: [
    { input: [3], expected: 6  },
    { input: [4], expected: 24 },
    { input: [10], expected: 3628800 },
    { input: [0], expected: 1 }
  ],
  solution: function (age) {
    // ---- CODE STARTS HERE ----
    let ret =1;
    for(let i=1; i<j; i++ ){
      ret*=i;
    }
    return ret;
    // ---- CODE ENDS HERE ----
  }
};