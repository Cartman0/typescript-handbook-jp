interface Named {
  name: string;
}

class PersonC {
  name!: string;
}

let p: Named;
// OK, because of structural typing
p = new PersonC();

interface Named {
  name: string;
}

/**
 * Starting Out
 */
let xStarting: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
xStarting = y;

function greet(n: Named) {
  console.log("Hello, " + n.name);
}
greet(y); // OK

/**
 *  Comparing two functions
 */
let xComp = (a: number) => 0;
let yComp = (b: number, s: string) => 0;
yComp = xComp; // OK
// xComp = yComp; // Error

/**
 *
 */
let items = [1, 2, 3];

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));

// Should be OK!
// tslint:disable-next-line: arrow-parens
items.forEach(item => console.log(item));

/**
 * Function Parameter Bivariance
 */
enum EventType {
  Mouse,
  Keyboard
}

interface Event1 {
  timestamp: number;
}
interface MouseEvent1 extends Event1 {
  x: number;
  y: number;
}
interface KeyEvent extends Event1 {
  keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event1) => void) {
  /* ... */
}

// Unsound, but useful and common
// 脆弱ですが、便利で一般的です
// listenEvent(EventType.Mouse, (e: MouseEvent1) => console.log(e.x + "," + e.y));

// Undesirable alternatives in presence of soundness
//// 堅牢ですが、好まれません
listenEvent(EventType.Mouse, (e: Event1) =>
  console.log((<MouseEvent1>e).x + "," + (<MouseEvent1>e).y)
);
listenEvent(EventType.Mouse, <(e: Event1) => void>(
  ((e: MouseEvent1) => console.log(e.x + "," + e.y))
));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
