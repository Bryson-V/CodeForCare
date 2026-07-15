import { LabConfig } from './Lab1.js';

const lab = LabConfig;
const titleEl = document.getElementById("lab-title");
const descEl = document.getElementById("lab-description");
const runBtn = document.getElementById("run-btn");
const resultsContainer = document.getElementById("results");

if (!lab) {
  if (titleEl) titleEl.innerText = "Error: Lab1.js config could not be resolved.";
} else {
  // Populate UI
  if (titleEl) titleEl.innerText = lab.title;
  if (descEl) descEl.innerHTML = lab.description;

  // Run test cases logic
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      if (!resultsContainer) return;
      resultsContainer.innerHTML = ""; 
      
      let passedAll = true;

      lab.testCases.forEach((test, index) => {
        try {
          const actual = lab.solution(...test.input);
          const passed = actual === test.expected;

          const resultItem = document.createElement("div");
          resultItem.style.padding = "8px";
          resultItem.style.margin = "4px 0";
          resultItem.style.backgroundColor = passed ? "#d4edda" : "#f8d7da";
          resultItem.style.color = passed ? "#155724" : "#721c24";
          
          resultItem.innerHTML = `
            <strong>Test ${index + 1}:</strong> Input: (${test.input.join(", ")}) | 
            Expected: <code>${test.expected}</code> | Got: <code>${actual}</code> 
            — <strong>${passed ? "PASSED" : "FAILED"}</strong>
          `;
          resultsContainer.appendChild(resultItem);

          if (!passed) passedAll = false;
        } catch (error) {
          passedAll = false;
          const errorItem = document.createElement("div");
          errorItem.style.backgroundColor = "#f8d7da";
          errorItem.innerHTML = `<strong>Test ${index + 1}:</strong> Error: ${error.message}`;
          resultsContainer.appendChild(errorItem);
        }
      });

      const summary = document.createElement("h3");
      summary.innerText = passedAll ? "🎉 All Tests Passed!" : "❌ Some test cases failed.";
      resultsContainer.appendChild(summary);
    });
  }
}