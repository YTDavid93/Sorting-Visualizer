// reusble swap function
const swap = (arr, indx1, indx2) => {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
};

// helper function to generate randomArray
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

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  // sorts the unsortedarray bubblesort
  const sortBtn = document.querySelector(".sort-button");
  sortBtn.addEventListener("click", () => {
    visualizeBubbleSort(unSortedArray, bars, delay);
  });

  // sorts the unsortedarray selectionsort
  const selecSortBtn = document.querySelector(".selec-button");
  selecSortBtn.addEventListener("click", () => {
     visualizeSelectionSort(unSortedArray, bars, delay)
  })

  // generates random arrays every time new array button is clicked
  const arrBtn = document.querySelector(".new-array");
  arrBtn.addEventListener("click", () => {
    unSortedArray = generateRandomArray(parseInt(arraySize.value));
    bars = document.querySelectorAll(".array-bar"); // update the bars
  });
};

main();

