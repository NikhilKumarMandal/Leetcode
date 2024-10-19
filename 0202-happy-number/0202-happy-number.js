/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function helper(n){
    let sum = 0;
    while(n > 0){
        let digits = n % 10;
        sum += digits * digits;
        n = Math.floor(n / 10);
    }
    return sum
    }
    let slow = n;
    let fast = helper(n)

    while(fast != 1 && slow !== fast){
        slow = helper(slow);
        fast = helper(helper(fast));
    }
    return fast === 1;
};