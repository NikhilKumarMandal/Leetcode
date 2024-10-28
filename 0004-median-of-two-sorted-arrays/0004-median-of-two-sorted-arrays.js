/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let array = [...nums1,...nums2];
    array.sort((a,b) => a - b);
    let n = array.length;
    
    if(n % 2 !== 0){
        let mid = Math.floor(n /2);
        return array[mid]
    }else{
        let mid = Math.floor(n/2);
        let sum = array[mid] + array[mid - 1];
        return sum / 2
    }
};