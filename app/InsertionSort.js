const insertionSort = (arr) => {
  const steps = [];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1; // to exit from the while loop
    }
    arr[j + 1] = key;
    steps.push([...arr]);
  }
  return steps;
};

const visualizeInsertionSort = async (arr, bars, delay) => {
  const steps = insertionSort(arr);

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
};
