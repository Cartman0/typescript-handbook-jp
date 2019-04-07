let sym1 = Symbol();

let sym2 = Symbol("key"); // optional string key

let sym3 = Symbol("key");
let sym4 = Symbol("key");

sym3 === sym4; // false, symbols are unique

/**
 * sym
 */

const sym = Symbol();

let obj = {
  [sym]: "value"
};

console.log(obj[sym]); // "value"

/**
 *
 */
const getClassNameSymbol = Symbol();

class CSym {
  [getClassNameSymbol]() {
    return "C";
  }
}

let cSym = new CSym();
let className = cSym[getClassNameSymbol](); // "C"
