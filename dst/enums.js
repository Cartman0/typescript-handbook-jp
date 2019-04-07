"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var ResponseNY;
(function (ResponseNY) {
    ResponseNY[ResponseNY["No"] = 0] = "No";
    ResponseNY[ResponseNY["Yes"] = 1] = "Yes";
})(ResponseNY || (ResponseNY = {}));
function respond(recipient, message) {
    // ...
}
respond("Princess Caroline", ResponseNY.Yes);
/**
 * String enums
 */
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
/**
 * Heterogeneous enums
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
// All enum members in 'E1' and 'E2' are constant.
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
// let circ: Circle = {
//   kind: ShapeKind.Square, //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100
// };
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//     //             ~~~~~~~~~~~
//     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     // エラー！演算子 '！=='は、タイプ 'E.Foo'および 'E.Bar'には適用できません。
//   }
// }
/**
 * Enums at runtime
 */
var ERun;
(function (ERun) {
    ERun[ERun["X"] = 0] = "X";
    ERun[ERun["Y"] = 1] = "Y";
    ERun[ERun["Z"] = 2] = "Z";
})(ERun || (ERun = {}));
function fEnumRun(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
fEnumRun(ERun);
var directions = [
    0 /* Up */,
    1 /* Down */,
    2 /* Left */,
    3 /* Right */
];
console.log(EnumAmb.A);
//# sourceMappingURL=enums.js.map