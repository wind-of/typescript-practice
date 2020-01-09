function addNumbers(...numbers: number[]): number {
  return numbers.reduce((previous: number, current: number) => previous + current);
}