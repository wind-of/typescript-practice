interface IExponentiate {
  (number: number, exponent?: number): number
}

const Exponentiate: IExponentiate = (number, exponent = 1) => number**exponent;

console.log(Exponentiate(15, 2)) // 225
console.log(Exponentiate(15)) // 15
