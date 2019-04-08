"use strict";
/**
 * for..of statements
 */
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
/**
 * for..of vs. for..in statements
 */
var listFor = [4, 5, 6];
for (var i_1 in listFor) {
    console.log(i_1); // "0", "1", "2",
}
for (var _a = 0, listFor_1 = listFor; _a < listFor_1.length; _a++) {
    var i_2 = listFor_1[_a];
    console.log(i_2); // "4", "5", "6"
}
/**
 * set
 * if es6, this code becomes success.
 */
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet_1 in pets) {
    console.log(pet_1); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet_2 = pets_1[_b];
    console.log(pet_2); // "Cat", "Dog", "Hamster"
}
//# sourceMappingURL=iteratorGenerator.js.map