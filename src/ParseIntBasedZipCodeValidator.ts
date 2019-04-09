export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s, 10).toString() === s;
  }
}

// Export original validator but rename it
export {
  ZipCodeValidator as RegExpBasedZipCodeValidator
} from "./ZipCodeValidator";
