class Animal {
  constructor(private readonly name: string) {}

  getName(): string {
    return this.name
  }
}

const cat = new Animal('Cat');

console.log(cat.getName()) // Cat
