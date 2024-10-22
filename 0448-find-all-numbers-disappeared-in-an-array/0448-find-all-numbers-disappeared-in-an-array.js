/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
     const n = nums.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }

    
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};