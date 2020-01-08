// Type assertions let you say to the compiler, that you know better what you do than him.

// Type assertions have two forms
let someValue: any = "String";

let asStyle: number = (someValue as string).length;

let angleBracketsStle: number = (<string>someValue).length;
