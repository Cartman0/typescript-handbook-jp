"use strict";
var _a;
var sym1 = Symbol();
var sym2 = Symbol("key"); // optional string key
var sym3 = Symbol("key");
var sym4 = Symbol("key");
sym3 === sym4; // false, symbols are unique
/**
 * sym
 */
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); // "value"
/**
 *
 */
var getClassNameSymbol = Symbol();
var CSym = /** @class */ (function () {
    function CSym() {
    }
    CSym.prototype[getClassNameSymbol] = function () {
        return "C";
    };
    return CSym;
}());
var cSym = new CSym();
var className = cSym[getClassNameSymbol](); // "C"
//# sourceMappingURL=symbols.js.map