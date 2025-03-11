/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];

    for(let a of s){
        if(a !== '#'){
            stack1.push(a);
        }else{
            stack1.pop();
        }
    };

    for(let b of t){
        if(b !== '#'){
            stack2.push(b);
        }else{
            stack2.pop();
        }
    };

    return stack1.join('') === stack2.join('');
};