/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


*/

function towerBuilder(nFloors) {
  const theLengthOfString = nFloors * 2 - 1;
  let theString = "*";
  var finalArrayString = [];
  for (let i = 0; i < nFloors; i++) {
    finalArrayString.push(theString);
    theString = theString + "**";
  }
  for (let i = 0; i < finalArrayString.length; i++) {
    finalArrayString[i] = finalArrayString[i]
      .padStart(
        finalArrayString[i].length +
          Math.floor((theLengthOfString - finalArrayString[i].length) / 2),
        " "
      )
      .padEnd(theLengthOfString, " ");
  }
  return finalArrayString;
}

console.log(towerBuilder(6));
