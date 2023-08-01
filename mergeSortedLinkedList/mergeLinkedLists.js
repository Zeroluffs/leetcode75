import { LinkedList } from "./LinkedList.js";
import { mergeSort } from "./mergeSortArray.js";

let linkedList1 = new LinkedList();
linkedList1.insertNode(2);
linkedList1.insertNode(3);
linkedList1.insertNode(1);

let linkedList2 = new LinkedList();
linkedList2.insertNode(4);
linkedList2.insertNode(9);
linkedList2.insertNode(10);

let mergedList = mergeList(linkedList1, linkedList2);
function mergeList(linkedList1, linkedList2) {
  let helperList = linkedList1.head;
  let copy = linkedList1;
  while (helperList.next !== null) {
    helperList = helperList.next;
  }
  helperList.next = linkedList2.head;
  helperList.head = null;
  return copy;
}

let arrayWithList = mergedList.returnArray();

arrayWithList = mergeSort(arrayWithList);

let newSortedList = new LinkedList();
for (let index in arrayWithList) {
  newSortedList.insertNode(arrayWithList[index]);
}

newSortedList.printValues();
