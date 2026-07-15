export const LabConfig = {
  title: "Lab 2: The Grid & Box Challenge",
  description: "Build an HTML structure with a <code>.grid-container</code> holding at least 3 <code>.card</code> components.",
  
  // The solution function queries the live DOM of the webpage
  solution: () => {
    const grid = document.querySelector('.grid-container');
    if (!grid) {
      return "Missing .grid-container";
    }
    
    const cards = grid.querySelectorAll('.card');
    if (cards.length < 3) {
      return `Missing cards (found ${cards.length}/3)`;
    }

    // Optional: Check if cards have headings and buttons
    let complete = true;
    cards.forEach((card) => {
      const heading = card.querySelector('h3');
      const button = card.querySelector('button');
      if (!heading || !button) {
        complete = false;
      }
    });

    if (!complete) {
      return "Cards must contain an h3 and a button";
    }

    return "Pass";
  },

  testCases: [
    {
      input: [], // No input arguments needed
      expected: "Pass"
    }
  ]
};