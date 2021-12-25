

/**
 * An interface with an anonymous method signature describes a function.
 * But a function in the JavaScript realm is also an object, which means you can add properties to a function value just like an object.
 * Therefore it is perfectly legal you can define any properties on an interface of the function type.
 */

interface IsSumOddCheck {
    (a: number, b: number): boolean;
    type: string;
    calculate (a: number, b: number): number;
}

const IsSumOddCheck: IsSumOddCheck = Object.assign (
    function (numOne: number, numTwo: number) : boolean {
        return (((numOne + numTwo) % 2) !== 0)
    },
    {
        type: 'Odd Check Function',
        calculate: (a: number, b: number): number => {
            return a + b;
        }
    }
)

console.log ('IsSumOddCheck(1, 2) => ', IsSumOddCheck(3, 4));
console.log (IsSumOddCheck.type);
console.log (IsSumOddCheck.calculate(2, 3));

/**
 * Interfaces of the function type (as used above) can be helpful to describe constructor functions.
 * A constructor function is similar to a class whose job is to create objects (instances).
 * We only had constructor functions up until ES5 to mimic a class in JavaScript.
 * Therefore, TypeScript compiles classes to constructor functions if you are targeting ES5 or below.
 */

