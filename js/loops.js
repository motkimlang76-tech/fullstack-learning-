const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const brand = ["kitty", "rohan", "baby", "kim"];
// for (let i = 0; i < brand.length; i++) {
// console.log(brand[i]);
//}
for (const name of brand) {
  console.log(name);
}
for (let i = 0; i < brand.length; i++) {
  console.log("Hello!", brand[i]);
  //  console.log("Hello! " + brand[i]);
  // console.log(`Hello! ${brand[i]}`);
}
