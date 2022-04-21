// How to use sort()

/*The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.*/

var arrNums = [4, 2, 8, 5, 0, 9, 5, 4, 3, 7];

// this sorts the numbers from min to max
const sortedArr = arrNums.sort((a, b) => a - b);

console.log(sortedArr); // [0, 2, 3, 4, 4, 5, 5, 7, 8, 9]
