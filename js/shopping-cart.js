let productName = "T-Shirt";
let price = 25;
let quantity = 4;
let money = 50;

console.log("Product:", productName);

let total = price * quantity;
console.log("Total: $", total);

let discount = 20;
let discountAmount = 0;

if (total >= 100) {
  discountAmount = total * (discount / 100);
  console.log("Discount: $", discountAmount);
} else {
  console.log("No discount");
}

let finalPrice = total - discountAmount;
console.log("Final price: $", finalPrice);

if (money >= finalPrice) {
  console.log("You can buy this product");

  let balance = money - finalPrice;
  console.log("Balance: $", balance);
} else {
  console.log("Not enough money");
}
