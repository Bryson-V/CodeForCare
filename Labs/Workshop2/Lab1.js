/*
Don't need to Edit this file!

Work for this lab will be done through index1.html
What to do for this lab
    1. Create a grid containter
    2. Put 3 card elements in this container
    3. Have an h3 and button in each card

Hints:
Remember a grid is a type of container.  so use <div class="grid"></div>
Card elements are also a type of container, as they add a button.  So use <div class="card"></div>
Remember that button is not just <button>, but <button type="button">
*/

//Don't need to edit any of the below. 
export const LabConfig = {
    type: "dom",
    
    title: "Lab 1: The Grid & Box Challenge",

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