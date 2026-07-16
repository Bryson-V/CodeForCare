/*
Lab 1: Ticket Pricing (try-catch)

Drag and drop this lab to the src file in the template CodeForCare
folder to run test cases.

Only edit the code where it says code start here and end here,
do not change anything else.
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
    try{
      if(n>10)
        throw new Error("number greater than 10");
      return "Lessthan10";
    }
    catch (e){
        console.log(e);
        return "Greaterthan10";
    } 

    // ---- CODE ENDS HERE ----
  }
};