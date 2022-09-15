/*
Inheritance in ES6

In a real-time strategy video game there are 2 types of units: gunner and sniper.

The program you are given declares a standard Unit class. It has an attack() method, which displays мessage "Attack!".

You need to inherit Gunner and Sniper classes from the Unit class, and add attack() method to each so that the given function calls work correctly: each method should call the attack() method of parent class Unit, and then output to the console its own corresponding message:
Gunner => "Using gun!"
Sniper = "Using sniper rifle!"

For example, gunner.attack() should output
Attack!
Using gun!

where "Attack!" is message form attack() method of parent class Unit, and "Using gun!" is its own message.
Use the super keyword to call the method of the parent class.
*/

class Unit {
  attack() {
    console.log("Attack!");
  }
}

//inherit this class from Unit
class Gunner extends Unit {
  attack() {
    super.attack();
    console.log("Using gun!");
  }
}
//inherit this class from Unit
class Sniper extends Unit {
  attack() {
    super.attack();
    console.log("Using sniper rifle!");
  }
}

let gunner = new Gunner();
let sniper = new Sniper();

//calls
gunner.attack();
sniper.attack();
