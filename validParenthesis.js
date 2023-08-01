class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  length() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
}
let inputStr = "()[[]]{}(";
let secondStr = "({}[])";
console.log(checkValid(inputStr));
function checkValid(inputStr) {
  let openStack = new Stack();
  for (let i = 0; i < inputStr.length; i++) {
    if (openStack.length() === 0) {
      if (inputStr[i] === ")" || inputStr[i] === "]" || inputStr[i] === "}") {
        return false;
      }
      openStack.push(inputStr[i]);
    } else {
      if (inputStr[i] === "(" || inputStr[i] === "[" || inputStr[i] === "{") {
        openStack.push(inputStr[i]);
      } else {
        const topOpen = openStack.peek();
        if (topOpen === "{") {
          if (inputStr[i] !== "}") {
            return false;
          }
          openStack.pop();
        }
        if (topOpen === "(") {
          if (inputStr[i] !== ")") {
            return false;
          }
          openStack.pop();
        }
        if (topOpen === "[") {
          if (inputStr[i] !== "]") {
            return false;
          }
          openStack.pop();
        }
      }
    }
  }
  return openStack.length() <= 0;
}
