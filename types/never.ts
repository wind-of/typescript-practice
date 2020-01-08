// "never" is the return type for a function expressions that always throws an exception or one that never returns
function error(message: string): never {
  throw new Error(message);
}

// The Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function InfiniteLoop(): never {
  while (true) {}
}
