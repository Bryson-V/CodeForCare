const params = new URLSearchParams(window.location.search);
const workshopNum = params.get("workshop") || "1";

const iframe = document.getElementById("preview-frame");
const title = document.getElementById("lab-title");
const description = document.getElementById("lab-description");
const results = document.getElementById("results");
const runBtn = document.getElementById("run-btn");


// Load student preview
iframe.src = `/Labs/Workshop${workshopNum}/index.html`;


// Load lab configuration
const labModule = await import(
    `/Labs/Workshop${workshopNum}/Lab${workshopNum}.js`
);

const LabConfig = labModule.LabConfig;


// Display lab info
title.textContent = LabConfig.title;
description.innerHTML = LabConfig.description;


// Run tests
runBtn.addEventListener("click", () => {

    let allPassed = true;
    let output = "";


    LabConfig.testCases.forEach((test, index) => {

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