let array = [2, 3, 6, 12, 4, 1];

export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let arrayLeft = array.slice(0, mid);
  let arrayRight = array.slice(mid, array.length);
  let leftSide = mergeSort(arrayLeft);
  let rightSide = mergeSort(arrayRight);
  return merge(leftSide, rightSide);
}

function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
