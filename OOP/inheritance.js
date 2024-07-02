// // Inheritance
// /**
//  * Suppose you have a class Animal that defines basic characteristics of an animal, like name and sound. 
//  *You can create a subclass Dog that inherits from Animal but adds unique traits like breed or a method to bark. 
//  *This way, Dog gets everything Animal has, plus its own specific features.
//  * 
//  */

// base class/parent class
class Animal{
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        return `${this.name} makes a sound: ${this.sound}`;
    }
}

// sub class/child class

class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound) // inherits properties from animal
        this.breed = breed;
    }

    bark() {
        return `${this.name} goes Woof!`
    }
}

// create an instance of the sub class
const myDog = new Dog("Wes", "dog sound", "poodle");

console.log(myDog.bark());
console.log(myDog.makeSound());


class Cat extends Animal {
    constructor(name, sound, toy) {
        super(name, sound) // inherits properties from animal
        this.toy = toy;
    }

    favToy() {
        return `${this.name}'s favorite toy is ${this.toy}!`
    }
}