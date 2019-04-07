/**
 * var declarations
 */
declare function f(): () => number;
declare var g: () => number;
declare function f_(): number;
/**
 * Scoping rules
 * @param shouldInitialize
 */
declare function f1(shouldInitialize: boolean): void;
declare function sumMatrix(matrix: number[][]): number;
/**
 * let
 */
declare let hello: string;
/**
 * Block-scoping
 */
declare function f2(input: boolean): number | undefined;
declare function foo(): void;
/**
 * Re-declarations and Shadowing
 * @param x
 */
declare function f__(x: any): void;
declare function f___(x: any): void;
declare function g_(): void;
declare function f3(condition: any, x: any): any;
declare function sumMatrixLet(matrix: number[][]): number;
/**
 * Block-scoped variable capturing
 */
declare function theCityThatAlwaysSleeps(): void;
/**
 * const
 */
declare const numLivesForCat = 9;
declare const kitty: {
    name: string;
    numLives: number;
};
/**
 * Array destructuring
 */
declare let input: number[];
declare let first: number, second: number;
declare function f_ArrayDestructuring([first, second]: [number, number]): void;
/**
 * ...
 */
declare let firstD: number, rest: [number, number, number];
declare let firstDD: number;
declare let secondD: number, fourthD: number;
/**
 * Object destructuring
 */
declare let o: {
    aa: string;
    b: number;
    c: string;
};
/**
 * Property renaming
 */
declare let newName1: string, newName2: number;
declare let newName11: string;
declare let newName22: number;
declare let aa: string, b: number;
/**
 * default value
 * @param wholeObject
 */
declare function keepWholeObject(wholeObject: {
    a: string;
    b?: number;
}): void;
declare type C = {
    a: string;
    b?: number;
};
declare function ff({ a, b }: C): void;
declare function fDefault({ a, b }?: {
    a?: string | undefined;
    b?: number | undefined;
}): void;
declare function fDefault1({ a, b }?: {
    a: string;
    b?: number | undefined;
}): void;
/**
 * spread
 */
declare let firstSpread: number[];
declare let secondSpread: number[];
declare let bothPlus: number[];
declare let defaults: {
    food: string;
    price: string;
    ambiance: string;
};
declare let search: {
    food: string;
    price: string;
    ambiance: string;
};
declare let defaults1: {
    food: string;
    price: string;
    ambiance: string;
};
declare let search1: {
    food: string;
    price: string;
    ambiance: string;
};
/**
 * spread can remove methods
 */
declare class CSpread {
    p: number;
    protected m(): void;
}
declare let cSpread: CSpread;
declare let clone: {
    p: number;
};
