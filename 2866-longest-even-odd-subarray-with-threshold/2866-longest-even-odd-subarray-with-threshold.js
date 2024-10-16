/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let res = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold || nums[i] % 2 !== 0) continue;

        let count = 1; 

        for (let j = i + 1; j < nums.length; j++) {
            if (
                (nums[j] % 2 === 0 && nums[j - 1] % 2 !== 0) || 
                (nums[j] % 2 !== 0 && nums[j - 1] % 2 === 0)
            ) {
                if (nums[j] > threshold) break;  
                count++; 
            } else {
                break;  
            }
        }

        res = Math.max(res, count); 
    }

    return res;
};