"use strict";
var _a, _b;
var sym1 = Symbol();
var sym2 = Symbol("key"); // optional string key
var sym3 = Symbol("key");
var sym4 = Symbol("key");
sym3 === sym4; // false, symbols are unique
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); // "value"
/**
 *
 */
var symKey = Symbol();
var objSym = (_b = {},
    _b[symKey] = "value",
    _b);
console.log(objSym[symKey]); // "value"
//# sourceMappingURL=symbols.js.map