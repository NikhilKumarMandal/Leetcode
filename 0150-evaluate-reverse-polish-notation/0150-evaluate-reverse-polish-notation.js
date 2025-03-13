/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let s of tokens){
        if(s === "+"){
            stack.push(stack.pop() + stack.pop());
        }else if(s === "-" ){
            let a = stack.pop();
            let b = stack.pop();

            stack.push(b - a);
        }else if(s === "/"){
            let a = stack.pop();
            let b = stack.pop();

            stack.push(Math.trunc(b / a));
        }else if(s === "*"){
            stack.push(stack.pop() * stack.pop());
        }else{
            stack.push(parseInt(s))
        }
    };

    return stack[0]
};