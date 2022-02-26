/*
The **extends** keyword is used in class declarations or class expressions to create a child of a class. The child inherits the properties and methods of the parent. 
*/

// class Animal {
//   // I have my constructor right here
//   constructor(name) {
//     this.name = name;
//   }

//   // A method of my class:
//   speak() {
//     console.log(this.name + " makes a noise.");
//   }
// }

// // Then, this is how we inherit from another class to a new  one:
// class Dog extends Animal {
//   // the method speak() is overridden in  this class
//   speak() {
//     console.log(this.name + " barks.");
//   }
// }

// let dog = new Dog("Rex");
// dog.speak(); // Rex barks.

/*If there is a constructor present in the subclass, it needs to first call  ** super() ** before using this. Also, the super keyword is used to call parent's methods. */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  speak() {
    // Ok, so, what happens here is that the actual method from the parent class is being called, and it will produce its return.
    // note how we use super.methodName
    super.speak(); // Super
    console.log(this.name + " barks.");
  }
}

let dog = new Dog("Rex");
dog.speak();
// Rex makes a noise.
// Rex barks.
