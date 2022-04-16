function barista(coffees, cMachines) {
  if (coffees.length > 0) {
    // --------------------------------------------------------
    // if orders === 0, eliminate them, reduce array
    var newCoffees = [];
    for (let i = 0; i < coffees.length; i++) {
      if (coffees[i] !== 0) {
        newCoffees.push(coffees[i]);
      }
    }
    coffees = newCoffees;
    // --------------------------------------------------------
    console.log(coffees);
    // --------------------------------------------------------
    // Sort the array
    // --------------------------------------------------------

    // --------------------------------------------------------
  }
  return 0;
}

console.log(barista([0, 0, 1], 1)); // 1
// console.log(barista([2, 3, 4], 1)); // 22
// console.log(barista([2, 3, 4], 2)); // 13
// console.log(barista([2, 3, 4], 3)); // 9
