/**
 * for..of statements
 */
let someArray = [1, "string", false];

for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}

/**
 * for..of vs. for..in statements
 */
let listFor = [4, 5, 6];
for (let i in listFor) {
  console.log(i); // "0", "1", "2",
}
for (let i of listFor) {
  console.log(i); // "4", "5", "6"
}

/**
 * set
 * if es6, this code becomes success.
 */
let pets: any = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
