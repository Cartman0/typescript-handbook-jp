function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (<Second>result)[prop] = second[prop];
    }
  }
  return <First & Second>result;
}

class PersonI {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

const jim = extend(new PersonI("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);

/**
 *
 */

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft1(value: string, padding: string | number) {
  // ...
}

// let indentedString = padLeft1("Hello world", true); // errors during compilation

interface Bird {
  fly(): void;
  layEggs(): number;
}
interface Fish {
  swim(): void;
  layEggs(): number;
}
function getSmallPet(): Fish | Bird {
  // ...
  let f!: Fish;
  return f;
}

let pet = getSmallPet();
pet.layEggs(); // OK
// pet.swim(); // エラー

/**
 * Type Guards and Differentiating Types
 */
let pet1 = getSmallPet();

// Each of these property accesses will cause an error
// if (pet1.swim) {
//     pet1.swim();
// }
// else if (pet1.fly) {
//     pet1.fly();
// }

let pet2 = getSmallPet();

if ((<Fish>pet2).swim) {
  (<Fish>pet2).swim();
} else {
  (<Bird>pet2).fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**
 * typeof type guards
 * @param value
 * @param padding
 */
function padLeftGuards(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

/**
 * instanceof type guards
 *
 */
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5
    ? new SpaceRepeatingPadder(4)
    : new StringPadder("  ");
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // type narrowed to 'StringPadder'
}

function foo1(x: number) {
  // if (x !== 1 || x !== 2) {
  //   //         ~~~~~~~
  //   // Operator '!==' cannot be applied to types '1' and '2'.
  // }
}
