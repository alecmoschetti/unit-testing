
import { expect } from "@jest/globals";
import { capFirstString, reverseString, calculator, caesar, analyzeArray } from "./tests.js";

//capitalize first letter function
test('first letter of string to be capitalized', () => expect(capFirstString('hello')).toBe('Hello'));
test('first letter of string capitalized even with spaces', () => expect(capFirstString('hello world')).toBe('Hello world'));

//reverse string function
test('reverse word', () => expect(reverseString('hello')).toBe('olleh'));
test('reverse word with capitals', () => expect(reverseString("Howdy")).toBe("ydwoH"));
test('reverse sentence with capitals', () => expect(reverseString("Greetings from Portland!")).toBe("!dnaltroP morf sgniteerG"));

//calculator object methods very basic
test('addition method', () => expect(calculator.add(2, 2)).toBe(4));
test('addition method, works with negatives', () => expect(calculator.add(-400, 20)).toBe(-380));
test('subtraction method', () => expect(calculator.subtract(10, 8)).toBe(2));
test('subtraction method, works with negatives', () => expect(calculator.subtract(-10, 20)).toBe(-30));
test('division method', () => expect(calculator.divide(8, 2)).toBe(4));
test('division method, works with negatives', () => expect(calculator.divide(-8, 2)).toBe(-4));
test('multiplication method', () => expect(calculator.multiply(42, 10)).toBe(420));
test('multiplication method, works with negatives', () => expect(calculator.multiply(-42, 10)).toBe(-420));

//caesar 
test('caesar simple scenario', () => expect(caesar("attack at dawn", 5)).toBe("fyyfhp fy ifbs"));
test('caesar with punctuation', () => expect(caesar("I hate you!", 13)).toBe("V ungr lbh!"));

//array analysis
test('array analysis', () => {
    const arrayToAnalyze = [1,8,3,4,2,6];
    const objectToCompare = { average: 4, min: 1, max: 8, length: 6 };
    expect(analyzeArray(arrayToAnalyze)).toEqual(objectToCompare);
});