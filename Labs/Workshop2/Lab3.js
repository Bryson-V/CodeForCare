/*
Edit: index3.html

What to do:
    1. Add button
    2. In button, add a reference to this link
Expected:
The button will either pop up the link in a new tab, or use miniplayer

Hint:
Easiest to visualize with _blank
Don't overthink this, the lab can be completed within less than 10 lines added.
*/

//Don't need to edit any of the below. 
export const LabConfig = {
    type: "dom",

    title: "Lab 3: URL links",

    description: `
        <h3>Problem Statement</h3>
        <p>
            Build an HTML structure that:
        </p>
        <ul>
            <li>
                Has a button linking to this video URL:
                <code>https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
            </li>
        </ul>
    `,

    solution: function (doc) {
        const REQUIRED_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

        // Find the link
        const link = doc.querySelector("a");

        if (!link) {
            return "Missing link";
        }

        // Check the URL
        if (link.href !== REQUIRED_URL) {
            return `Incorrect URL (found ${link.href})`;
        }

        // Check that the link contains a button
        const button = link.querySelector("button");

        if (!button) {
            return "Link must contain a button";
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