/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;

    let expectedSum = (n * (n + 1)) /2

    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }

    return expectedSum - sum
};