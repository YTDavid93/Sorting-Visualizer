// // In merge sort, the idea of the algorithm is to sort the smaller arrays and then combine those arrays together (merge them) in sorted order.
// // In pseudocode
// // Sort the left half of the array (assuming n > 1)
// // Sort the right half of the array (assuming n > 1)
// // Merge the two halves together

// Merge Sort implementation with steps recording
const mergeSort = (arr, steps = []) => {
  let n = arr.length;

  //base case
  if (n <= 1) {
    return arr;
  }

  // recursive case
  // sort the left half
  // sort the right half
  const middleArr = Math.floor(n / 2);

  const leftHalf = arr.slice(0, middleArr); // getting the left half portion of the divided array
  const rightHalf = arr.slice(middleArr); // getting the right half portion of the divided array

  const sortLeft = mergeSort(leftHalf, steps);
  const sortRight = mergeSort(rightHalf, steps);

  const mergedArray = merge(sortLeft, sortRight);

  steps.push({
    array: [...mergedArray],
    left: [...leftHalf],
    right: [...rightHalf],
    sortedLeft: [...sortLeft],
    sortedRight: [...sortRight],
  });

  return mergedArray;
};

const merge = (leftHalf, rightHalf) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      results.push(leftHalf[i]);
      i++;
    } else {
      results.push(rightHalf[j]);
      j++;
    }
  }

  while (i < leftHalf.length) {
    results.push(leftHalf[i]);
    i++;
  }

  while (j < rightHalf.length) {
    results.push(rightHalf[j]);
    j++;
  }

  return results;
};

// Function to visualize Merge Sort
const visualizeMergeSort = async (array, bars, delay) => {
  const steps = [];
  mergeSort(array.slice(), steps);

  for (let i = 0; i < steps.length; i++) {
    const {
      array: mergeSortArray,
      left,
      right,
      sortedLeft,
      sortedRight,
    } = steps[i];

    // Reset all bars to default color
    for (let k = 0; k < bars.length; k++) {
      bars[k].style.backgroundColor = "cyan";
    }

    // Highlight the Divide Phase
    for (let k = 0; k < bars.length; k++) {
      if (left.includes(array[k])) {
        bars[k].style.backgroundColor = "blue";
      } else if (right.includes(array[k])) {
        bars[k].style.backgroundColor = "red";
      }
    }
    await sleep(delay);

    // Highlight the Conquer Phase (sorted subarrays)
    for (let k = 0; k < bars.length; k++) {
      if (sortedLeft.includes(array[k]) || sortedRight.includes(array[k])) {
        bars[k].style.height = `${mergeSortArray[k] * 3}px`;
        console.log(bars[k].style.backgroundColor = "yellow");
      }
    }
    await sleep(delay);

    // Highlight Combine Phase (merging sorted subarrays)
    if (i < steps.length - 1) {
      const nextArray = steps[i + 1].array;
      for (let k = 0; k < bars.length; k++) {
        if (mergeSortArray[k] !== nextArray[k]) {
          bars[k].style.backgroundColor = "orange";
        }
      }
      await sleep(delay);
    }
  }

  // Set final sorted array to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green";
  }

  return Promise.resolve();
};


