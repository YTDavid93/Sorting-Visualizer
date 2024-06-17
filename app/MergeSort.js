// In merge sort, the idea of the algorithm is to sort the smaller arrays and then combine those arrays together (merge them) in sorted order.
// In pseudocode
// Sort the left half of the array (assuming n > 1)
// Sort the right half of the array (assuming n > 1)
// Merge the two halves together

function mergeSort(arr) {
    let n = arr.length;

    //we have to repeat this process multiple times
    // base case this means if one number quit this is the base case
    if (n <= 1)
        {
            return arr;
        }

    // recursive case
    // sort the left half
    // sort the right half
    let middleEleArr = Math.floor(n / 2);
    const leftHalf = arr.slice(0, middleEleArr); // getting the left half portion of the divided array
    const rightHalf = arr.slice(middleEleArr); // getting the right half portion of the divided array
    
    // now sort the left half and sorr the right half recursively
    const sortLeft = mergeSort(leftHalf);
    const sortRight = mergeSort(rightHalf);

    return merge(sortLeft, sortRight);
}

function merge(leftHalf, rightHalf) {
    let results = [];
    let i = 0;
    let j = 0;

    while ( i < leftHalf.length && j < rightHalf.length)
        {
            // is the lefthalf is smaller than righthalf
            if (leftHalf[i] < rightHalf[j])
                {
                    results.push(leftHalf[i]);
                    i++;
                }
            else 
            {
                results.push(rightHalf[j]);
                j++;
            }
        }
    
    // pushing the remaining element of lefthalf if any
    while ( i < leftHalf.length)
        {
            results.push(leftHalf[i]);
            i++;
        }

    // pushing the remaining element of righthalf if any
    while ( j < rightHalf.length)
        {
            results.push(rightHalf[j]);
            j++;
        }

    return results;
}
