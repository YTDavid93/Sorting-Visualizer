// In bubble sort, the idea of the alorithm is to move higher valued element to the right and lower values elements towards the left

// pseudocode:
// Set swap counter to a non-zero value
// Repeat until the swap counter is 0:
// Reset swap counter to 0
// Look at each adjacent pair
// If two adjacent elements are not in order, swap them and add one to the swap
// counter

// function to generate randomArray
const generateRandomArray = (size) => {
  const randomArray = Array.from({ length: size }, () =>
    Math.floor(Math.random() * 100)
  );
  const arrayContainer = document.getElementById("array-container");

  arrayContainer.innerHTML = "";

  randomArray.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add(`array-bar`);
    bar.classList.add(`bar${index}`);
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  });

  return randomArray;
};

const bubbleSort = (arr) => {
  const steps = []; // to store the state of the array after each swap
  const n = arr.length;
  const bars = document.querySelectorAll(".array-bar");

  for (let i = 0; i < n; i++) {
    console.log("In i loop");
    for (j = 0; j < n - i - 1; j++) {
      console.log("In j loop");
      if (arr[j] > arr[j + 1]) {
        //swap the values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // Record the step
        steps.push([...arr]); // Push the copy of the array
      }
    }
  }
  return steps;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const visualizeBubbleSort = async (array, bars, delay) => {
  const steps = bubbleSort(array);

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

const main = () => {
  const arraySize = document.getElementById("arr_size");
  const arraySpeed = document.getElementById("speed_input");

  let unSortedArray = generateRandomArray(parseInt(arraySize.value));
  let bars = document.querySelectorAll(".array-bar");

  // let user choose their array size
  arraySize.addEventListener("input", () => {
    unSortedArray = generateRandomArray(parseInt(arraySize.value));
    bars = document.querySelectorAll(".array-bar"); // update the bars
  });

  // let user to increase their speed of sorting algorithm
  let delay = 260;
  arraySpeed.addEventListener("input", () => {
    console.log(arraySpeed.value, typeof arraySpeed.value);
    delay = 320 - parseInt(arraySpeed.value);
  });

  // sorts the unsortedarray
  const sortBtn = document.querySelector(".sort-button");
  sortBtn.addEventListener("click", () => {
    visualizeBubbleSort(unSortedArray, bars, delay);
  });

  // generates random arrays every time new array button is clicked
  const arrBtn = document.querySelector(".new-array");
  arrBtn.addEventListener("click", () => {
    unSortedArray = generateRandomArray(parseInt(arraySize.value));
    bars = document.querySelectorAll(".array-bar"); // update the bars
  });

};

main();
