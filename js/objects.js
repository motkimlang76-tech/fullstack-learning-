const food = {
  name: "sushi",
  price: 5,
  isSpicy: false,
};

console.log(food.name);
console.log(food.price);
console.log(food.isSpicy);

food.price = 6;
food.country = "Japan";

console.log(food);

const person = {
  name: "kittykim",
  age: 20,
  favoriteFood: "Noodle",
  isStudent: true,
};
console.log(person.name);
console.log(person.age);
console.log(person.favoriteFood);
console.log(person.isStudent);
person.bf = "Bong Rohan";
console.log(person);
//Example Create an array called foods with 3 objects. Each object should have:
const foods = [
  {
    name: "kimchi",
    price: 2,
    isSpicy: true,
  },
  {
    name: "mochi",
    price: 1.5,
    isSpicy: false,
  },
  {
    name: "Hotpot",
    price: 3,
    isSpicy: true,
  },
];
for (let i = 0; i < foods.length; i++) {
  if (foods[i].isSpicy) {
    console.log(foods[i].name + " is spicy");
  }
}
