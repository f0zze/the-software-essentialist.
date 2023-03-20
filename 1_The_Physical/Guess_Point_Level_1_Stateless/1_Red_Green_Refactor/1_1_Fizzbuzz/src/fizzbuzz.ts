export function fizzBuzz(number: number) {
    const isMultipleOfThree = isMultiplesOff(3)
    const isMultipleOfFive = isMultiplesOff(5)
    const isMultipleOfFiveAnd3 = isMultiplesOff(3, 5)

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

function isMultiplesOff(...multiples: number[]) {
    return (value: number) => multiples.every(m => value % m === 0);
}
