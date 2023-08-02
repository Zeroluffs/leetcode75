import { Stack } from "./sharedcode/Stack.js";

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
