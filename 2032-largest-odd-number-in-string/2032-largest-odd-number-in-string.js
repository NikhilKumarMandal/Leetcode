/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let res = "";

    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) {
            res = num.slice(0, i + 1);
            break;
        }
    }
    return res

};