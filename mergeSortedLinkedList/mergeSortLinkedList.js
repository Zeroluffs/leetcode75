import { LinkedList } from "./LinkedList.js";

export function mergeSort(linkedList) {
  if (!linkedList.next) {
    return linkedList;
  }

  let iterateList = linkedList;
  let leftSide = linkedList;
  let leftList = linkedList;

  let size = 0;

  while (iterateList) {
    iterateList = iterateList.next;
    size++;
  }

  let half = Math.floor(size / 2);
  let dummy = 0;
  while (dummy < half - 1) {
    leftSide = leftSide.next;
    dummy++;
  }
  let rightList = leftSide.next;
  leftSide.next = null;
  let left = mergeSort(leftList);
  let right = mergeSort(rightList);
  return merge(left, right);
}

function merge(leftSide, rightSide) {
  if (!leftSide) {
    return rightSide;
  }
  if (!rightSide) {
    return leftSide;
  }
  let list = null;
  if (leftSide.data < rightSide.data) {
    list = leftSide;
    list.next = merge(leftSide.next, rightSide);
  } else {
    list = rightSide;
    list.next = merge(leftSide, rightSide.next);
  }

  return list;
}

let linkedList1 = new LinkedList();
linkedList1.insertNode(2);
linkedList1.insertNode(3);
linkedList1.insertNode(1);
linkedList1.insertNode(5);
let sorted = mergeSort(linkedList1.head);
console.log(sorted);
while (sorted) {
  console.log(sorted.data);
  sorted = sorted.next;
}
