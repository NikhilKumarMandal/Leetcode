/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positives = [];
    let negatives = [];
    
    for (let num of nums) {
        if (num > 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }
    
    let result = [];
    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i]);
        result.push(negatives[i]);
    }
    
    return result;

};