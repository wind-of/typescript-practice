
// @ts-ignore
class AccessorsPerson {
  constructor(private readonly firstName: string, 
              private readonly lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }

  _age = 0;

  set age(age: number) {
    this._age = age
  }
}

const Bogdan = new AccessorsPerson('Bogdan', 'Bogdarenko');

console.log(Bogdan.fullName);
// @ts-ignore
console.log(Bogdan.age(15));


// Accessors are not necessary (forget about them), use simple methods.
