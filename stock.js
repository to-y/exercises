'use strict';

let arr = [45, 24, 35, 31, 40, 38, 11];

function maxProfits (prices) {
  let profits = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currentPrice = prices[i];
      let possibleMax = prices[j];
      let possibleProfit = possibleMax - currentPrice;

      if (possibleMax > currentPrice && possibleProfit > profits) {
        profits = possibleProfit;
      }
    }
  }
return profits;
}

console.log(maxProfits(arr));




