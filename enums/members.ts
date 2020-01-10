
// Constant and computed members
enum E {
  // Every following member is a constant
  X = 5,
  Y, 
  Z = 1312,
  W = "Some string"
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  
  // computed member
  G = "123".length
}