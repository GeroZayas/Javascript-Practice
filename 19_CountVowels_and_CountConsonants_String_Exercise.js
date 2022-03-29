
// a funtions that takes in a string and returns the number of vowels in the string
// vowels are a, e, i, o, u

function countVowels(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // Output:  2

function countConsonants(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("hello")); // Output:  3

console.log(countConsonants("javascript")); // Output:  7
