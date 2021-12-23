

let sampleVariable = 10;

//sampleVariable = 'modified value'
/**
 * 1. Here on assigning string value to the variable sampleVariable, we will get an error.
 * 2. As Typescript consider that sampleVariable is of type 'Number'.
 * 3. But how Typescript get to know that sampleVariable is of type 'Number' ?.
 * 4. This is known as 'inferred type' (process is known as 'type inference'), means that typescript guess that the type of the variable would be
 * the type of value assigned to it.
 * 5. You can also explicitly define type for a variable.
 * for example as given below.
 */

const stringArray: string [] = [];
stringArray.push('a');
// stringArray.push(2);
/** we will get error, in above line as stringArray is an array of string so it cannot accepr a number value. */
