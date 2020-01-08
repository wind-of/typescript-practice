
interface IMultiplyFunction{
  (first: number, second: number): number
}
const multiply: IMultiplyFunction = (first, second) => {
  return first * second;
}
