/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    function getLeafNodes(root,leafNode){
        if(!root) return;

        if(!root.left && !root.right){
            leafNode.push(root.val)
        }

        getLeafNodes(root.left,leafNode)
        getLeafNodes(root.right,leafNode)
    };

    let leafNode1 = [];
    let leafNode2 = [];

    getLeafNodes(root1,leafNode1)
    getLeafNodes(root2,leafNode2)

    if (leafNode1.length !== leafNode2.length) return false;

    for (let i = 0; i < leafNode1.length; i++) {
        if (leafNode1[i] !== leafNode2[i]) {
            return false;
        }
    }

    return true;

};