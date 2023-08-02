export class Stack {
  constructor() {
    this.items = [];
  }
  Push(item) {
    this.items.push(item);
  }
  Pop() {
    if (this.items.length === 0) {
      return "Stack Underflow";
    }
    return this.items.pop();
  }
  Peek() {
    return this.items[this.items.length - 1];
  }
  Length() {
    return this.items.length;
  }
}
