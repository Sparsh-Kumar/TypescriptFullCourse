
/**
 * NOTE 1
 * ---------
 * An interface is a shape of an object.
 * A standard JavaScript object is a map of key:value pairs.
 * JavaScript object keys in almost all the cases are strings and their values are any supported JavaScript values (primitive or abstract).
 * 
 * NOTE-2
 * ---------
 * An interface tells the TypeScript compiler about property names an object can have and their corresponding value types.
 * Therefore, interface is a type and is an abstract type since it is composed of primitive types.
 * 
 * NOTE-3
 * ---------
 * When we define an object with properties (keys) and values,
 * TypeScript creates an implicit interface by looking at the property names and data type of their values in the object.
 * (please see the attached image implicitIterface.png for reference).
 * This happens because of the type inference.
 * 
 */
/** Let’s try to mess with the object properties after it was defined. */

let Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    getDoubleAge: (age: number) => age * 2
}

//Person.getDoubleAge = 123;
//Person.newField = '123';

/**
 * Line number 31 and 32 will pose an error, as due to inferred type that Typescript compiler create.
 * Therefore If we try to hamper that type then Typescript compiler will noe compile the code.
 * But If still we want to alter Person Object, we can assign it type 'any' explicitly.
 */

let ModifiedPerson: any = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    getDoubleAge: (age: number) => age * 2
}

ModifiedPerson.getDoubleAge = 123; // No error, as object is of type 'any'
ModifiedPerson.newField = 123; // No error, as object is of type 'any'.

