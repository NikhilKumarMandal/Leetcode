/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount,memo = {}) {
    if(amount in memo) return memo[amount];
    if(amount === 0) return 0;
    if(amount  < 0) return -1;
    let count = Infinity
    
    for(const num of coins){
        let result = coinChange(coins,amount-num,memo);
        if (result === -1) continue;
        count = Math.min(count, 1 + result);
    }
    
    memo[amount] = count === Infinity ? -1 : count;
    
    return memo[amount]
    
};