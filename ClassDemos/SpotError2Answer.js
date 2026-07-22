function calculateTotal(prices) {
  let total = 0;

  // Convert each price to a number before adding it.
  for (let i = 0; i < prices.length; i++) {
    total += Number(prices[i]); // Cast to number
  }

  // Apply a 10% discount if the total is over $100.
  if (total > 100) {
    total = total * 0.9; // Discount error
    // or: total = total - (total * 0.10);
  }

  return total;
}

let cart = ["25", "30", "60"];
console.log(calculateTotal(cart)); // 103.5