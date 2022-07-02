// Tree - Depth-First Search - Binary Search Tree - Binary Tree

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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const isValidNode = (node, min = -Infinity, max = Infinity) => {
        let leftValid = !node.left || isValidNode(node.left, min, node.val);
        let rightValid = !node.right || isValidNode(node.right, node.val, max);
        return leftValid && rightValid && node.val < max && node.val > min;
    }
    return isValidNode(root);
};