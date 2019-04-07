/**
 * Our First Interface
 * @param labelledObj
 */
declare function printLabel(labelledObj: {
    label: string;
}): void;
declare let myObj: {
    size: number;
    label: string;
};
/**
 * rewrite
 */
interface LabelledValue {
    label: string;
}
declare function printLabelRe(labelledObj: LabelledValue): void;
declare let myObjRe: {
    size: number;
    label: string;
};
/**
 * Optional Properties
 */
interface SquareConfig {
    color?: string;
    width?: number;
}
declare function createSquare(config: SquareConfig): {
    color: string;
    area: number;
};
declare let mySquare: {
    color: string;
    area: number;
};
interface SquareConfig {
    color?: string;
    width?: number;
}
declare function createSquare1(config: SquareConfig): {
    color: string;
    area: number;
};
declare let mySquare1: {
    color: string;
    area: number;
};
/**
 * ReadOnly
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
declare let p1: Point;
declare let a: number[];
declare let ro: ReadonlyArray<number>;
/**
 * Excess Property Checks
 */
interface SquareConfig {
    color?: string;
    width?: number;
}
declare function createSquare2(config: SquareConfig): {
    color: string;
    area: number;
};
declare let mySquare4: {
    color: string;
    area: number;
};
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
declare let squareOptions: {
    colour: string;
    width: number;
};
declare let mySquare5: {
    color: string;
    area: number;
};
interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare let mySearch: SearchFunc;
declare let mySearch1: SearchFunc;
/**
 * index
 */
interface StringArray {
    [index: number]: string;
}
declare let myArray: StringArray;
declare let myStr: string;
declare let myArray1: StringArray;
declare let myStr1: string;
/**
 *
 */
declare class Animal {
    protected name: string | undefined;
}
declare class Dog extends Animal {
    protected breed: string | undefined;
}
interface NotOkay {
    [x: string]: Dog;
}
interface NumberDictionary {
    [index: string]: number;
    length: number;
}
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
declare let myArray2: ReadonlyStringArray;
/**
 * ClassTypes
 */
/**
 * Difference between the static and instance sides of classes
 * error
 */
interface ClockInterface {
    tick(): void;
}
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
declare function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface;
declare class DigitalClock implements ClockInterface {
    tick(): void;
}
declare class AnalogClock implements ClockInterface {
    constructor(h: number, m: number);
    tick(): void;
}
declare let digital: ClockInterface;
declare let analog: ClockInterface;
/**
 * extending
 */
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
declare let square: Square;
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
declare let square1: Square;
/**
 * Hybrid Types
 */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
declare function getCounter(): Counter;
declare let co: Counter;
/**
 * Interfaces Extending Classes
 */
declare class Control {
    private state;
}
interface SelectableControl extends Control {
    select(): void;
}
declare class Button extends Control implements SelectableControl {
    select(): void;
}
declare class TextBox extends Control {
    select(): void;
}
declare class Location1 {
}
