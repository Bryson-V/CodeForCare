// RUN THE WEBSITE CODE WITH node server.js

const params = new URLSearchParams(window.location.search);
const workshopNum = params.get("workshop") || "1";
const labNum = params.get("lab") || "1";
const iframe = document.getElementById("preview-frame");
const title = document.getElementById("lab-title");
const description = document.getElementById("lab-description");
const results = document.getElementById("results");
const runBtn = document.getElementById("run-btn");

// Workshop 3 has its own API server, so do not load it through the static root server.
if (workshopNum === "3") {
    iframe.srcdoc = `
        <body style="font-family: system-ui, sans-serif; padding: 24px;">
            <h1>Run Workshop 3 Separately</h1>
            <p>Open <code>Labs/Workshop3</code> in a terminal.</p>
            <p>Run <code>node server.js</code>.</p>
            <p>Then open <code>http://localhost:3000/</code>.</p>
        </body>
    `;
} else {
    iframe.src = `/Labs/Workshop${workshopNum}/index${labNum}.html`;
}

// Load lab configuration
let LabConfig;

try {
    const labModule = await import(
        `/Labs/Workshop${workshopNum}/Lab${labNum}.js`
    );

    LabConfig = labModule.LabConfig;
} catch (error) {
    console.warn(error);
    title.textContent = `Workshop ${workshopNum}, Lab ${labNum}`;
    description.innerHTML = `
        <p>No automated lab config was found for this lab.</p>
    `;
    runBtn.disabled = true;
    results.textContent = "Open the live preview or run the matching server.js file directly.";
}

if (LabConfig) {
    const testCases = LabConfig.testCases || [];

    // Display lab info
    title.textContent = LabConfig.title;
    description.innerHTML = LabConfig.description;

    if (testCases.length === 0) {
        runBtn.disabled = true;
        results.textContent = "No automated test cases are set up for this lab.";
    } else {
        // Run tests
        runBtn.addEventListener("click", () => {
            let allPassed = true;
            let output = "";

            testCases.forEach((test, index) => {
                let result;

                try {
                    // DOM Lab
                    if (LabConfig.type === "dom") {
                        result = LabConfig.solution(
                            iframe.contentDocument
                        );
                    }
                    // Logic Lab
                    else {
                        result = LabConfig.solution(
                            ...test.input
                        );
                    }
                } catch (error) {
                    result = `Error: ${error.message}`;
                }

                const passed = result === test.expected;

                if (!passed) {
                    allPassed = false;
                }

                output += `
                    <div>
                        <strong>
                            Test ${index + 1}:
                            ${passed ? "✅ Pass" : "❌ Fail"}
                        </strong>
                        <br>
                        Input:
                        ${JSON.stringify(test.input)}
                        <br>
                        Expected:
                        ${test.expected}
                        <br>
                        Received:
                        ${result}
                    </div>
                    <hr>
                `;
            });

            results.innerHTML = `
                <h3>
                    ${allPassed 
                        ? "✅ All Tests Passed"
                        : "❌ Some Tests Failed"}
                </h3>
                ${output}
            `;
        });
    }
}
