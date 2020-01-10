const enum Directions {
  Up,
  Down,
  Left,
  Right
}

// Const enums uses only constant members

const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];



// Ambient enums 
enum Enum {
  A = 1,
  B, // 2
  C = 2
}

declare enum AmbientEnum {
  A = 1,
  B, // computed
  C = 2
}
