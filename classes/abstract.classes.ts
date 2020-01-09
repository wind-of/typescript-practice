abstract class Animal {
  // Abstract properties must be implemented in derived classes 
  abstract move(distanceInMeters: number): void;
  abstract makeSound(): void;
  abstract name: string;

  // This property is generic for every class extending 'Animal'.
  readonly kingdom: string = 'Animals';
}

class Cat extends Animal {
  constructor(readonly name: string) {super()}
  move(distanceInMeters = 1) {
    // some logic
  }
  makeSound() {
    console.log('Meow')
  }
}


const cat = new Cat('Artur');

console.log(cat.name); // 'Artur'
console.log(cat.kingdom); // 'Animals'

cat.move(21512412342);
cat.makeSound();
