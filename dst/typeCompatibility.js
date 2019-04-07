"use strict";
var PersonC = /** @class */ (function () {
    function PersonC() {
    }
    return PersonC;
}());
var p;
// OK, because of structural typing
p = new PersonC();
/**
 * Starting Out
 */
var xStarting;
// y's inferred type is { name: string; location: string; }
var y = { name: "Alice", location: "Seattle" };
xStarting = y;
function greet(n) {
    console.log("Hello, " + n.name);
}
greet(y); // OK
/**
 *  Comparing two functions
 */
var xComp = function (a) { return 0; };
var yComp = function (b, s) { return 0; };
yComp = xComp; // OK
// xComp = yComp; // Error
/**
 *
 */
var items = [1, 2, 3];
// Don't force these extra parameters
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
// tslint:disable-next-line: arrow-parens
items.forEach(function (item) { return console.log(item); });
/**
 * Function Parameter Bivariance
 */
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
// Unsound, but useful and common
// 脆弱ですが、便利で一般的です
// listenEvent(EventType.Mouse, (e: MouseEvent1) => console.log(e.x + "," + e.y));
// Undesirable alternatives in presence of soundness
//// 堅牢ですが、好まれません
listenEvent(EventType.Mouse, function (e) {
    return console.log(e.x + "," + e.y);
});
listenEvent(EventType.Mouse, ((function (e) { return console.log(e.x + "," + e.y); })));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
//# sourceMappingURL=typeCompatibility.js.map