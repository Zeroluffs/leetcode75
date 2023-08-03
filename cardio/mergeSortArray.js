let unsortedArray = [3, 1, 5, 2, 1, 0];

export function mergeSort(unsortedArray) {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }

  let indexMid = Math.floor(unsortedArray.length / 2);

  let leftArray = unsortedArray.slice(0, indexMid);
  let rightArray = unsortedArray.slice(indexMid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort(unsortedArray));
