
// Interfaces can extend each other. (Yes, yes);
interface IAnimal {
  breed: string;
}

interface ICat extends IAnimal {
  legs: number;
}

interface IBabyCat extends ICat {
  suckMilk(): void;
}



const cat: ICat = {
  breed: "Nice koshara", 
  legs: 4
};

// ...or

// I always forget about this ({} as T) feature.
const CAT = {} as ICat;
CAT.breed = "Nice koshara";
CAT.legs = 4;


// Baby cat

const BabyCat: IBabyCat = {
  breed: "Nice koshara",
  legs: 4,
  suckMilk() {
    return
  }
}

