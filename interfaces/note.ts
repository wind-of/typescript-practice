
// Interesting shit:
interface Car {
  [property: string]: string | number | boolean,
  readonly color: string,
  readonly year: number,
}
// [property: string]: T | T | ...
// It lets you add to the "Cat"-object as many properties, as you want:

const someCar: Car = {color: 'red', year: 1999, engine: 'great', fixable: true /* ... */}

// The list of types (T) describes what types 
// are assignable to the properties of an object.

// In the "Car" interface you can see that we 
// entered "string | number | boolean".
// It means we can assign to the properties 
// a data with the string, number or boolean types (like in the someCar variable).
