
// There are four modifiers: readonly, public, private and protected:

class Person {
  constructor(
    public readonly firstName: string, 
    public readonly lastName: string) {}
  
  public fullName(): string {
    return this.firstName + " " + this.lastName
  }
  protected address: string;
  private test: string;
}

class Employee extends Person {
  private balance: number;
}

const Oleg = new Employee('Oleg', 'Gregoriev');

console.log(Oleg.fullName());
console.log(Oleg.firstName);
console.log(Oleg.lastName);


// @ts-ignore
Oleg.firstName = 'Bogdan'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// @ts-ignore
console.log(Oleg.test); 
// Error: Property "test" is private and available only in the Person class

// @ts-ignore
console.log(Oleg.address); 
// Error: Property "addres" is protected and available only in the Person class and in his descendants