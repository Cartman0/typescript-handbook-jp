/**
 * Functions
 * @param x
 * @param y
 */

// Named function
// function add(x: number, y: number) {
//   return x + y;
// }

// Anonymous function
// let myAdd = function(x: number, y: number) {
//   return x + y;
// };

let z = 100;

function addToZ(x: number, y: number) {
  return x + y + z;
}

/***
 *Typing the function
 */
function add(x: number, y: number): number {
  return x + y;
}
// let myAdd = function(x: number, y: number): number {
//   return x + y;
// };

/**
 * Writing the function type 関数の型
 */
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

let myAdd1: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

/**
 * Inferring the types
 */
// myAdd has the full function type
let myAddAll = function(x: number, y: number): number {
  return x + y;
};

// The parameters 'x' and 'y' have the type number
let myAddXY: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y;
};

/**
 * Optional and Default Parameters
 */

function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

// let result1 = buildName("Bob"); // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Bob", "Adams"); // ah, just right

function buildName1(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

let result1 = buildName1("Bob"); // works correctly now
// let result2 = buildName1("Bob", "Adams", "Sr."); // error, too many parameters
let result33 = buildName1("Bob", "Adams"); // ah, just right

/**
 * default
 * @param firstName
 * @param lastName
 */
function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result11 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
let result22 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
// let result33 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result44 = buildName2("Bob", "Adams"); // ah, just right

function buildName3(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

// let result111 = buildName3("Bob"); // error, too few parameters
// let result222 = buildName3("Bob", "Adams", "Sr."); // error, too many parameters
let result333 = buildName3("Bob", "Adams"); // okay and returns "Bob Adams"
let result444 = buildName3(undefined, "Adams"); // okay and returns "Will Adams"

/**
 * rest
 * @param firstName
 * @param restOfName
 */
function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");

function buildNameRest1(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildNameRest1;

/**
 * this and arrow functions
 */
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

/**
 * this parameters
 */
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deckThis: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPickerThis = deck.createCardPicker();
let pickedCardThis = cardPickerThis();

console.log("card: " + pickedCardThis.card + " of " + pickedCardThis.suit);

/**
 * this parameters in callbacks
 */
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info!: string;
  onClickBad(this: Handler, e: Event) {
    // oops, used this here. using this callback would crash at runtime
    // ここでthisを使用していまが、thisを使用したコールバックは実行時にクラッシュします。
    this.info = e.type;
  }
}

let h = new Handler();
let uiElement!: UIElement;
// uiElement.addClickListener(h.onClickBad); // error!

class HandlerVoid {
  info!: string;
  onClickGood(this: void, e: Event) {
    // can't use this here because it's of type void!
    console.log("clicked!");
  }
}
let hVoid = new HandlerVoid();
// uiElement.addClickListener(hVoid.onClickGood);

class HandlerThis {
  info!: string;
  onClickGood = (e: Event) => {
    this.info = e.type;
  };
}
let hThis = new HandlerThis();
// uiElement.addClickListener(hThis.onClickGood);

/**
 * Overload
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x === "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === "number") {
    // Otherwise just let them pick the card
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard1(x: { suit: string; card: number }[]): number;
function pickCard1(x: number): { suit: string; card: number };
function pickCard1(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x === "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === "number") {
    // Otherwise just let them pick the card
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck1 = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard11 = myDeck1[pickCard1(myDeck1)];
console.log("card: " + pickedCard11.card + " of " + pickedCard11.suit);

let pickedCard22 = pickCard1(15);
console.log("card: " + pickedCard22.card + " of " + pickedCard22.suit);
