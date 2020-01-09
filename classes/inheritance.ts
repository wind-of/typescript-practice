class AnimalYeah {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class OldCat extends AnimalYeah {
  meow() {
      console.log('Meow, blet.');
  }
}

const cat = new OldCat();
cat.meow();
cat.move(10);
cat.meow();




// More complex example of inheritance:

class Animal {
  constructor(private name: string) {}
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
}

let SamTheSnake: Snake | Animal = new Snake("Sammy the Python");
let TomTheHorse: Animal | Horse = new Horse("Tommy the Palomino");

SamTheSnake.move();
TomTheHorse.move(34);
