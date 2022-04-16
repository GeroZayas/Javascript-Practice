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
    // /////////// ////// Sort the array
    // --------------------------------------------------------
    // this is to order the array from min to max
    coffees = coffees.sort(function (a, b) {
      return a - b;
    });
    // --------------------------------------------------------
    // /////////// ////// Divide into arrays
    // --------------------------------------------------------
  }
  return 0;
}

// console.log(barista([0, 0, 1], 1)); // 1
console.log(barista([4, 3, 2], 1)); // 22
// console.log(barista([2, 3, 4], 2)); // 13
// console.log(barista([2, 3, 4], 3)); // 9
