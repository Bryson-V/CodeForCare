function calculateDiscount(userAge, cartTotal) {
  let discount = 0;

  if (userAge >= 65) { // Error in logic
    discount = 20;
  } else if (userAge < 18) {
    discount = 10;
  }

  const finalPrice = cartTotal - discount;
  return "Your total is: $" + finalPrice; // Syntax error
}

let myTotal = calculateDiscount(70, 100);
console.log(myTotal); // Your total is: $80