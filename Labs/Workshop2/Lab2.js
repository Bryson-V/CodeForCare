export const LabConfig = {
    type: "dom",

    title: "Lab 2: Coloring Boxes",

    description: `
        <h3>Problem Statement</h3>

        <p>
            Modify the highlighted box so that it matches the others.
        </p>

        <ul>
            <li>Move the top left box 46px to the left.</li>
            <li>Resize the top right to 40px tall.</li>
            <li>Change the bottom left color to 0, 0, 0.</li>
            <li>Rotate the bottom right  90 degrees.</li>
        </ul>
    `,

    solution(doc) {

        const targetBL = doc.querySelector("#targetBottomLeft");
        const styleBL = getComputedStyle(targetBL);
        if (styleBL.backgroundColor !== "rgb(0, 0, 0)") {
            return "Bottom left target box should be Black";
        }
        const targetTR = doc.querySelector("#targetTopRight");
        const styleTR = getComputedStyle(targetTR);
        if (styleTR.height !== "40px") {
            return "Top right target box should be 40px tall";
        }
        const targetTL = doc.querySelector("#targetTopLeft");
        const styleTL = getComputedStyle(targetTL);
        if (styleTL.left !== "46px") {
            return "Top left target box should be 46px to the left";
        }

        const targetBR = doc.querySelector("#targetBottomRight");
        const styleBR = getComputedStyle(targetBR);
        const matrix = styleBR.transform;

        if (
            matrix !== "matrix(0, 1, -1, 0, 0, 0)" &&
            matrix !== "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)"
        ) {
            return "Bottom Right target box should be rotated 90 degrees";
        }
        
        return "Pass";
    },

    testCases: [
        {
            input: [],
            expected: "Pass"
        }
    ]
};