/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const outputArray = [];
    
    function backtrack(array, outputArray, temp = [], index = 0) {
        if (index >= array.length) {
            outputArray.push([...temp]);
            return;
        }
        
        temp.push(array[index]);
        backtrack(array, outputArray, temp, index + 1);
        temp.pop();
        backtrack(array, outputArray, temp, index + 1);
    }
    backtrack(nums, outputArray);
    
    return outputArray;

};