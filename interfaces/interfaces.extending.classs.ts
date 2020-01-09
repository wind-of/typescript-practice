class Person {
  private prop: string;
}

interface ISomething extends Person {
  otherProp: number;
}

class SomethingV1 extends Person implements ISomething{
  otherProp = 5;
}

/* Error: types have different declaration of private property "prop" 
class SomethingV2 implements ISomething{
  private prop = 'string';
  otherProp = 5;
}
*/