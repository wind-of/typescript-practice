
// Basic example
interface Named {
  name: string;
}

class Person {
  name: string;
}

const p: Named = new Person(); // OK, because of structural typing



// Start.

let person1: Named;
const person2 = { name: "Alice", location: "Seattle" };

person1 = person2; // Wtf?

// The basic rule for TypeScript’s structural type system is 
// that person1 is compatible with person2 if person2 has at least the same members as person1
// in the example above the same property is "name".

// It happens since when the compiler checks whether person2 can be assigned to person1, 
// it checks each property of person1 to find corresponding compatible property in person2.

// ...BUT!

// @ts-ignore
const somePerson: Named = { name: "Alice", location: "Seattle" }; // Such construction will throw an error.
