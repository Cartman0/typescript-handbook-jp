/**
 * Boolean
 */
let isDone: boolean = false;

/**
 * Number
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/**
 * string
 */
let color: string = "blue";
color = "red";

/**
 * template string
 */
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
//     "I'll be " + (age + 1) + " years old next month.";

/**
 * Array
 */
let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

/**
 * Tupple
 */
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// tslint:disable-next-line: no-console
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

/**
 * tuple is fixed length.
 * following codes is error.
 */
// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'

/**
 * enum
 */
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

enum Color1 {
  Red = 1,
  Green,
  Blue
}
let c1: Color1 = Color1.Green;

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c2: Color2 = Color2.Green;

enum Color3 {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color3[2];
console.log(colorName);

/**
 * Any
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.</code></pre>

let listAny: any[] = [1, true, "free"];
listAny[1] = 100;

/**
 * void
 */
function warnUser(): void {
  console.log("This is my warning message");
}

// tslint:disable-next-line: no-unnecessary-initializer
let unusable: void = undefined;

/**
 * Null and Undefined
 */
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**
 * Never
 */
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  // tslint:disable-next-line: no-empty
  while (true) {}
}

/**
 * Object
 */
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

/**
 * Type assertions
 */
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValueAs: any = "this is a string";

let strLengthAs: number = (someValueAs as string).length;
