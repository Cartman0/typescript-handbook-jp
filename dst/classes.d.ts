declare class Greeter {
    greeting: string;
    constructor(message: string);
    greet(): string;
}
declare let greeter: Greeter;
/**
 * ex.
 */
declare class Animal1 {
    move(distanceInMeters?: number): void;
}
declare class Dog1 extends Animal1 {
    bark(): void;
}
declare const dog: Dog1;
/**
 *
 */
declare class Animal2 {
    name: string;
    constructor(theName: string);
    move(distanceInMeters?: number): void;
}
declare class Snake extends Animal2 {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
declare class Horse extends Animal2 {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
declare let sam: Snake;
declare let tom: Animal2;
/**
 * public
 */
declare class AnimalPub {
    name: string;
    constructor(theName: string);
    move(distanceInMeters: number): void;
}
/**
 * private
 */
declare class AnimalPri {
    private name;
    constructor(theName: string);
}
declare class AnimalPri1 {
    private name;
    constructor(theName: string);
}
declare class Rhino extends AnimalPri1 {
    constructor();
}
declare class Employee {
    private name;
    constructor(theName: string);
}
declare let animal: AnimalPri1;
declare let rhino: Rhino;
declare let employee: Employee;
/**
 * protected
 */
declare class Person {
    protected name: string;
    constructor(name: string);
}
declare class Employee1 extends Person {
    private department;
    constructor(name: string, department: string);
    getElevatorPitch(): string;
}
declare let howard: Employee1;
/**
 *
 */
declare class PersonProtected {
    protected name: string;
    protected constructor(theName: string);
}
declare class EmployeeProtected extends PersonProtected {
    private department;
    constructor(name: string, department: string);
    getElevatorPitch(): string;
}
declare let howardP: EmployeeProtected;
/**
 * ReadOnly
 */
declare class Octopus {
    readonly name: string;
    readonly numberOfLegs: number;
    constructor(theName: string);
}
declare let dad: Octopus;
declare class OctopusP {
    readonly name: string;
    readonly numberOfLegs: number;
    constructor(name: string);
}
/**
 * Accessors
 */
declare class EmployeeA {
    fullName: string;
}
declare let employeeA: EmployeeA;
declare let passcode: string;
declare class EmployeeAcc {
    private _fullName;
    fullName: string;
}
declare let employeeAcc: EmployeeAcc;
/**
 * Static Properties
 */
declare class Grid {
    scale: number;
    static origin: {
        x: number;
        y: number;
    };
    calculateDistanceFromOrigin(point: {
        x: number;
        y: number;
    }): number;
    constructor(scale: number);
}
declare let grid1: Grid;
declare let grid2: Grid;
/**
 * Abstract
 */
declare abstract class AnimalAbst {
    abstract makeSound(): void;
    move(): void;
}
declare abstract class Department {
    name: string;
    constructor(name: string);
    printName(): void;
    abstract printMeeting(): void;
}
declare class AccountingDepartment extends Department {
    constructor();
    printMeeting(): void;
    generateReports(): void;
}
declare let department: Department;
/**
 * Constructor functions
 */
declare class GreeterCon {
    greeting: string;
    constructor(message: string);
    greet(): string;
}
declare let greeterCon: GreeterCon;
/**
 *
 */
declare class GreeterCon2 {
    static standardGreeting: string;
    greeting: string;
    greet(): string;
}
declare let greeter1: GreeterCon2;
declare let greeterMaker: typeof GreeterCon2;
declare let greeter2: GreeterCon2;
declare class Point1 {
    x: number;
    y: number;
}
interface Point3d extends Point1 {
    z: number;
}
declare let point3d: Point3d;
