/**
 * Sometimes, you need an object to have a property that holds data of particular data type but it is not mandatory to have that property on the object.
 * This is similar to the optional function parameters we learned in the previous lesson.
 * The example for above scenerio is given below.
 */

interface Student {
    firstName: string;
    lastName: string;
    age?:number;
    getDoubleAge(age: number): number
};

/** 
 * As you can see here, as age can be an optional value
 * So it is not important to provide it while initializing
 * value of type Student
 */

const sparsh: Student = {
    firstName: 'Sparsh',
    lastName: 'Kumar',
    getDoubleAge(age: number) {
        return age * 2;
    }
}

