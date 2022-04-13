/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

function divisors(integer) {
  resultArray = [];
  if (integer > 1) {
    for (let i = 2; i <= integer / 2 + 1; i++) {
      if (integer % i === 0) {
        resultArray.push(i);
      }
    }
    if (resultArray.length === 0) {
      return `${integer} is prime`;
    }
    return resultArray;
  }
  return null;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"
