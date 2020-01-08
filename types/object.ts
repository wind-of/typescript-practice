const object: object = new Function() || new Array() || {} // etc.

declare function create(o: object | null): void;

// create({ prop: 0 }) - works 
// create(null) - works

// create(42) - error
// create("string") - error
