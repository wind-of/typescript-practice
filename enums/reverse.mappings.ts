enum Letters {
  A, B, C, D, E
}

const A = Letters.A; // 0
const getA = Letters[A]; // "A"
// ...or
const getAAgain = Letters[0] // "A"

// ...and
// @ts-ignore
A !== getA; 

// But
// *Keep in mind that string enum members do not get a reverse mapping generated at all.*

enum StringLetters {
  A = "A",
  B = "B",
  C = "C"
}

// So:

const anotherA = StringLetters.A;
const getAString = StringLetters[anotherA];

anotherA === getAString // Yeah, true
