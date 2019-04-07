"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
/**
 * var declarations
 */
function f() {
    var a = 10;
    // tslint:disable-next-line: no-shadowed-variable
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g(); // returns '11'
function f_() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
f_(); // returns '2'
/**
 * Scoping rules
 * @param shouldInitialize
 */
function f1(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    //   return x;
}
f1(true); // returns '10'
f1(false); // returns 'undefined'
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
/**
 * Variable capturing quirks
 */
// for (var i = 0; i < 10; i++) {
//   // tslint:disable-next-line: only-arrow-functions
//   setTimeout(function() {
//     console.log(i);
//   }, 100 * i);
// }
/**
 * IIFE
 */
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
/**
 * let
 */
var hello = "Hello!";
/**
 * Block-scoping
 */
function f2(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b_1 = a + 1;
        return b_1;
    }
    // Error: 'b' doesn't exist here
    //   return b;
}
try {
    throw new Error("oh no!");
}
catch (e) {
    console.log("Oh well.");
}
// エラー: 'e'はここには存在しない
// console.log(e);
// a++; // illegal to use 'a' before it's declared;
// let a;
function foo() {
    // okay to capture 'a'
    //   return aa;
}
// illegal call 'foo' before 'a' is declared 非合法な宣言前の'foo'の呼び出し
// runtimes should throw an error here  ランタイムはここでエラーをスローするべき
foo();
// let aa;
/**
 * Re-declarations and Shadowing
 * @param x
 */
function f__(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
// let x = 10;
// let x = 20; // error: can't re-declare 'x' in the same scope</code></pre>
function f___(x) {
    //   let x = 100; // error: interferes with parameter declaration
}
function g_() {
    var x = 100;
    //   var x = 100; // error: can't have both declarations of 'x'
}
function f3(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f3(false, 0); // returns '0'
f3(true, 0); // returns '100'
function sumMatrixLet(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
/**
 * Block-scoped variable capturing
 */
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
}
var _loop_1 = function (i_3) {
    setTimeout(function () {
        console.log(i_3);
    }, 100 * i_3);
};
for (var i_3 = 0; i_3 < 10; i_3++) {
    _loop_1(i_3);
}
/**
 * const
 */
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
/**
 * Array destructuring
 */
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // 1を出力
console.log(second); // 2を出力
first = input[0];
second = input[1];
// swap variables
_a = [second, first], first = _a[0], second = _a[1];
function f_ArrayDestructuring(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f_ArrayDestructuring([1, 2]);
/**
 * ...
 */
var _b = [1, 2, 3, 4], firstD = _b[0], rest = _b.slice(1);
console.log(firstD); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var firstDD = [1, 2, 3, 4][0];
console.log(firstDD); // outputs 1
var _c = [1, 2, 3, 4], secondD = _c[1], fourthD = _c[3];
/**
 * Object destructuring
 */
var o = {
    aa: "foo",
    b: 12,
    c: "bar"
};
// let { aa, b } = o;
// ({ aa, b } = { aa: "baz", b: 101 });
// let { aa, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
/**
 * Property renaming
 */
var newName1 = o.aa, newName2 = o.b;
var newName11 = o.aa;
var newName22 = o.b;
var aa = o.aa, b = o.b;
/**
 * default value
 * @param wholeObject
 */
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function ff(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function fDefault(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
    // ...
}
fDefault();
function fDefault1(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
fDefault1({ a: "yes" }); // ok, default b = 0
fDefault1(); // ok, default to { a: "" }, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument
/**
 * spread
 */
var firstSpread = [1, 2];
var secondSpread = [3, 4];
var bothPlus = [0].concat(firstSpread, secondSpread, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
var defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" };
var search1 = __assign({ food: "rich" }, defaults);
/**
 * spread can remove methods
 */
var CSpread = /** @class */ (function () {
    function CSpread() {
        this.p = 12;
    }
    CSpread.prototype.m = function () { };
    return CSpread;
}());
var cSpread = new CSpread();
var clone = __assign({}, cSpread);
// tslint:disable-next-line: no-unused-expression
clone.p; // ok
// clone.m(); // error!
//# sourceMappingURL=variableDeclarations.js.map