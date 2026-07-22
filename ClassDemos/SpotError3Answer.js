function calculateAverageScore(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) { // Prev: i <= scores.length
    total += Number(scores[i]);
  }

  let average = total / scores.length;
  return average;
}

let studentScores = ["80", "90", "100"];
console.log(calculateAverageScore(studentScores)); // 90
