function greeting(name) {
  console.log("Hello!" + name);
}
greeting("Bong Rohan");

function add(a, b) {
  return a + b;
}
const result = add(5, 5);
console.log(result);
function showName(name) {
  console.log(name);
}
showName("Mot kimlang");
showName("Sok Dara");
showName("Chantha");

function showProduct(productName, price) {
  console.log("Product:", productName);
  console.log("Price: $", price);
}
showProduct("T-Shirt", 25);
showProduct("Shose", 60);

function calculateTotal(price, quantity) {
  let total = price * quantity;
  console.log(total);
}
calculateTotal(25, 4);
calculateTotal(50, 2);

//return
function add(a, b) {
  return a + b;
}

const result = add(5, 3);

console.log(result);
