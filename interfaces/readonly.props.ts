// The "readonly" makes the property modifiable only when an object is creating:

interface Person{
  readonly first: string,
  readonly last: string,
  age: number
}

const person: Person = {
  first: "Oleg",
  last: "Gregoriev",
  age: 18
}

person.age = 15; // Ok
// person.first = 'Andrew'; // error
// person.last = 'Joestar'; // error


// You can also make variables and arrays not modifiable using the "ReadonlyArray<T>" type:

const someArray: ReadonlyArray<string> = ['Str', 'Str', 'Str'];


let str: Readonly<string> = 'string'; // the same const str: string = 'string';

// Readonly<T> is not necessary for variables because you must 
// use "const" if you want to make some variable not modifiable.
// You should use "readonly" of you work with properties (see above the "Person" interface)
