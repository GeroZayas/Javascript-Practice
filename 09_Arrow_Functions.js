// Arrow functions allow us to create functions in a cleaner way than normal functions.

// Normal functions

function theSum(a, b) {
  return a + b;
}

result = theSum(34, 45);

console.log("The result is", result);

//Arrow function:

const theOtherSum = (x, y) => {
  let theResult = x + y;
  return theResult;
};

console.log("\nThe result of the arrow function is: ");
console.log(theOtherSum(56, 78));

