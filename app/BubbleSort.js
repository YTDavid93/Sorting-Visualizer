// In bubble sort, the idea of the alorithm is to move higher valued element to the right and lower values elements towards the left

// pseudocode:
// Set swap counter to a non-zero value
// Repeat until the swap counter is 0:
// Reset swap counter to 0
// Look at each adjacent pair
// If two adjacent elements are not in order, swap them and add one to the swap
// counter

// function to generate randomArray
function generateRandomArray() {
  const randomArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  const arrayContainer = document.getElementById("array-container");

  arrayContainer.innerHTML = "";

  randomArray.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("array-bar");
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  });

  return randomArray;
}

function bubbleSort(arr) {
  const steps = []; // to store the state of the array after each swap
  const n = arr.length;

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
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function visualizeBubbleSort(array, bars) {
  const steps = bubbleSort(array);

  for (const step of steps) {
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = `${step[i] * 3}px`;
      bars[i].style.background = "blue";
    }
    await sleep(500); // Wait for 500 milliseconds before the next step
  }

  // after storing is complete, set all bars to green
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
  }
}

function main() {
  let unsortedArray = generateRandomArray();
  let bars = document.querySelectorAll(".array-bar");

  const sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", () => {
    visualizeBubbleSort(unsortedArray, bars);
  });

  const arrayBtn = document.querySelector(".new-array");
  arrayBtn.addEventListener("click", () => {
     unsortedArray = generateRandomArray();
     console.log(unsortedArray);
     bars = document.querySelectorAll(".array-bar");
  });
}

main();
