/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;
    let minPrice = Infinity;

    for(const price of prices){
        minPrice = Math.min(minPrice,price);
        const potentialProfit = price - minPrice;
        maxProfit = Math.max(maxProfit,potentialProfit)
    }

    return maxProfit
     
};