

// algorithm details
// In selection sort, the idea of the algorithm is to find the samlled unsorted element and add it to the end of the sorted list

// In pseudocode:
// Repeat until no unsorted elements remain:
// Search the unsorted part of the data to find the smallest value
// swap the smallest found value with the first element of the unsorted


const selectionSort = (arr) => {
  const steps = [];
  const n = arr.length;

  // we didn't execute loop till last because by defualt one element is always sorted
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(arr, i ,minIndex)
      steps.push([...arr]); //push the copy of array
    }
  }

  return steps;
};

const visualizeSelectionSort = async (array, bars, delay) =>
{
  const steps = selectionSort(array);
  console.log("selection sort", steps)

  for (const step of steps) {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${step[i] * 3}px`;
      bars[i].style.background = "blue";
    }
    await sleep(delay);
  }

  // after storing is complete, set all bars to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }
}
