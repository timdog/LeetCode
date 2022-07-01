// Array - Dynamic Programming

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    let min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        if (prices[i] > min && prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    return profit;
};