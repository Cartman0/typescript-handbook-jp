"use strict";
/**
 * Boolean
 */
var isDone = false;
/**
 * Number
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/**
 * string
 */
var color = "blue";
color = "red";
/**
 * template string
 */
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month.";
/**
 * Array
 */
var list = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
/**
 * Tupple
 */
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// tslint:disable-next-line: no-console
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
/**
 * tuple is fixed length.
 * following codes is error.
 */
// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
/**
 * enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
var colorName = Color3[2];
console.log(colorName);
/**
 * Any
 */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.</code></pre>
var listAny = [1, true, "free"];
listAny[1] = 100;
/**
 * void
 */
function warnUser() {
    console.log("This is my warning message");
}
// tslint:disable-next-line: no-unnecessary-initializer
var unusable = undefined;
/**
 * Null and Undefined
 */
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
/**
 * Never
 */
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    // tslint:disable-next-line: no-empty
    while (true) { }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
/**
 * Type assertions
 */
var someValue = "this is a string";
var strLength = someValue.length;
var someValueAs = "this is a string";
var strLengthAs = someValueAs.length;
//# sourceMappingURL=basic.js.map