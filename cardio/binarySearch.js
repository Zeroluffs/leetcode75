const sortedArray = [-1, 2, 3, 4, 5, 7, 8];

export function binarySearch(array, target, leftIndex, rightIndex) {
  return search(array, target, leftIndex, rightIndex);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (array[midIndex] === target) {
    return midIndex;
  }
  if (target < array[midIndex]) {
    return search(array, target, leftIndex, midIndex - 1);
  }
  if (target > array[midIndex]) {
    return search(array, target, midIndex + 1, array.length - 1);
  }
}

let index = binarySearch(sortedArray, 15, 0, sortedArray.length - 1);
