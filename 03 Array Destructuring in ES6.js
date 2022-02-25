/* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
ES6 has added a shorthand syntax for destructuring an array. */

// let arr = ["1", "2", "3"];

// let [one, two, three] = arr;

// console.log(one); // 1
// console.log(two); // 2
// console.log(three); // 3

// let a = () => {
//   return [1, 3, 2];
// };

// //notice we leave the second argument's place empty (between the commas)
// let [one , , two] = a();

// console.log(one); // 1
// console.log(two); // 2

//The destructuring syntax also simplifies assignment and swapping values:

let a, b, c = 4, d = 8;

[a, b = 6] = [2];
console.log(a); // 2
console.log(b); // 6

// We swap the values here like this L
[c, d] = [d, c];
console.log(c); // 8
console.log(d); // 4