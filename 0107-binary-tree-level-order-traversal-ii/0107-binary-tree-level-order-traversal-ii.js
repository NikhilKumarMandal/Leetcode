/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) return [];
    let queue = [ root ]
    let stack = []
    let value = []

    while(queue.length > 0){
        let levelSize = queue.length;
        let currentvalue = [];

        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()
            currentvalue.push(node.val);

            if(node.left !== null){
                queue.push(node.left)
            }

            if(node.right !== null){
                queue.push(node.right)
            }            
        }
        stack.push(currentvalue)
    }

    while(stack.length > 0){
        value.push(stack.pop())
    }

    return value

};