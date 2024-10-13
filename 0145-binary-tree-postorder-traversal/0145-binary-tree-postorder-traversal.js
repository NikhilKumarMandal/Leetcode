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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(root === null) return [];
  let stack = [root];
  let result = [];
  let finalResult = [];

  while (stack.length > 0) {
    const node = stack.pop(); 
    result.push(node.val); 

    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

    while (result.length > 0) {
        finalResult.push(result.pop());
    }

    return finalResult
};