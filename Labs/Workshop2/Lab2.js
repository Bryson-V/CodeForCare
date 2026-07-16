export const LabConfig = {
    type: "dom",
    
    title: "Lab 2: Coloring Boxess",

    description: `
        <h3>Problem Statement</h3>
        <p>
        Color and Resize following boxes:
        </p>
        <ul>
            <li>1. Color green</li>
            <li>2. Resize 20px</li>
            <li>3. Change Border Color light blue</li>
            <li>3. Change Border Color light blue</li>
        </ul> `,

    solution: function(doc) {
        const grid =
            doc.querySelector(".grid-container");
        if (!grid) {
            return "Missing .grid-container";
        }
        const cards =
            grid.querySelectorAll(".card");
        if (cards.length < 3) {
            return `Missing cards (found ${cards.length}/3)`;
        }
        for (const card of cards) {
            const heading =
                card.querySelector("h3");
            const button =
                card.querySelector("button");
            if (!heading || !button) {
                return "Cards must contain an h3 and a button";
            }
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