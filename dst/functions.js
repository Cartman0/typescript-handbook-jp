"use strict";
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
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
/***
 *Typing the function
 */
function add(x, y) {
    return x + y;
}
// let myAdd = function(x: number, y: number): number {
//   return x + y;
// };
/**
 * Writing the function type 関数の型
 */
var myAdd = function (x, y) {
    return x + y;
};
var myAdd1 = function (x, y) {
    return x + y;
};
/**
 * Inferring the types
 */
// myAdd has the full function type
var myAddAll = function (x, y) {
    return x + y;
};
// The parameters 'x' and 'y' have the type number
var myAddXY = function (x, y) {
    return x + y;
};
/**
 * Optional and Default Parameters
 */
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob"); // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
function buildName1(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = buildName1("Bob"); // works correctly now
// let result2 = buildName1("Bob", "Adams", "Sr."); // error, too many parameters
var result33 = buildName1("Bob", "Adams"); // ah, just right
/**
 * default
 * @param firstName
 * @param lastName
 */
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result11 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
var result22 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
// let result33 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
var result44 = buildName2("Bob", "Adams"); // ah, just right
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
// let result111 = buildName3("Bob"); // error, too few parameters
// let result222 = buildName3("Bob", "Adams", "Sr."); // error, too many parameters
var result333 = buildName3("Bob", "Adams"); // okay and returns "Bob Adams"
var result444 = buildName3(undefined, "Adams"); // okay and returns "Will Adams"
/**
 * rest
 * @param firstName
 * @param restOfName
 */
function buildNameRest(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
function buildNameRest1(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildNameRest1;
/**
 * this and arrow functions
 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var deckThis = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPickerThis = deck.createCardPicker();
var pickedCardThis = cardPickerThis();
console.log("card: " + pickedCardThis.card + " of " + pickedCardThis.suit);
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        // oops, used this here. using this callback would crash at runtime
        // ここでthisを使用していまが、thisを使用したコールバックは実行時にクラッシュします。
        this.info = e.type;
    };
    return Handler;
}());
var h = new Handler();
var uiElement;
// uiElement.addClickListener(h.onClickBad); // error!
var HandlerVoid = /** @class */ (function () {
    function HandlerVoid() {
    }
    HandlerVoid.prototype.onClickGood = function (e) {
        // can't use this here because it's of type void!
        console.log("clicked!");
    };
    return HandlerVoid;
}());
var hVoid = new HandlerVoid();
// uiElement.addClickListener(hVoid.onClickGood);
var HandlerThis = /** @class */ (function () {
    function HandlerThis() {
        var _this = this;
        this.onClickGood = function (e) {
            _this.info = e.type;
        };
    }
    return HandlerThis;
}());
var hThis = new HandlerThis();
// uiElement.addClickListener(hThis.onClickGood);
/**
 * Overload
 */
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x === "number") {
        // Otherwise just let them pick the card
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
function pickCard1(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") {
        var pickedCard_2 = Math.floor(Math.random() * x.length);
        return pickedCard_2;
    }
    else if (typeof x === "number") {
        // Otherwise just let them pick the card
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck1 = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];
var pickedCard11 = myDeck1[pickCard1(myDeck1)];
console.log("card: " + pickedCard11.card + " of " + pickedCard11.suit);
var pickedCard22 = pickCard1(15);
console.log("card: " + pickedCard22.card + " of " + pickedCard22.suit);
//# sourceMappingURL=functions.js.map