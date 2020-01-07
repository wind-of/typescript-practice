const boolean: boolean | Boolean = true;
const number: number | Number = 1;
const string: string | String = 'string';
const Null: null = null;
const Undefined: undefined = undefined;
const symbol: Symbol = Symbol('Symbol');


//                              ***Tuple***                              \\
const tupleType: [string, number, boolean, boolean, number] = ['string', 15, true, false, 7];
/* 
  The order matters:
  [15, 'string',  true, false, 7] - throws an error
*/
//                              ***End***                              \\




//                              ***Enum***                              \\
enum Color {red, blue, green}
const redColor: Color = Color.red; // 0
const blueColor: Color = Color.blue; // 1
const greenColor: Color = Color.green; // 2

// You can manually set the values in the enum 
enum List {first = 1, second = 'second'} // number or string or nothing
const firstItem: List = List.first; // 1
const secondItem: List = List.second; // 'second'


// You can also change the number at which start numbering of enum, like below:
enum Numeration {one = 1, two, three}
const one: Numeration = Numeration.one; // 1
const two: Numeration = Numeration.two; // 2
const three: Numeration = Numeration.three; // 3
//                              ***End***                              \\





//                              ***Any***                              \\
let anyType: any = 'Everything'; // string
anyType = true; // boolean
anyType = 15; // number
anyType = null; /// null
// etc.
//                              ***End***                              \\





//                              ***Void***                              \\
const VoudVariable: void = undefined || null;

// If function doesn't return anything (except for null and undefined), it has a void type
function InfinityLoop(): void {
  while(true) {}
}
function OpenWindow(): void {
  playground.IsWindowOpen = true;
}
function ReturnNullOrUndefined(): void {
  return null || undefined
  // ...or simply
  return
}
//                              ***End***                              \\




//                              ***Never***                              \\
// "never" is the return type for a function expressions that always throws an exception or one that never returns
function error(message: string): never {
  throw new Error(message);
}

// The Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function InfiniteLoopV2(): never {
  while (true) {}
}
//                              ***End***                              \\



//                              ***Object***                              \\
const object: object = new Function() || new Array() || {} // etc.

declare function create(o: object | null): void;

// create({ prop: 0 }) - works 
// create(null) - works

// create(42) - error
// create("string") - error


//                              ***End***                              \\





//                              ***Destructurization***                              \\ 
enum Something {first, second, third};
const {first, second, third}: {first: number, second: number, third: number} = {...Something}

const [smth, anothersmth]: string[] = ['string', 'string'];
const [tupleSmth, tupleAnother]: [string, number] = ['string', 61];
// etc.
//                              ***End***                              \\




//                              ***Generic**
// The use of --strictNullChecks are preferable.
// Without this flag the following is possible:

let someString: string = 'I am a string';
someString = null;
someString = undefined;

//                              ***End***                              \\



// Playground variables
const playground: Object = {
  IsWindowOpen: false
};