declare enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
declare enum ResponseNY {
    No = 0,
    Yes = 1
}
declare function respond(recipient: string, message: ResponseNY): void;
/**
 * String enums
 */
declare enum DirectionStr {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
/**
 * Heterogeneous enums
 */
declare enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
}
declare enum E1 {
    X = 0,
    Y = 1,
    Z = 2
}
declare enum E2 {
    A = 1,
    B = 2,
    C = 3
}
declare enum FileAccess {
    None = 0,
    Read = 2,
    Write = 4,
    ReadWrite = 6,
    G
}
declare enum ShapeKind {
    Circle = 0,
    Square = 1
}
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
declare enum E {
    Foo = 0,
    Bar = 1
}
/**
 * Enums at runtime
 */
declare enum ERun {
    X = 0,
    Y = 1,
    Z = 2
}
declare function fEnumRun(obj: {
    X: number;
}): number;
declare const enum Enum {
    A = 1,
    B = 2
}
/**
 *
 */
declare const enum Directions {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare let directions: Directions[];
/**
 * Ambient Enum
 */
declare enum EnumAmb {
    A = 1,
    B,
    C = 2
}
