"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
function identityAny(arg) {
    return arg;
}
function identityGene(arg) {
    return arg;
}
var output = identityGene("myString"); // type of output will be 'string'
var output1 = identityGene("myString"); // type of output will be 'string'
/**
 * Working with Generic Type Variables
 * @param arg
 */
function loggingIdentity(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentityArr(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentityArr1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
/**
 * Generic Types
 * @param arg
 */
function identityType(arg) {
    return arg;
}
var myIdentity = identityType;
function identityType1(arg) {
    return arg;
}
var myIdentityType1 = identityType1;
function identityType2(arg) {
    return arg;
}
var myIdentityType2 = identityType2;
function identityType3(arg) {
    return arg;
}
var myIdentityType3 = identityType3;
function identityType4(arg) {
    return arg;
}
var myIdentityType4 = identityType4;
/**
 * Generic Classes
 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
/**
 * Generic Constraints
 * @param arg
 */
function loggingIdentityCon(arg) {
    //   console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentityCon1(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// loggingIdentityCon1(3);  // Error, number doesn't have a .length property
loggingIdentityCon1({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var xCon = { a: 1, b: 2, c: 3, d: 4 };
getProperty(xCon, "a"); // okay
// getProperty(xCon, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
/**
 * Using Class Types in Generics
 * @param c
 */
function createI(c) {
    return new c();
}
/**
 *
 */
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var AnimalG = /** @class */ (function () {
    function AnimalG() {
    }
    return AnimalG;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(AnimalG));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(AnimalG));
function findKeeper(a) {
    return a.prototype.keeper;
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
//# sourceMappingURL=generics.js.map