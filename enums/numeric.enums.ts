enum Something {
  Yes, // 0
  No, // 1
  Maybe // 2
}
enum SomethingElse {
  Yes = 5, // 5
  No, // 6
  maybe // 7
}

function getNumberFive(): number {
  return 5
}

// Not right
enum NotSomething {
  Yes = getNumberFive(),
  // @ts-ignore
  No, // Error! Enum member must have initializer.
  // @ts-ignore
  Maybe 
}

// Right
enum NotSomethingElse {
  Yes = getNumberFive(), // 5
  No = 6, // 6 
  Maybe // 7
}

// ...or
enum NotNotSomething {
  Yes, // 0
  No, // 1
  Maybe = getNumberFive() // 5
}
