/*
Lab 3: Try and catch

The goal of this lab is to learn how to use try/catch to handle errors
when working with user input.

A program can encounter unexpected problems when converting data.
For example, converting a word into a number will not produce a valid result.

How try/catch works:
Think of "try" as a batter swinging their bat, this is equivalent
to you trying to run some code.
If an error happens (like the batter misses the ball), JavaScript
throws an error instead of crashing your whole program.
The "catch" portion acts like a referee by catching the mistake and
deciding what to do next

What the code needs to do:
1. Convert the input from a string into a number.
2. Check if the conversion was successful.
3. Multiply the number by 2.
4. Return the result.

EX:
Input: "5"
Result: 10

If the input cannot be converted into a valid number, the program should
throw an error and use catch to handle it.

TL;DR
1. Use try/catch to handle possible errors.
2. Convert the user input into a number using a cast: Number()
3. Check if the converted value is a valid number.
4. If the input is valid (use isNan(variable_name)), multiply it by 2 and return the result.
5. If the input is invalid, throw an error and return "Invalid input".
*/

import fs from "node:fs";

export const LabConfig = {
  title: "Lab 3: try/catch",
  description: `
    <h3>Problem Statement</h3>
    <p>Write a program that returns if it is less than 10 OR greater than 10</p>
  `,
  testCases: [
    { input: ["20"], expected: 40 },
    { input: ["0"], expected: 0 },
    { input: ["-5"], expected: -10 },
    { input: ["hello"], expected: "Invalid input" },
    { input: ["abc123"], expected: "Invalid input" },
  ],
  solution: function (n) {//Use input n
    //Hints:
    /*
    use try to read input
    catch if something other than a number was inputted.
    IMPORTANT: Remember to cast input(string) into a number(int)
    */ 
    // ---- CODE STARTS HERE ----
    
    // ---- CODE ENDS HERE ----
  }
};

{
  const buffer = Buffer.alloc(100);
  const bytesRead = fs.readSync(0, buffer, 0, 100, null);
  const textTyped = buffer.toString('utf8', 0, bytesRead).trim();
  const n = textTyped;

  console.log(LabConfig.solution(n));
}