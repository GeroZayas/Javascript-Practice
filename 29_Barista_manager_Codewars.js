function barista(coffees, cMachines) {
  // fixed time to clean coffee machine
  const cleaningTime = 2;
  // Save every waiting time per client
  let waitingTimes = [];
  //Declare var to be returned
  let totalWaitingTime = 0;
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
    // /////////// Sort the array
    // --------------------------------------------------------
    // this is to order the array from min to max
    coffees = coffees.sort(function (a, b) {
      return a - b;
    });
    // --------------------------------------------------------
    // /////////// Divide into arrays per coffee machine
    // /////////// if more than 1 coffee machine
    if (cMachines > 1) {
      function chunkArray(arr, n) {
        var chunkLength = Math.max(arr.length / n, 1);
        var chunks = [];
        for (var i = 0; i < n; i++) {
          if (chunkLength * (i + 1) <= arr.length)
            chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
        }
        return chunks;
      }
      console.log(chunkArray(coffees, cMachines));
    }
    //// JUST ONE MACHINE:
    else {
      waitingTimes.push(coffees[0]);
      // Loop through orders, starting at the 2nd and add cleaning time plus previous waiting time
      for (let i = 1; i < coffees.length; i++) {
        waitingTimes.push(coffees[i] + cleaningTime + waitingTimes[i - 1]);
      }
      // Use reduce to get total sum of waitingTimes
      totalWaitingTime = waitingTimes.reduce((a, b) => a + b, 0);
      // Return total waiting Time
      return totalWaitingTime;
    }

    // --------------------------------------------------------
  }
  return 0;
}

// console.log(barista([0, 0, 1], 1)); // 1
// console.log(barista([4, 3, 2], 1)); // 22
console.log(barista([2, 3, 4], 2)); // 13
// console.log(barista([2, 3, 4], 3)); // 9
