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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(root === null) return [];
    let array = []

    function dfs(root,targetSum,path){
       if (root === null) return false;

        path.push(root.val);

        if (root.left === null && 
        root.right === null && 
        targetSum === root.val
        ) {
            array.push([...path]); 
        }

        if (root.left !== null) {
            dfs(root.left, targetSum - root.val, path);
        }

        if (root.right !== null) {
            dfs(root.right, targetSum - root.val, path);
        }
        path.pop();
    }
    dfs(root,targetSum,[])

    return array

};