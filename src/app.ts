import { PersonGreeter } from "./personGreeter";

const firstName = "Jared";
const secondName = "Guerra";

const fullName= `${firstName} ${secondName}`

//Template Literal
console.log(`Hello ${fullName}`);

type Person = {
    firstName: string;
    secondName: string;
    age: number;
    dateOfBirth?: Date;
};

const person : Person = {
    firstName: "Jared",
    secondName: "Guerra",
    age: 26,
    dateOfBirth: new Date(1995, 1, 7)
};



//Arrow functions
const sayHelloToPerson = (p: Person) => {
    //Body of method
    console.log(`Hello ${p.firstName} ${p.secondName}, your DoB is ${p.dateOfBirth}`)
};

sayHelloToPerson(person)

const personGreeter = new PersonGreeter('Eleazar', 'Artiles', new Date(1995, 7,1))

