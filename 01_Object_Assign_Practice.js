var tshirt = {
  color: "blue",
  size: "m",
};

console.log("\nThe Tshirt color is: ");
console.log(tshirt.color);

console.log("\nThe Tshirt size is: ");
console.log(tshirt.size);


//I create a new Object here and give it the same properties with Object assign
var newTshirt = Object.assign({}, tshirt)

console.log("\nThe new Tshirt color is: ");
console.log(newTshirt.color);
console.log("\nThe new Tshirt size is: ");
console.log(newTshirt.size);

// Now, I can change the properties of the new Object

newTshirt.color = 'red'
newTshirt.size = 's'

console.log("\nAfter changing its properties: ")
console.log("\nThe new Tshirt color is: ");
console.log(newTshirt.color);
console.log("\nThe new Tshirt size is: ");
console.log(newTshirt.size);

//Now, I'm gonna create a new object with Object.assign but i'll include
// the new properties right there

var anotherTshirt = Object.assign({}, tshirt, {color : 'green'}, {size : 'XXL'})

console.log("\nAnother tshirt object is born: ")
console.log("\nThe new Tshirt color is: ");
console.log(anotherTshirt.color);
console.log("\nThe new Tshirt size is: ");
console.log(anotherTshirt.size);
















