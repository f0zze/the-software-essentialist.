export function fizzBuzz(number: number) {
    if (isMultiplesOff(number, [3, 5])) {
        return 'FizzBuzz';
    }
    if (isMultiplesOff(number, [3])) {
        return 'Fizz';
    }
    if (isMultiplesOff(number, [5])) {
        return 'Buzz';
    }

    return String(number);
}

function isMultiplesOff(value: number, multiples: number[]) {
    return multiples.every(m => value % m === 0);
}
