/**
 * Boolean
 */
declare let isDone: boolean;
/**
 * Number
 */
declare let decimal: number;
declare let hex: number;
declare let binary: number;
declare let octal: number;
/**
 * string
 */
declare let color: string;
/**
 * template string
 */
declare let fullName: string;
declare let age: number;
declare let sentence: string;
/**
 * Array
 */
declare let list: number[];
/**
 * Tupple
 */
declare let x: [string, number];
/**
 * tuple is fixed length.
 * following codes is error.
 */
/**
 * enum
 */
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let c: Color;
declare enum Color1 {
    Red = 1,
    Green = 2,
    Blue = 3
}
declare let c1: Color1;
declare enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
declare let c2: Color2;
declare enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 3
}
declare let colorName: string;
/**
 * Any
 */
declare let notSure: any;
declare let prettySure: Object;
declare let listAny: any[];
/**
 * void
 */
declare function warnUser(): void;
declare let unusable: void;
/**
 * Null and Undefined
 */
declare let u: undefined;
declare let n: null;
/**
 * Never
 */
declare function error(message: string): never;
declare function fail(): never;
declare function infiniteLoop(): never;
/**
 * Object
 */
declare function create(o: object | null): void;
/**
 * Type assertions
 */
declare let someValue: any;
declare let strLength: number;
declare let someValueAs: any;
declare let strLengthAs: number;
