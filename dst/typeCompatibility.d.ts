interface Named {
    name: string;
}
declare class PersonC {
    name: string;
}
declare let p: Named;
interface Named {
    name: string;
}
/**
 * Starting Out
 */
declare let xStarting: Named;
declare let y: {
    name: string;
    location: string;
};
declare function greet(n: Named): void;
/**
 *  Comparing two functions
 */
declare let xComp: (a: number) => number;
declare let yComp: (b: number, s: string) => number;
/**
 *
 */
declare let items: number[];
/**
 * Function Parameter Bivariance
 */
declare enum EventType {
    Mouse = 0,
    Keyboard = 1
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
declare function listenEvent(eventType: EventType, handler: (n: Event1) => void): void;
