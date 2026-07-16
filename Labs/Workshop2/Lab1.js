export const LabConfig = {
    type: "dom",
    
    title: "Lab 2: The Grid & Box Challenge",

    description: `
        <h3>Problem Statement</h3>
        <p>
        Build an HTML structure containing:
        </p>
        <ul>
            <li>A .grid-container</li>
            <li>At least 3 .card elements</li>
            <li>Each card needs an h3 and button</li>
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