declare function extend<First, Second>(first: First, second: Second): First & Second;
declare class PersonI {
    name: string;
    constructor(name: string);
}
interface Loggable {
    log(name: string): void;
}
declare class ConsoleLogger implements Loggable {
    log(name: string): void;
}
declare const jim: PersonI & ConsoleLogger;
/**
 *
 */
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
declare function padLeft(value: string, padding: any): string;
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
declare function padLeft1(value: string, padding: string | number): void;
interface Bird {
    fly(): void;
    layEggs(): number;
}
interface Fish {
    swim(): void;
    layEggs(): number;
}
declare function getSmallPet(): Fish | Bird;
declare let pet: Bird | Fish;
/**
 * Type Guards and Differentiating Types
 */
declare let pet1: Bird | Fish;
declare let pet2: Bird | Fish;
declare function isFish(pet: Fish | Bird): pet is Fish;
/**
 * typeof type guards
 * @param value
 * @param padding
 */
declare function padLeftGuards(value: string, padding: string | number): string;
/**
 * instanceof type guards
 *
 */
interface Padder {
    getPaddingString(): string;
}
declare class SpaceRepeatingPadder implements Padder {
    private numSpaces;
    constructor(numSpaces: number);
    getPaddingString(): string;
}
declare class StringPadder implements Padder {
    private value;
    constructor(value: string);
    getPaddingString(): string;
}
declare function getRandomPadder(): SpaceRepeatingPadder | StringPadder;
declare let padder: Padder;
declare function foo1(x: number): void;
