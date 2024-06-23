const insertionSort = (arr) => {
  const steps = [];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      // compare
      arr[j + 1] = arr[j];
      // swaps takes place
      steps.push({array: [...arr], comparison: [j+1, j]}); // for visualization comparison takes place
      j--; // to exit from the while loop
    }
    
    // place the key in current positions
    arr[j + 1] = key;
    // record the swap steps
    steps.push({array: [...arr], comparison: null, swap: [j+1, i]}); // for visualization swap takes place
  }
  return steps;

};

const visualizeInsertionSort = async (arr, bars, delay) => {
  const steps = insertionSort(arr);

  for (const step of steps) {
    const { array: insertionSortArray, comparison, swap} = step;
    console.log(insertionSortArray)
    for (let i = 0; i < bars.length; i++) {

      // reset all the bars of default color 
      bars[i].style.background = "cyan";

      if (comparison && comparison.includes(i))
        {
          bars[i].style.background = "blue";
          console.log("comparison takes place")
        }

      if (swap && swap.includes(i))
        {
          bars[i].style.background = "yellow";
          console.log("swap takes place")
        }

      bars[i].style.height = `${insertionSortArray[i] * 3}px`;
    }
    await sleep(delay);
  }

  // after storing is complete, set all bars to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }

  return Promise.resolve();
};
