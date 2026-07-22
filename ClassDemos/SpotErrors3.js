function calculateAverageScore(scores) {
  let total = 0;

  // Find the 2 errors in the code
  // Rule 1: Convert each score to a number before adding it.
  // Rule 2: Return the average score.

  for (let i = 0; i <= scores.length; i++) {
    total += Number(scores[i]);
  }

  let average = total / scores.length;
  return average;
}

let studentScores = ["80", "90", "100"];
console.log(calculateAverageScore(studentScores)); // What's the result?