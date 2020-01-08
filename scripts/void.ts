const playground: Object = {
  IsWindowOpen: false
};


const VoudVariable: void = undefined || null;

// If function doesn't return anything (except for null and undefined), it has a void type
function InfinityLoop(): void {
  while(true) {}
}
function OpenWindow(): void {
  playground.IsWindowOpen = true;
}
function ReturnNullOrUndefined(): void {
  return null || undefined
  // ...or simply
  return
}
