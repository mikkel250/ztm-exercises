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
    this.name = name;
  }

}

class Mammal extends Animal {
  constructor(name) {
    super(name)
  }

}

class Cow extends Mammal {
  constructor(name, type, color) {
    super(name)
    this.type = type;
    this.color = color;
  }

  sound() {
    return `MOOO! I'm a ${this.color} cow with name ${this.name}, type ${this.type}.`
  }

}

const Bessie = new Cow('Bessie', 'Holstein', 'brown');