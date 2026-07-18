const colors = ["red", "blue", "green"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

colors.push("yellow");
console.log(colors);

colors[0] = "purple";
console.log(colors);

console.log(colors.length);
//create an array of 5 favorite foods, log the first item, log the last item,
// add one new food, and print the final array.
const foods = ["coffee", "sushi", "fish", "chicken", "mochi"];
console.log(foods[0]);
console.log(foods[4]);
foods.push("kimchi");
console.log(foods.length);
