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
  const middleEleArr = Math.floor(n / 2);

  const leftHalf = arr.slice(0, middleEleArr); // getting the left half portion of the divided array
  const rightHalf = arr.slice(middleEleArr); // getting the right half portion of the divided array

  const sortLeft = mergeSort(leftHalf, steps);
  const sortRight = mergeSort(rightHalf, steps);

  const mergedArray = merge(sortLeft, sortRight);

  steps.push([...mergedArray]);

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
  mergeSort(array, steps);

  for (const step of steps) {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${step[i] * 3}px`;
      bars[i].style.backgroundColor = "blue";
    }
    await sleep(delay);
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green";
  }
};
