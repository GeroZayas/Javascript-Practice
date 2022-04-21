// how to use filter()

// Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

console.log("---------------------------------");

////// ////// ////// ////// ////// ////// ////// ////// ////// //////

var nums = [2, 5, 8, 5, 78, 32, 90, 34];

// The arrow function is to find all numbers in our array that are divisible by 2

const theResult = nums.filter((num) => num % 2 === 0);

console.log(theResult);

////// ////// ////// ////// ////// ////// ////// ////// ////// //////

function divByTwo(num) {
  return num % 2 === 0;
}

console.log(divByTwo(45));
console.log(divByTwo(46));

console.log("---------------------------------");

////// ////// ////// ////// ////// ////// ////// ////// ////// //////

// We can use filter with a callback function

function isBigEnough(value) {
  return value >= 10;
}

var moreNums = [12, 15, 5, 8, 67, 130, 44];

let filtered = moreNums.filter(divByTwo);

console.log(filtered);

////// ////// ////// ////// ////// ////// ////// ////// ////// //////
// Let's filter all numbers different than 0

console.log("---------------------------------");

var arrayOfNums = [0, 4, 5, 7, 0, 3, 0, 2];

const numsDiffThanZero = arrayOfNums.filter((num) => num != 0);

console.log(numsDiffThanZero); // [ 4, 5, 7, 3, 2 ]
