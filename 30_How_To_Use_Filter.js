// how to use filter()

// Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

////// ////// ////// ////// ////// ////// ////// ////// ////// //////

var nums = [2, 5, 8, 5, 78, 32, 90, 34];

// The arrow function is to find all numbers in our array that are divisible by 2

const theResult = nums.filter((num) => num % 2 === 0);

console.log(theResult);

////// ////// ////// ////// ////// ////// ////// ////// ////// //////

function divByTwo(num) {
  return num % 2 === 0 ? "it is divisible" : "not divisible by 2";
}

console.log(divByTwo(45));
console.log(divByTwo(46));

////// ////// ////// ////// ////// ////// ////// ////// ////// //////
