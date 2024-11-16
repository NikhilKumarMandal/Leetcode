/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = ''
    let index = 0

    for(let char of s){
        if(char === '('){
            if(index  > 0){
                res += char
            }
            index++
        }else if(char === ")"){
            index--;
             if (index > 0) {
                res += char;
            }
        }
    }

    return res
};