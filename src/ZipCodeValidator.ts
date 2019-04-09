export const numberRegexp = /^[0-9]+$/;

import { StringValidator } from "./Validation";
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
