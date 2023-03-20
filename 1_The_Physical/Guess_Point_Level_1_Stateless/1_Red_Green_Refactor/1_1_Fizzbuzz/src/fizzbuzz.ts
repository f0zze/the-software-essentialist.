export function fizzBuzz(number: number) {

    validateNumber(number)

    const isMultipleOfThree = isMultiplesOf(3)
    const isMultipleOfFive = isMultiplesOf(5)
    const isMultipleOfFiveAnd3 = isMultiplesOf(3, 5)

    if (isMultipleOfFiveAnd3(number)) {
        return 'FizzBuzz';
    }
    if (isMultipleOfThree(number)) {
        return 'Fizz';
    }
    if (isMultipleOfFive(number)) {
        return 'Buzz';
    }

    return String(number);
}

function validateNumber(number: number) {
    if (number < 1 || number > 100) {
        throw new Error('Number must be between 1 and 100');
    }
}

function isMultiplesOf(...multiples: number[]) {
    return (value: number) => multiples.every(m => value % m === 0);
}
