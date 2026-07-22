function calculateTotal(prices) {
  let total = 0;

  // Find the 2 logical errors.
  // 1. Convert each price to a number before adding it.
  // 2. If the total is over $100, apply a 10% discount.

  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  if (total >= 100) {
    total = total - 10;
  }

  return total;
}

let cart = ["25", "30", "60"];
console.log(calculateTotal(cart));