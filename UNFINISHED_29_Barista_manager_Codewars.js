// Solution from Iwbi
// https://www.codewars.com/users/Iwbi

function barista(coffees, machines) {
  coffees = coffees.filter((c) => c !== 0);
  coffees.sort((c1, c2) => c1 - c2);
  for (let i = machines; i < coffees.length; i++) {
    coffees[i] += coffees[i - machines] + 2;
  }
  return coffees.reduce((acc, el) => acc + el, 0);
}

console.log(barista([0, 0, 1], 1)); // 1
console.log(barista([4, 3, 2], 1)); // 22
console.log(barista([2, 3, 4], 2)); // 13
console.log(barista([2, 3, 4], 3)); // 9
