class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

/**
 * ex.
 */
class Animal1 {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog1 extends Animal1 {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();

/**
 *
 */
class Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/**
 * public
 */
class AnimalPub {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

/**
 * private
 */

class AnimalPri {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// new AnimalPri("Cat").name; // Error: 'name' is private;

class AnimalPri1 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends AnimalPri1 {
  constructor() {
    super("Rhino");
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new AnimalPri1("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible

/**
 * protected
 */
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee1 extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

/**
 *
 */
class PersonProtected {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}
// Employee can extend Person
class EmployeeProtected extends PersonProtected {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howardP = new EmployeeProtected("Howard", "Sales");
// let john = new PersonProtected("John"); // Error: The 'Person' constructor is protected

/**
 * ReadOnly
 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

class OctopusP {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}

/**
 * Accessors
 */
class EmployeeA {
  fullName!: string;
}

let employeeA = new EmployeeA();
employeeA.fullName = "Bob Smith";
if (employeeA.fullName) {
  console.log(employeeA.fullName);
}

let passcode = "secret passcode";

class EmployeeAcc {
  private _fullName!: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employeeAcc = new EmployeeAcc();
employeeAcc.fullName = "Bob Smith";
if (employeeAcc.fullName) {
  console.log(employeeAcc.fullName);
}

/**
 * Static Properties
 */

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/**
 * Abstract
 */
abstract class AnimalAbst {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type

/**
 * Constructor functions
 */
class GreeterCon {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeterCon: GreeterCon;
greeterCon = new GreeterCon("world");
console.log(greeter.greet());

/**
 *
 */
// let GreeterCon1 = (function() {
//   function GreeterCon1(this: GreeterCon1, message: string) {
//     this.greeting = message;
//   }
//   GreeterCon1.prototype.greet = function() {
//     return "Hello, " + this.greeting;
//   };
//   return GreeterCon1;
// })();

// let greeterCon1;
// greeterCon1 = new GreeterCon1("world");
// console.log(greeterCon1.greet());

class GreeterCon2 {
  static standardGreeting = "Hello, there";
  greeting!: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return GreeterCon2.standardGreeting;
    }
  }
}
let greeter1: GreeterCon2;
greeter1 = new GreeterCon2();
console.log(greeter1.greet());
let greeterMaker: typeof GreeterCon2 = GreeterCon2;
greeterMaker.standardGreeting = "Hey there!";
let greeter2: GreeterCon2 = new greeterMaker();
console.log(greeter2.greet());

class Point1 {
  x!: number;
  y!: number;
}
interface Point3d extends Point1 {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
