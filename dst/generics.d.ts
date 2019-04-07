declare function identity(arg: number): number;
declare function identityAny(arg: any): any;
declare function identityGene<T>(arg: T): T;
declare let output: string;
declare let output1: string;
/**
 * Working with Generic Type Variables
 * @param arg
 */
declare function loggingIdentity<T>(arg: T): T;
declare function loggingIdentityArr<T>(arg: T[]): T[];
declare function loggingIdentityArr1<T>(arg: Array<T>): Array<T>;
/**
 * Generic Types
 * @param arg
 */
declare function identityType<T>(arg: T): T;
declare let myIdentity: <T>(arg: T) => T;
declare function identityType1<T>(arg: T): T;
declare let myIdentityType1: <U>(arg: U) => U;
declare function identityType2<T>(arg: T): T;
declare let myIdentityType2: {
    <T>(arg: T): T;
};
/**
 * GenericFn
 */
interface GenericIdentityFn {
    <T>(arg: T): T;
}
declare function identityType3<T>(arg: T): T;
declare let myIdentityType3: GenericIdentityFn;
/**
 *
 */
interface GenericIdentityFn1<T> {
    (arg: T): T;
}
declare function identityType4<T>(arg: T): T;
declare let myIdentityType4: GenericIdentityFn1<number>;
/**
 * Generic Classes
 */
declare class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
declare let myGenericNumber: GenericNumber<number>;
declare let stringNumeric: GenericNumber<string>;
/**
 * Generic Constraints
 * @param arg
 */
declare function loggingIdentityCon<T>(arg: T): T;
interface Lengthwise {
    length: number;
}
declare function loggingIdentityCon1<T extends Lengthwise>(arg: T): T;
declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
declare let xCon: {
    a: number;
    b: number;
    c: number;
    d: number;
};
/**
 * Using Class Types in Generics
 * @param c
 */
declare function createI<T>(c: {
    new (): T;
}): T;
/**
 *
 */
declare class BeeKeeper {
    hasMask: boolean;
}
declare class ZooKeeper {
    nametag: string;
}
declare class AnimalG {
    numLegs: number;
}
declare class Bee extends AnimalG {
    keeper: BeeKeeper;
}
declare class Lion extends AnimalG {
    keeper: ZooKeeper;
}
declare function findKeeper<A extends AnimalG, K>(a: {
    new (): A;
    prototype: {
        keeper: K;
    };
}): K;
declare function createInstance<A extends AnimalG>(c: new () => A): A;
