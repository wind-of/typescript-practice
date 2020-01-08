enum Color {red, blue, green}
const redColor: Color = Color.red; // 0
const blueColor: Color = Color.blue; // 1
const greenColor: Color = Color.green; // 2

// You can manually set the values in the enum 
enum List {first = 1, second = 'second'} // number or string or nothing
const firstItem: List = List.first; // 1
const secondItem: List = List.second; // 'second'


// You can also change the number at which start numbering of enum, like below:
enum Numeration {one = 1, two, three}
const one: Numeration = Numeration.one; // 1
const two: Numeration = Numeration.two; // 2
const three: Numeration = Numeration.three; // 3
