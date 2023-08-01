let input = [7, 1, 5, 3, 6, 4];
let secondInput = [7, 6, 4, 3, 1];
function findProfit(array) {
  let minValue = array[0];
  let indexMin = 0;
  let profit = 0;
  let indexProfit = null;
  for (let i = 1; i < array.length; i++) {
    let placeholderProfit = array[i] - minValue;

    if (array[i] < minValue) {
      minValue = array[i];
      indexMin = i;
    }
    if (placeholderProfit > profit) {
      profit = placeholderProfit;
      indexProfit = i;
    }
  }
  if (profit > 0) {
    let str = `Profit achieved: ${profit}  buy on day ${
      indexMin + 1
    } and sell on day ${indexProfit + 1}`;
    console.log(str);
  } else {
    return console.log("No transactions were done so no profit");
  }
}
findProfit(secondInput);
