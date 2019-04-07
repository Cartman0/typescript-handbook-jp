function identity(arg: number): number {
  return arg;
}

function identityAny(arg: any): any {
  return arg;
}

function identityGene<T>(arg: T): T {
  return arg;
}

let output = identityGene<string>("myString"); // type of output will be 'string'

let output1 = identityGene("myString"); // type of output will be 'string'

/**
 * Working with Generic Type Variables
 * @param arg
 */
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

function loggingIdentityArr<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

function loggingIdentityArr1<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

/**
 * Generic Types
 * @param arg
 */
function identityType<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identityType;

function identityType1<T>(arg: T): T {
  return arg;
}

let myIdentityType1: <U>(arg: U) => U = identityType1;

function identityType2<T>(arg: T): T {
  return arg;
}

let myIdentityType2: { <T>(arg: T): T } = identityType2;

/**
 * GenericFn
 */
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identityType3<T>(arg: T): T {
  return arg;
}
let myIdentityType3: GenericIdentityFn = identityType3;

/**
 *
 */
interface GenericIdentityFn1<T> {
  (arg: T): T;
}

function identityType4<T>(arg: T): T {
  return arg;
}

let myIdentityType4: GenericIdentityFn1<number> = identityType4;

/**
 * Generic Classes
 */
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

/**
 * Generic Constraints
 * @param arg
 */
function loggingIdentityCon<T>(arg: T): T {
  //   console.log(arg.length); // Error: T doesn't have .length
  return arg;
}

interface Lengthwise {
  length: number;
}

function loggingIdentityCon1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// loggingIdentityCon1(3);  // Error, number doesn't have a .length property

loggingIdentityCon1({ length: 10, value: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let xCon = { a: 1, b: 2, c: 3, d: 4 };

getProperty(xCon, "a"); // okay
// getProperty(xCon, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

/**
 * Using Class Types in Generics
 * @param c
 */
function createI<T>(c: { new (): T }): T {
  return new c();
}

/**
 *
 */
class BeeKeeper {
  hasMask!: boolean;
}
class ZooKeeper {
  nametag!: string;
}
class AnimalG {
  numLegs!: number;
}
class Bee extends AnimalG {
  keeper!: BeeKeeper;
}
class Lion extends AnimalG {
  keeper!: ZooKeeper;
}
function findKeeper<A extends AnimalG, K>(a: {
  new (): A;
  prototype: { keeper: K };
}): K {
  return a.prototype.keeper;
}

function createInstance<A extends AnimalG>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
