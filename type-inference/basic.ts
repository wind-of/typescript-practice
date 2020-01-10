
// Simple example:
const x = [0, 1, null]; // The inferred type is number[]

// If algorithm can't find best common type, 
// the resulting inference is the union array type,
// for example: 
const y = [15, true, "string"] // y: (string | number | boolean)[]
