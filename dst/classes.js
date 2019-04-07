"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
/**
 * ex.
 */
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog1;
}(Animal1));
var dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();
/**
 *
 */
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/**
 * public
 */
var AnimalPub = /** @class */ (function () {
    function AnimalPub(theName) {
        this.name = theName;
    }
    AnimalPub.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalPub;
}());
/**
 * private
 */
var AnimalPri = /** @class */ (function () {
    function AnimalPri(theName) {
        this.name = theName;
    }
    return AnimalPri;
}());
// new AnimalPri("Cat").name; // Error: 'name' is private;
var AnimalPri1 = /** @class */ (function () {
    function AnimalPri1(theName) {
        this.name = theName;
    }
    return AnimalPri1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(AnimalPri1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new AnimalPri1("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible
/**
 * protected
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person));
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
/**
 *
 */
var PersonProtected = /** @class */ (function () {
    function PersonProtected(theName) {
        this.name = theName;
    }
    return PersonProtected;
}());
// Employee can extend Person
var EmployeeProtected = /** @class */ (function (_super) {
    __extends(EmployeeProtected, _super);
    function EmployeeProtected(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    EmployeeProtected.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeProtected;
}(PersonProtected));
var howardP = new EmployeeProtected("Howard", "Sales");
// let john = new PersonProtected("John"); // Error: The 'Person' constructor is protected
/**
 * ReadOnly
 */
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.
var OctopusP = /** @class */ (function () {
    function OctopusP(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return OctopusP;
}());
/**
 * Accessors
 */
var EmployeeA = /** @class */ (function () {
    function EmployeeA() {
    }
    return EmployeeA;
}());
var employeeA = new EmployeeA();
employeeA.fullName = "Bob Smith";
if (employeeA.fullName) {
    console.log(employeeA.fullName);
}
var passcode = "secret passcode";
var EmployeeAcc = /** @class */ (function () {
    function EmployeeAcc() {
    }
    Object.defineProperty(EmployeeAcc.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeAcc;
}());
var employeeAcc = new EmployeeAcc();
employeeAcc.fullName = "Bob Smith";
if (employeeAcc.fullName) {
    console.log(employeeAcc.fullName);
}
/**
 * Static Properties
 */
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/**
 * Abstract
 */
var AnimalAbst = /** @class */ (function () {
    function AnimalAbst() {
    }
    AnimalAbst.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return AnimalAbst;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type
/**
 * Constructor functions
 */
var GreeterCon = /** @class */ (function () {
    function GreeterCon(message) {
        this.greeting = message;
    }
    GreeterCon.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return GreeterCon;
}());
var greeterCon;
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
var GreeterCon2 = /** @class */ (function () {
    function GreeterCon2() {
    }
    GreeterCon2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return GreeterCon2.standardGreeting;
        }
    };
    GreeterCon2.standardGreeting = "Hello, there";
    return GreeterCon2;
}());
var greeter1;
greeter1 = new GreeterCon2();
console.log(greeter1.greet());
var greeterMaker = GreeterCon2;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    return Point1;
}());
var point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=classes.js.map