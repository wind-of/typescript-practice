
// Memebers of enum also can act as types:
enum Numeric {
  One = 1,
  Two,
  Three,
  Four
}

interface Rectangle {
  corners: Numeric.Four
  sides: Numeric.Four,
}
interface Triangle {
  corners: Numeric.Three 
  sides: Numeric.Three, 
}

// Right
const firstRectangle: Rectangle = {
  corners: Numeric.Four,
  sides: Numeric.Four
}

// Wrong
const secondRectangle: Rectangle = {
  // @ts-ignore
  corners: Numeric.Three, // Error! Type 'Numeric.Three' is not assignable to type 'Numeric.Four' 
  sides: Numeric.Four
}

// ...but
// this construction will not be caught as an error:
const someRectangle: Rectangle = {
  corners: 3,
  sides: 123512
}
