const unsortedArray = [9, 2, 3, 4, 5, 1];

function binarySearch(unsortedArray, value, leftIndex, rightIndex) {
  return search(unsortedArray, value, leftIndex, rightIndex);
}

function search(unsortedArray, value, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let midIndex = Math.floor(unsortedArray.length / 2);
  if (unsortedArray[midIndex] === value) {
    return midIndex;
  }

  if (value > unsortedArray[midIndex]) {
    search(
      unsortedArray,
      value,
      unsortedArray[midIndex],
      unsortedArray.length - 1,
    );
  } else {
    search(unsortedArray, value, 0, unsortedArray[midIndex]);
  }
}
const index = binarySearch(unsortedArray, 4, 0, unsortedArray.length - 1);

if (index !== -1) {
  console.log(`Value ${unsortedArray[index]} found at index ${index}`);
}
