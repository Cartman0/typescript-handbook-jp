/**
 * Our First Interface
 * @param labelledObj
 */

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/**
 * rewrite
 */
interface LabelledValue {
  label: string;
}

function printLabelRe(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObjRe = { size: 10, label: "Size 10 Object" };
printLabel(myObjRe);

/**
 * Optional Properties
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare1(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'collor' does not exist on type 'SquareConfig'
    // newSquare.color = config.collor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare1 = createSquare({ color: "black" });

/**
 * ReadOnly
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

/**
 * readOnly
 */

a = ro as number[];

/**
 * Excess Property Checks
 */
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare2(config: SquareConfig): { color: string; area: number } {
  // ...
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
// let mySquare2 = createSquare2({ colour: "red", width: 100 });

// error: 'colour' not expected in type 'SquareConfig'
// let mySquare3 = createSquare({ colour: "red", width: 100 });

let mySquare4 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 };
let mySquare5 = createSquare(squareOptions);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

let mySearch1: SearchFunc;
mySearch1 = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};

/**
 * index
 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// interface StringArray {
//     [index: number]: string;
// }

let myArray1: StringArray;
myArray1 = ["Bob", "Fred"];

let myStr1: string = myArray1[0];

/**
 *
 */
class Animal {
  protected name: string | undefined;
}

// tslint:disable-next-line: max-classes-per-file
class Dog extends Animal {
  protected breed: string | undefined;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  // [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  // name: string;      // error, the type of 'name' is not a subtype of the indexer
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

/**
 * ClassTypes
 */
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime!: Date;
//   constructor(h: number, m: number) {}
// }

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime!: Date; // This is the "definite assignment assertion"
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {}
// }

/**
 * Difference between the static and instance sides of classes
 * error
 */
// interface ClockConstructor {
//   new (hour: number, minute: number): void;
// }
// class Clock1 implements ClockConstructor {
//   currentTime!: Date;
//   constructor(h: number, m: number) {}
// }

interface ClockInterface {
  tick(): void;
}
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  //   constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/**
 * extending
 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

//
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square1 = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * Hybrid Types
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let co = getCounter();
co(10);
co.reset();
co.interval = 5.0;

/**
 * Interfaces Extending Classes
 */
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//   select() {}
// }

class Location1 {}
