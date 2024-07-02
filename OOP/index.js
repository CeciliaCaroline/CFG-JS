const studentObj = {
    first_name: "Mary",
    last_name: "Smith",
    display_full_name: function () {
        return `${this.first_name} ${this.last_name}`
    }
};

// what if we want to create 100 students with the same attributes?
// what's better?

// factory function
// A factory function is a function that returns a new object

// function student (first_name, last_name) {

//     return {
//         first_name,
//         last_name,
//         display_full_name: function () {
//             return `${first_name} ${last_name}`
//         }
//     }

// }

// const student1 = student("Mary", "Green"); 
// const student2 = student("Jane", "Smith"); 

// console.log(student2.display_full_name())


// Constructor
// A constructor function in JavaScript is a special type of function used to create and initialize objects

// function student(first_name, last_name) {
//     this.first_name = first_name
//     this.fname = first_name
//     this.last_name = last_name
//     this.display_full_name = function () {
//         return `${this.first_name} ${this.last_name}`
//     }
// }

// const student3 = new student("Marvin", "Gay");  
// console.log(student3.display_full_name(), "STUDENT 3")

// // every object in JS has a function called constructor
// // the constructor references the function that was used to construct/create that object
// // with let x = {} ==> new Object() this is the in build object constructor function


// Defining a class
// class Student {
//     constructor(first_name, last_name) {
//         // properties of the class
//         this.first_name = first_name
//         this.last_name = last_name
//     }
//     // methods to define the behaviour of the class
//     display_full_name = function () {
//         return `${this.first_name} ${this.last_name}`
//     }
// } 

// // create instances using the new keyword
// const student4 = new Student("Grace", "Kelly");
// console.log(student4.display_full_name())



// ----------- BREAK -------------


// // Encapsulation and Abstraction



class Person {
    #name; // Private field
    #age;  // Private field
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
    }
  
    // Getter method for age
    getAge() {
      return this.#age;
    }
  
    // Setter method for age with validation
    setAge(newAge) {
      if (newAge > 0) {
        this.#age = newAge;
      } else {
        console.log('Please enter a valid age');
      }
    }
    // Abstracting the complex process of aging
    haveBirthday() {
        this.#age += 1;
        console.log(`Happy Birthday ${this.#name}! You are now ${this.#age} years old.`);
        this.#privateMethod()
    }
    
    #privateMethod() {
        console.log(`This is a private method. Name: ${this.#name}, Age: ${this.#age}`);
      }
  }


  
  const person1 = new Person('Alice', 30);
//   console.log(person1.#age)
  console.log(person1.getAge()); // 30
  person1.setAge(31); // Using a method to modify the property
  console.log(person1.getAge()); // 31
  person1.setAge(-5); // Please enter a valid age
//   person1.haveBirthday();
//   console.log(person1.#privateMethod())

