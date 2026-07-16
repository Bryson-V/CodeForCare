/*
Lab 2: Factorials
*/

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

    // ---- CODE STARTS HERE ----

    let ret = 1;

    for (let i = 1; i <= n; i++) {
      ret *= i;
    }

    return ret;

    // ---- CODE ENDS HERE ----
  }
};