// In bubble sort, the idea of the alorithm is to move higher valued element to the right and lower values elements towards the left

// pseudocode:
// Set swap counter to a non-zero value
// Repeat until the swap counter is 0:
// Reset swap counter to 0
// Look at each adjacent pair
// If two adjacent elements are not in order, swap them and add one to the swap
// counter

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap the values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function main() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(arr);
  console.log(sortedArray);
}

main()