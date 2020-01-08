enum Something {first, second, third};
const {first, second, third}: {first: number, second: number, third: number} = {...Something}

const [smth, anothersmth]: string[] = ['string', 'string'];
const [tupleSmth, tupleAnother]: [string, number] = ['string', 61];
// etc.
