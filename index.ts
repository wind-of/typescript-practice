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
