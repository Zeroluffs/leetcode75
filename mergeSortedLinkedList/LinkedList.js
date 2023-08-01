export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList {
  size = 0;
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.size++;
    } else {
      let helper = this.head;
      while (helper.next !== null) {
        helper = helper.next;
      }
      helper.next = new Node(data);
      this.size++;
    }
  }
  printValues() {
    let helper = this.head;

    while (helper) {
      console.log(helper.data);
      helper = helper.next;
    }
  }
  returnArray() {
    let helper = this.head;
    let array = [];
    while (helper) {
      array.push(helper.data);
      helper = helper.next;
    }
    return array;
  }
}
