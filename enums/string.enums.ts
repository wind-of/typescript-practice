
enum SomeString {
  Up = "Up",
  Down = "Down",
  Right = "Right",
  Left = "Left"
}

// In string enums each member has to be constant-initialized (like above)

// So, this will not work:
enum SomeAnotherString {
  Up = "Up",
  Down = "Down",
  Right = "Right",
  // @ts-ignore
  Left
}