// In bubble sort, the idea of the alorithm is to move higher valued element to the right and lower values elements towards the left

// pseudocode:
// Set swap counter to a non-zero value
// Repeat until the swap counter is 0:
// Reset swap counter to 0
// Look at each adjacent pair
// If two adjacent elements are not in order, swap them and add one to the swap
// counter

function main() {
  const arr = [5, 2, 1, 3, 6, 4];
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

  for (let i = 0; i < n; i ++)
    {
        console.log("Sorted array:", i, arr[i]);
    }
}

main();
