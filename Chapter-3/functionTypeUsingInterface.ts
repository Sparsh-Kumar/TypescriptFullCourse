
/**
 * Not only the shape of a plain object, but an interface can also describe the signature of a function.
 * The example of this demonstration is given below.
 */

interface IsSumOdd {
    (firstNumber: number, secondNumber: number): boolean;
}

const IsSumOdd: IsSumOdd = (firstNumber: number, secondNumber: number): boolean => {
    return ((firstNumber + secondNumber) % 2 !== 0);
}

console.log (IsSumOdd(2, 5));
