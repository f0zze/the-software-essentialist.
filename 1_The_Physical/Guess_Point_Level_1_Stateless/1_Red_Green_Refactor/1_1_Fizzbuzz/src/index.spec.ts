import { fizzBuzz } from "./fizzbuzz"
describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    })
    it("should return 'Fizz' for 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
    it("should return 'Buzz' for 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    })
    it("should return 'FizzBuzz' for 15", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    })
});

