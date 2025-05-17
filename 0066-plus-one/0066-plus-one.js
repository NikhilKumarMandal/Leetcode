/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp = BigInt(digits[0]);
    for(let i = 1; i < digits.length; i++){
       temp = temp * 10n +  BigInt(digits[i]);
    };

    temp = temp + 1n;
    return temp.toString().split('').map(Number);
};