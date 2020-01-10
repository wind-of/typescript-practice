let x = (x: string) => 0;
let y = (x: string, y: number) => 0;

y = x;
// @ts-ignore
x = y; // Type (x: string) cannot to be assigned to type (x: string, y: number)

// If you trying to assign function to function:
let identityNumber = (number: number) => number;
let getSum = (first: number, second: number) => first + second;

getSum = identityNumber;

// ...You should first look to the parameters list.
// Each parameter in the assignable function (identityNumber) must 
// have a corresponding parameter with a compatible type in 
// the assigning function

// And following the rule above, the following assignment will not be allowed:
//@ts-ignore
identityNumber = getSum;


// Also if return types of functions are different, the assignments will not be allowed:
// interface Identity<T> {
//   (parameter: T): T
// }: Identity<number> : Identity<string>

let SomeFunction = (number: number) => number;
let AnotherFunction = (string: number) => String(string);

// @ts-ignore
SomeFunction = AnotherFunction;
// @ts-ignore
AnotherFunction = SomeFunction;





// A little bit about return types

let func = () => ({name: "Alice"});
let anotherFunc = () => ({name: "Alice", location: "Seattle"});

func = anotherFunc; // OK
// @ts-ignore
anotherFunc = func; // Error, because func() lacks a location property
