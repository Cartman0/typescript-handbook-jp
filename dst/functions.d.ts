/**
 * Functions
 * @param x
 * @param y
 */
declare let z: number;
declare function addToZ(x: number, y: number): number;
/***
 *Typing the function
 */
declare function add(x: number, y: number): number;
/**
 * Writing the function type 関数の型
 */
declare let myAdd: (x: number, y: number) => number;
declare let myAdd1: (baseValue: number, increment: number) => number;
/**
 * Inferring the types
 */
declare let myAddAll: (x: number, y: number) => number;
declare let myAddXY: (baseValue: number, increment: number) => number;
/**
 * Optional and Default Parameters
 */
declare function buildName(firstName: string, lastName: string): string;
declare let result3: string;
declare function buildName1(firstName: string, lastName?: string): string;
declare let result1: string;
declare let result33: string;
/**
 * default
 * @param firstName
 * @param lastName
 */
declare function buildName2(firstName: string, lastName?: string): string;
declare let result11: string;
declare let result22: string;
declare let result44: string;
declare function buildName3(firstName: string | undefined, lastName: string): string;
declare let result333: string;
declare let result444: string;
/**
 * rest
 * @param firstName
 * @param restOfName
 */
declare function buildNameRest(firstName: string, ...restOfName: string[]): string;
declare let employeeName: string;
declare function buildNameRest1(firstName: string, ...restOfName: string[]): string;
declare let buildNameFun: (fname: string, ...rest: string[]) => string;
/**
 * this and arrow functions
 */
declare let deck: {
    suits: string[];
    cards: any[];
    createCardPicker: () => () => {
        suit: string;
        card: number;
    };
};
declare let cardPicker: () => {
    suit: string;
    card: number;
};
declare let pickedCard: {
    suit: string;
    card: number;
};
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
declare let deckThis: Deck;
declare let cardPickerThis: () => {
    suit: string;
    card: number;
};
declare let pickedCardThis: {
    suit: string;
    card: number;
};
/**
 * this parameters in callbacks
 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
declare class Handler {
    info: string;
    onClickBad(this: Handler, e: Event): void;
}
declare let h: Handler;
declare let uiElement: UIElement;
declare class HandlerVoid {
    info: string;
    onClickGood(this: void, e: Event): void;
}
declare let hVoid: HandlerVoid;
declare class HandlerThis {
    info: string;
    onClickGood: (e: Event) => void;
}
declare let hThis: HandlerThis;
/**
 * Overload
 */
declare let suits: string[];
declare function pickCard(x: any): any;
declare let myDeck: {
    suit: string;
    card: number;
}[];
declare let pickedCard1: {
    suit: string;
    card: number;
};
declare let pickedCard2: any;
declare function pickCard1(x: {
    suit: string;
    card: number;
}[]): number;
declare function pickCard1(x: number): {
    suit: string;
    card: number;
};
declare let myDeck1: {
    suit: string;
    card: number;
}[];
declare let pickedCard11: {
    suit: string;
    card: number;
};
declare let pickedCard22: {
    suit: string;
    card: number;
};
