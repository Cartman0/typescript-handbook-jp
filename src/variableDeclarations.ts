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
function f1(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }

  //   return x;
}

f1(true); // returns '10'
f1(false); // returns 'undefined'

function sumMatrix(matrix: number[][]) {
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
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}

/**
 * let
 */
let hello = "Hello!";

/**
 * Block-scoping
 */
function f2(input: boolean) {
  let a = 100;

  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }

  // Error: 'b' doesn't exist here
  //   return b;
}

try {
  throw new Error("oh no!");
} catch (e) {
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
function f__(x: any) {
  var x;
  var x;

  if (true) {
    var x;
  }
}

// let x = 10;
// let x = 20; // error: can't re-declare 'x' in the same scope</code></pre>

function f___(x: any) {
  //   let x = 100; // error: interferes with parameter declaration
}

function g_() {
  let x = 100;
  //   var x = 100; // error: can't have both declarations of 'x'
}

function f3(condition: any, x: any) {
  if (condition) {
    let x = 100;
    return x;
  }

  return x;
}

f3(false, 0); // returns '0'
f3(true, 0); // returns '100'

function sumMatrixLet(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

/**
 * Block-scoped variable capturing
 */
function theCityThatAlwaysSleeps() {
  let getCity;

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return city;
    };
  }
}

for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}

/**
 * const
 */
const numLivesForCat = 9;

const kitty = {
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
let input = [1, 2];
let [first, second] = input;
console.log(first); // 1を出力
console.log(second); // 2を出力

first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first];

function f_ArrayDestructuring([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f_ArrayDestructuring([1, 2]);

/**
 * ...
 */
let [firstD, ...rest] = [1, 2, 3, 4];
console.log(firstD); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [firstDD] = [1, 2, 3, 4];
console.log(firstDD); // outputs 1

let [, secondD, , fourthD] = [1, 2, 3, 4];

/**
 * Object destructuring
 */
let o = {
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
let { aa: newName1, b: newName2 } = o;

let newName11 = o.aa;
let newName22 = o.b;

let { aa, b }: { aa: string; b: number } = o;

/**
 * default value
 * @param wholeObject
 */
function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

type C = { a: string; b?: number };
function ff({ a, b }: C): void {
  // ...
}

function fDefault({ a = "", b = 0 } = {}): void {
  // ...
}
fDefault();

function fDefault1({ a, b = 0 } = { a: "" }): void {
  // ...
}
fDefault1({ a: "yes" }); // ok, default b = 0
fDefault1(); // ok, default to { a: "" }, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument

/**
 * spread
 */
let firstSpread = [1, 2];
let secondSpread = [3, 4];
let bothPlus = [0, ...firstSpread, ...secondSpread, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

let defaults1 = { food: "spicy", price: "$$", ambiance: "noisy" };
let search1 = { food: "rich", ...defaults };

/**
 * spread can remove methods
 */
class CSpread {
  public p = 12;
  protected m() {}
}
let cSpread = new CSpread();
let clone = { ...cSpread };
// tslint:disable-next-line: no-unused-expression
clone.p; // ok
// clone.m(); // error!
