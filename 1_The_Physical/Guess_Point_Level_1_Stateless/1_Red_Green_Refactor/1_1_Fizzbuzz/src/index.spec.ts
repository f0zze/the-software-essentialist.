import { fizzBuzz } from "./fizzbuzz"
describe("fizzbuzz", () => {
    it("should throw when number greater than 100", () => {
        expect(() => fizzBuzz(101)).toThrow()
    })
    it("should throw when number less than 1", () => {
        expect(() => fizzBuzz(0)).toThrow();
    });
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

