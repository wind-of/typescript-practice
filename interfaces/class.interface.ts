interface IAnimal {
  name: string,
  makeSound(): void;
}

class Cat implements IAnimal {
  constructor(readonly name) {}
  makeSound() {
    console.log('Meow')
  }
}