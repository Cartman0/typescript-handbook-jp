enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

enum ResponseNY {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: ResponseNY): void {
  // ...
}

respond("Princess Caroline", ResponseNY.Yes);

/**
 * String enums
 */
enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

/**
 * Heterogeneous enums
 */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}

// All enum members in 'E1' and 'E2' are constant.
enum E1 {
  X,
  Y,
  Z
}

enum E2 {
  A = 1,
  B,
  C
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write, // 010 | 100 = 110
  // computed member
  G = "123".length
}

enum ShapeKind {
  Circle,
  Square
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

// let circ: Circle = {
//   kind: ShapeKind.Square, //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100
// };

enum E {
  Foo,
  Bar
}

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
enum ERun {
  X,
  Y,
  Z
}

function fEnumRun(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
fEnumRun(ERun);

const enum Enum {
  A = 1,
  B = A * 2
}

/**
 *
 */
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];

/**
 * Ambient Enum
 */
declare enum EnumAmb {
  A = 1,
  B,
  C = 2
}
console.log(EnumAmb.A);
