const arrayN = [1, 2, 3, 9, 11, 6, 7, 8, 9];

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
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

const arrayM = [1, 4, 3, 2];
const sortedArray = mergeSort(arrayM);
console.log(sortedArray);
const s = "rat";
const t = "car";

function isAnagram(s, t) {
  const sArray = [...s];
  const tArray = [...t];

  const sortedS = mergeSort(sArray);
  const sortedT = mergeSort(tArray);
  console.log(sortedS.join(""));
  return sortedS.join("") === sortedT.join("");
}

const res = isAnagram(s, t);

console.log(res ? "It is anagram" : "It is not anagram");
