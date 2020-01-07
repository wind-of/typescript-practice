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

enum Numeration {one = 1, second, third} 

enum List {first = 1, second = 'second'} // number or string or nothing
const firstItem: List = List.first; // 1
const secondItem: List = List.second; // 'second'





//                              ***Any***
let anyType: any = 'Everything'; // string
anyType = true; // boolean
anyType = 15; // number
anyType = null; /// null
// etc.
