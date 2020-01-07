const boolean: boolean | Boolean = true;
const number: number | Number = 1;
const string: string | String = 'string';
const object: object | Object = new Function() || [] || {} // etc.
const Null: null = null;
const Undefined: undefined = undefined;
const symbol: Symbol = Symbol('Symbol');


//                              ***Tuple***
const tupleType: [string, number, boolean, boolean, number] = ['string', 15, true, false, 7];
/* 
  The order matters:
  [15, 'string',  true, false, 7] - throws an error
*/




//                              ***Enum***
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





//                              ***Any***
let anyType: any = 'Everything'; // string
anyType = true; // boolean
anyType = 15; // number
anyType = null; /// null
// etc.




//                              ***Destructurization*** 
enum Something {first, second, third};
const {first, second, third}: {first: number, second: number, third: number} = {...Something}
const [smth, anothersmth]: string[] = ['string', 'string'];
const [tupleSmth, tupleAnother]: [string, number] = ['string', 61];
// etc\
