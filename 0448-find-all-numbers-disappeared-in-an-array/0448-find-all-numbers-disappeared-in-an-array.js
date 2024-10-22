/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const set = new Set(nums);  
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            result.push(i); 
        }
    }

    return result;
};