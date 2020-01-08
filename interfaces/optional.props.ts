
// You can also need to have optional properties.
// The question mark will help you:
interface Cat {
  name: string,
  age: number,
  breed?: string,
  color?: string;
}

function createCat(cat: Cat): void {
  // ...
}

// createCat({name: 'Andrew'}) // throws an error because the "age"-property is required
createCat({name: 'Andrew', age: 15});
createCat({name: 'Andrew', age: 15, breed: 'nice-cats'});
createCat({name: 'Andrew', age: 15, color: 'orange', breed: "like Garfield"});
