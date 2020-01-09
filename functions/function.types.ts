interface ISum {
  (...numbers: number[]): number
}

const Sum: ISum = (...numbers) => numbers.reduce((prev: number, cur: number) => prev + cur);

console.log(Sum(15, 125, 125, 5123)); // 5388
