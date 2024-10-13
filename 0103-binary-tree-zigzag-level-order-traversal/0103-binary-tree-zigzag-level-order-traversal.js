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
var zigzagLevelOrder = function(root) {
     if (root === null) return [];

    let stack1 = [root];
    let stack2 = [];
    let result = [];
    let leftToRight = true;

    while(stack1.length > 0){
        let currentValue = [];

         while (stack1.length > 0) {
            let node = stack1.pop();
            if (node !== null) {
                currentValue.push(node.val);
                if (leftToRight) {
                    if (node.left !== null) stack2.push(node.left);
                    if (node.right !== null) stack2.push(node.right);
                } else {
                    if (node.right !== null) stack2.push(node.right);
                    if (node.left !== null) stack2.push(node.left);
                }
            }
        }
        

        if(currentValue.length > 0){
            result.push(currentValue)
        }

        stack1 = stack2;
        stack2 = [];
        leftToRight = !leftToRight;
    }
    return result
}
