/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     let writeIndex = 0;

//    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
//     if (nums[readIndex] !== 0) {
//         nums[writeIndex] = nums[readIndex]
//         writeIndex++
//     }
//     }
    
//     for (; writeIndex < nums.length; writeIndex++) {
//             nums[writeIndex] = 0
//     }

    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] =  nums[count];
            nums[count] = temp;
            count++
        }
    }
};