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

// disable Button function
const disableSortingBtns = () => {
  document.querySelector(".sort-button").disabled = true;
  document.querySelector(".selec-button").disabled = true;
  document.querySelector(".insert-button").disabled = true;
  document.querySelector(".merge-button").disabled = true;
};

// enable button function
const enableSortingBtns = () => {
  document.querySelector(".sort-button").disabled = false;
  document.querySelector(".selec-button").disabled = false;
  document.querySelector(".insert-button").disabled = false;
  document.querySelector(".merge-button").disabled = false;
};

// disable size slider
const disableSizeSlider = () => {
  document.getElementById("arr_size").disabled = true;
};

// enable size slider
const enableSizeSlider = () => {
  document.getElementById("arr_size").disabled = false;
};

//disable new array btn
const enableArrBtn = () => {
  document.querySelector(".new-array").disabled = false;
};

// enable array btn
const disableArrBtn = () => {
  document.querySelector(".new-array").disabled = true;
};

const main = () => {
  const arraySize = document.getElementById("arr_size");
  const arraySpeed = document.getElementById("speed_input");

  let unSortedArray = generateRandomArray(parseInt(arraySize.value));
  let bars = document.querySelectorAll(".array-bar");

  // let user choose their array size
  arraySize.addEventListener("input", () => {
    // disableSizeSlider();
    unSortedArray = generateRandomArray(parseInt(arraySize.value));
    bars = document.querySelectorAll(".array-bar"); // update the bars
    // enableSizeSlider();
  });

  // let user to increase their speed of sorting algorithm
  let delay = 260;
  arraySpeed.addEventListener("input", () => {
    delay = 320 - parseInt(arraySpeed.value);
  });

  // sorts the unsortedarray bubblesort
  const sortBtn = document.querySelector(".sort-button");
  sortBtn.addEventListener("click", async () => {
    disableSortingBtns();
    disableSizeSlider();
    disableArrBtn();
    await visualizeBubbleSort(unSortedArray, bars, delay);
    enableSortingBtns();
    enableSizeSlider();
    enableArrBtn();
  });

  // sorts the unsortedarray selectionsort
  const selecSortBtn = document.querySelector(".selec-button");
  selecSortBtn.addEventListener("click", async () => {
    disableSortingBtns();
    disableSizeSlider();
    disableArrBtn();
    await visualizeSelectionSort(unSortedArray, bars, delay);
    enableSortingBtns();
    enableSizeSlider();
    enableArrBtn();
  });

  // sorts the unsortedarray InsertionSort
  const inserSortBtn = document.querySelector(".insert-button");
  inserSortBtn.addEventListener("click", async () => {
    disableSortingBtns();
    disableSizeSlider();
    disableArrBtn();
    await visualizeInsertionSort(unSortedArray, bars, delay);
    enableSortingBtns();
    enableSizeSlider();
    enableArrBtn();
  });

  //sorts the unsortedArray Merge Sort
  const mergeSortBtn = document.querySelector(".merge-button");
  mergeSortBtn.addEventListener("click", async () => {
    disableSortingBtns();
    disableSizeSlider();
    disableArrBtn();
    await visualizeMergeSort(unSortedArray, bars, delay);
    enableSortingBtns();
    enableSizeSlider();
    enableArrBtn();
  });

  // generates random arrays every time new array button is clicked
  const arrBtn = document.querySelector(".new-array");
  arrBtn.addEventListener("click", () => {
    unSortedArray = generateRandomArray(parseInt(arraySize.value));
    bars = document.querySelectorAll(".array-bar"); // update the bars
  });
};

main();
