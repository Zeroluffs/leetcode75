class Stack {
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
let str = "race a car";
console.log(isValid(str));
function isValid(str) {
  let strStack = new Stack();
  let formattedStr = str.replace(/\W/g, "");
  formattedStr = formattedStr.toLowerCase();
  for (let char of formattedStr) {
    strStack.Push(char);
  }
  let isPalindrome = true;
  let i = 0;
  while (isPalindrome && i < strStack.Length()) {
    if (formattedStr[i] === strStack.Peek()) {
      strStack.Pop();
      i++;
    } else {
      isPalindrome = !isPalindrome;
    }
  }
  return isPalindrome;
}
