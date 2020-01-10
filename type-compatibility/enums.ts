enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let statUs = Status.Ready;
statUs = Status.Waiting;
// @ts-ignore
statUs = Color.Green;  // Error

// Short and clear
