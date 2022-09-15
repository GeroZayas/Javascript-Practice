/*Class Methods in ES6 

 You are making a program so that students are able to calculate their average of 3 exam scores.

The given program takes the scores of 3 exams as input and declares the Exams class.

Add a static method average() to class Exams, which will take the scores as parameters, and calculate and return the average score rounded to the nearest integer so that the code in main works correctly.

Sample Input
74
80
68

Sample Output
74

Recall Math.round() function to round the number with the floating point to the nearest integer.
 
 */

/* 
Sintaxis of static method in js:

static methodName() { ... }

*/

var exam1 = 67;
var exam2 = 34;
var exam3 = 98;

// I create the class Exams
class Exams {
    // I create a static method inside of the class, so I can call the function / method on the class itself, not on an object created with the class:
  static average() {
    let result = 0;
    // Now, this is how we can work with whatever amount of arguments a function might receive as  input:
    //we use arguments.length, and manage it with a for loop in this case
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    //   console.log(result);
    }
    result = Math.round(result / arguments.length);
    return 'The average result is ' + result ;
  }
}

console.log(Exams.average(exam1, exam2, exam3));
