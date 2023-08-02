import { Stack } from "./sharedcode/Stack.js";

let inputStr = "()[[]]{}(";
let secondStr = "({}[])";
console.log(checkValid(inputStr));
function checkValid(inputStr) {
  let openStack = new Stack();
  for (let i = 0; i < inputStr.length; i++) {
    if (openStack.Length() === 0) {
      if (inputStr[i] === ")" || inputStr[i] === "]" || inputStr[i] === "}") {
        return false;
      }
      openStack.Push(inputStr[i]);
    } else {
      if (inputStr[i] === "(" || inputStr[i] === "[" || inputStr[i] === "{") {
        openStack.Push(inputStr[i]);
      } else {
        const topOpen = openStack.Peek();
        if (topOpen === "{") {
          if (inputStr[i] !== "}") {
            return false;
          }
          openStack.Pop();
        }
        if (topOpen === "(") {
          if (inputStr[i] !== ")") {
            return false;
          }
          openStack.Pop();
        }
        if (topOpen === "[") {
          if (inputStr[i] !== "]") {
            return false;
          }
          openStack.Pop();
        }
      }
    }
  }
  return openStack.Length() <= 0;
}
