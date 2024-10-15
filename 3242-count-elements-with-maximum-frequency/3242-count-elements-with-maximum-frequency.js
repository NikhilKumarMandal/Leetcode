/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let maxNum = nums[0];
        
        for (let i of nums) {
            if (maxNum <= i) maxNum = i;
        }
        
        const freq = new Array(maxNum + 1).fill(0);
        
        for (let num of nums) {
            freq[num]++;
        }
        
        let maxFreq = freq[0];
        for (let i of freq) {
            if (maxFreq <= i) maxFreq = i;
        }
        
        let total = 0;
        for (let i of freq) {
            if (i === maxFreq) {
                total += i;
            }
        }
        
        return total;
};
