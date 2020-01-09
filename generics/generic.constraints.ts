interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); 
  return arg;
}

// @ts-ignore
loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity([3]);
loggingIdentity({value: 3, length: 1}); 




// Using Type Parameters in Generic Constraints

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// @ts-ignore
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.




// When creating factories in TypeScript using generics, 
// it is necessary to refer to class types by their constructor functions:
class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(className: new () => A): A {
  return new className();
}

createInstance(Lion).keeper.nametag;
 