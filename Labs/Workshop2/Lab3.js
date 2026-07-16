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