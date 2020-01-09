function indentityV1(arg: any): any {
  return arg
}
// The function above is not good practise



// The function below is good practise
function indentity<T>(arg: T): T {
  return arg
}


const identifyStringV1 = indentity<string>('Success');
// ...or just:
const identifyStringV2 = indentity('Success');
