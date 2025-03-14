/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';


    for(let char of s){

        if(char >= '0' && char <= '9'){
            currentNum = currentNum * 10 + (char - '0');
        }else if(char === '['){
            stack.push(currentNum);
            stack.push(currentStr);

            currentNum = 0;
            currentStr = '';
        }else if(char === ']'){
            let prevStr = stack.pop();
            let prevNum = stack.pop();

            currentStr = prevStr + currentStr.repeat(prevNum)
        }else{
            currentStr += char
        }
    };

    return currentStr;

};