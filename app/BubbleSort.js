// In bubble sort, the idea of the alorithm is to move higher valued element to the right and lower values elements towards the left

// pseudocode:
// Set swap counter to a non-zero value
// Repeat until the swap counter is 0:
// Reset swap counter to 0
// Look at each adjacent pair
// If two adjacent elements are not in order, swap them and add one to the swap
// counter

const bubbleSort = (arr) => {
  const steps = []; // to store the state of the array after each swap
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      console.log("In j loop");
      if (arr[j] > arr[j + 1]) {
        //swap the values
        swap(arr, j, j + 1);
        // Record the step
        steps.push({ array: [...arr], compared: [j, j + 1] }); // Push the copy of the array
      }
    }
  }
  return steps;
};

const visualizeBubbleSort = async (array, bars, delay) => {
  const steps = bubbleSort(array);

  for (const step of steps) {
    const { array: comparedArray, compared } = step;

    for (let i = 0; i < bars.length; i++) {
      if (bars[i].style.background !== "green") {
        bars[i].style.background = "cyan";
      }

      // in comparison color changes
      if (i === compared[0] || i === compared[1]) {
        bars[i].style.background = "blue";
      }

      // update bar height
      bars[i].style.height = `${comparedArray[i] * 3}px`;
    }
    await sleep(delay);
  }

  // after all the sorting is done change it to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }

  return Promise.resolve();
};
