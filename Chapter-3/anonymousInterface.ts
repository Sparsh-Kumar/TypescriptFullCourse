

let AnotherPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    getDoubleAge: (age: number) => age * 2
}

/** we want to make a function that will only accept argument of type 'AnotherPerson' */
/** This is an example of anonymous interface, as interface is defined but it's name not initialized. */

const GetPersonInfo = (personDetails: {
    firstName: string,
    lastName: string,
    age: number,
    getDoubleAge: (
        firstName: string,
        lastName: string,
        age: number
    ) => string
}): string => {
    return personDetails.getDoubleAge(
        personDetails.firstName,
        personDetails.lastName,
        personDetails.age
    );
}

/** The above example seems quite complex in order to reduce complexiety, we make use of interfaces */

interface PersonDetail {
    firstName: string,
    lastName: string,
    age: number,
    getDoubleAge: (
        firstName: string,
        lastName: string,
        age: number
    ) => string
};

const GetPersonInfoUsingInterface = (personDetails: PersonDetail) => {
    return personDetails.getDoubleAge(
        personDetails.firstName,
        personDetails.lastName,
        personDetails.age
    )
}
