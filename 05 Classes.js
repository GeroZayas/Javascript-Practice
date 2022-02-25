// CREATING A CLASS
class Person {
    // first we have the CONSTRUCTOR
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // here we have a GETTER

    get nameBeauty() { return this.printNameBeautied(); }

    // here we have a METHOD
    printNameBeautied() {
        return " ************ \n   " + this.name + "\n ************ "
    }

}

// creating an object or instance of that class

const person1 = new Person("Gero", 30);
console.log("The name is", person1.name);
console.log("The age is", person1.age);

console.log(person1.nameBeauty)

const person2 = new Person("Enrique", 54)
console.log(person2.nameBeauty)
