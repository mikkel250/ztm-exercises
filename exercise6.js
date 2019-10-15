//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; // {a: 5}
const object3 = object2;  // {a: 5}
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name) {
    name= name
  }

}

class Mammal extends Animal {
  constructor() {
    super()
  }

}

class Cow extends Mammal {
  constructor() {
    super()
  }

  function sound() {
    return `MOOO! I'm a ${color} cow with name ${name}, type ${type}.`
  }

}

const Bessy = new Cow(Bessie, Holstein, brown);