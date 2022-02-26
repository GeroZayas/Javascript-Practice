/* 
ES6 Promises


A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.

*/

setTimeout(function () {
  console.log("Work 1");
  setTimeout(function () {
    console.log("Work 2");
  }, 2000);
}, 1000);
console.log("End");

/*
It prints "End", "Work 1" and "Work 2" in that order (the work is done asynchronously). But if there are more events like this, the code becomes very complex.

ES6 comes to the rescue in such situations. A promise can be created as follows:
*/

// new Promise(function (resolve, reject) {
//   // Work
//   if (success) resolve(result);
//   else reject(Error("failure"));
// });

/* 
Here, resolve is the method for success and reject is the method for failure.

If a method returns a promise, its calls should use the then method which takes two methods as input; one for success and the other for the failure.
*/

function asyncFunc(work) {
  return new Promise(function (resolve, reject) {
    if (work === "") reject(Error("Nothing"));
    setTimeout(function () {
      resolve(work);
    }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
  .then(
    function (result) {
      console.log(result);
      return asyncFunc("Work 2"); // Task 2
    },
    function (error) {
      console.log(error);
    }
  )
  .then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    }
  );
console.log("End");
