/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let largestProduct = -Infinity;
    let leftProduct = 1, rightProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        leftProduct *= nums[i];
        largestProduct = Math.max(largestProduct, leftProduct);
        console.log(largestProduct)
        
        if (leftProduct === 0) leftProduct = 1;
        
        rightProduct *= nums[nums.length - 1 - i];
        largestProduct = Math.max(largestProduct, rightProduct);
        console.log(largestProduct)

        if (rightProduct === 0) rightProduct = 1;
    }

    return largestProduct;
};