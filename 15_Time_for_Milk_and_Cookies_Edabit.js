/*
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples

timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

Notes

Dates are zero zero based (see resources).
All test cases contain valid dates.

*/

// .getDay -> gives day of the week
// .getDate -> gives number of day in the month
// Important to Note that Date object is based on 0, so December is 11
function timeForMilkAndCookies(date) {
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return true;
  } else {
    return false;
  }
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2154, 11, 11))); // false
