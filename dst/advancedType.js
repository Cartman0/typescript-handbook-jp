"use strict";
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var PersonI = /** @class */ (function () {
    function PersonI(name) {
        this.name = name;
    }
    return PersonI;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm " + name + ".");
    };
    return ConsoleLogger;
}());
var jim = extend(new PersonI("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
/**
 *
 */
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
padLeft("Hello world", 4); // returns "    Hello world"
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft1(value, padding) {
    // ...
}
function getSmallPet() {
    // ...
    var f;
    return f;
}
var pet = getSmallPet();
pet.layEggs(); // OK
// pet.swim(); // エラー
/**
 * Type Guards and Differentiating Types
 */
var pet1 = getSmallPet();
// Each of these property accesses will cause an error
// if (pet1.swim) {
//     pet1.swim();
// }
// else if (pet1.fly) {
//     pet1.fly();
// }
var pet2 = getSmallPet();
if (pet2.swim) {
    pet2.swim();
}
else {
    pet2.fly();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
/**
 * typeof type guards
 * @param value
 * @param padding
 */
function padLeftGuards(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder("  ");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}
function foo1(x) {
    // if (x !== 1 || x !== 2) {
    //   //         ~~~~~~~
    //   // Operator '!==' cannot be applied to types '1' and '2'.
    // }
}
//# sourceMappingURL=advancedType.js.map