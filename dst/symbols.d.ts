declare let sym1: symbol;
declare let sym2: symbol;
declare let sym3: symbol;
declare let sym4: symbol;
/**
 * sym
 */
declare const sym: unique symbol;
declare let obj: {
    [sym]: string;
};
/**
 *
 */
declare const getClassNameSymbol: unique symbol;
declare class CSym {
    [getClassNameSymbol](): string;
}
declare let cSym: CSym;
declare let className: string;
