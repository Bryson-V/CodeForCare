function calculateDiscount(userAge, cartTotal) {
  let discount = 0;

  // Find the 2 errors in the code
  // Rule 1: Seniors (65+) get $20 off
  // Rule 2: Students (under 18) get $10 off

  if (userAge = 65) {
    discount = 20;
  } else if (userAge < 18) {
    discount = 10;
  }

  const finalPrice = cartTotal - discount;
  return "Your total is: $" + finalprice;
}

let myTotal = calculateDiscount(70, 100);
console.log(myTotal);