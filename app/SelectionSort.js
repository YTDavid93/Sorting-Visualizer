// algorithm details
// In selection sort, the idea of the algorithm is to find the samlled unsorted element and add it to the end of the sorted list

// In pseudocode:
// Repeat until no unsorted elements remain:
// Search the unsorted part of the data to find the smallest value
// swap the smallest found value with the first element of the unsorted

const selectionSort = (arr) => {
  const steps = [];
  const n = arr.length;
  // const bars = document.querySelectorAll(".array-bar")

  // we didn't execute loop till last because by defualt one element is always sorted
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      steps.push({ array: [...arr],minIndex, comparison: [j], swap: null }); // comparison takes place
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(arr, i, minIndex);
      steps.push({ array: [...arr], minIndex, comparison: null, swap:[i, minIndex] }); // swaps the value
    }
  }

  return steps;
};

const visualizeSelectionSort = async (array, bars, delay) => {
  const steps = selectionSort(array);
  let previousMinIndex = null

  for (const step of steps) {
    const { array: selectionSortArr, minIndex, comparison, swap } = step;
    for (let i = 0; i < bars.length; i++) {
      // Highlight the minimum index
      if (previousMinIndex !== null && previousMinIndex !== minIndex) {
        console.log("previousMinIndex")
        bars[previousMinIndex].style.background = ""; // Reset previous minindex color
      }
      // lets try to highlight the minumum index at first how will you approach this problem
      if (minIndex === i) {
        console.log("minIndex")
        bars[i].style.background = "blue";
      }

      if (comparison && comparison.includes(i)) {
        console.log("comparison")
        bars[i].style.background = "yellow";
      }

      if (swap && (i === swap[0] || i === swap[1])) {
        console.log("swap")
        bars[i].style.background = "red"; // Highlight elements being swapped
      }

      bars[i].style.height = `${selectionSortArr[i] * 3}px`;
    }

    previousMinIndex = minIndex;

    await sleep(delay);

    // Reset comparison and swap highlights
    for (let i = 0; i < bars.length; i++) {
      if (!swap || (i !== swap[0] && i !== swap[1])) {
        console.log("reset")
        bars[i].style.background = "";
      }
    }
  }

  // after storing is complete, set all bars to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }
};
