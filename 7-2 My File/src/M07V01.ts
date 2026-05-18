//! OOP for this ar first I learn class then from class I will make object 

//! How to define property 
class Animal0 {
  name1: string;
  species2: string;
  sound3: string;

  // 1,2,3 and 4,5,6 name gulo must match kore likbo all time
  constructor(name4: string, species5: string, sound6: string) {
    this.name1 = name4;
    this.species2 = species5;
    this.sound3 = sound6;
  }
}

//* Animal Blue print ta theke joto issa object toiri korte partesi niche::
const dog0 = new Animal0("dogesh bhai", "dog", "Ghew ghew");
const cat0 = new Animal0("Cat bhai", "Cat", "meaw meaw");

// console.log(dog0.sound3);
// console.log(cat0.sound3);


//! How to define Method ::: from last example same to same ::: If there is any function in the class or object that is called method.

class Animal {
  name1: string;
  species2: string;
  sound3: string;

  // 1,2,3 and 4,5,6 name gulo must match kore likbo all time
  constructor(name4: string, species5: string, sound6: string) {
    this.name1 = name4;
    this.species2 = species5;
    this.sound3 = sound6;
  }

  makeSound() {
    // console.log(`The animal is making  sound`); // same nicher line a dynamic korsi
    console.log(`${this.name1} is making  sound: ${this.sound3}`);
  }
}
//* Animal Blue print ta theke joto issa object toiri korte partesi niche::
const dog = new Animal("dogesh bhai", "dog", "Ghew ghew");
const cat = new Animal("Cat bhai", "Cat", "meaw meaw");

cat.makeSound();
dog.makeSound();

//! using patrameter properties ::: How to define Method ::: same to same last 2 ta example but different way te likhbo

class Animal2 {
  constructor(public name: string, public species: string, public sound: string) {
    
  }

  makeSound() {
    console.log(`${this.name} is making  sound: ${this.sound}`);
  }
}
//* Animal2 Blue print ta theke joto issa object toiri korte partesi niche::
const dog2 = new Animal("dogesh bhai", "dog", "Ghew ghew");
const cat2 = new Animal("Cat bhai", "Cat", "meaw meaw");

cat2.makeSound();
dog2.makeSound();