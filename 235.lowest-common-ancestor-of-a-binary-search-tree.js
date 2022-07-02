// Tree = Depth-First Search - Binary Search Tree - Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const evaluateNode = (node, p, q) => {
        if (p.val > node.val && q.val > node.val) {
            // P an Q are greater than parent - traverse right
            return evaluateNode(node.right, p, q);
        } else if (p.val < node.val && q.val < node.val) {
            // P and Q are less than parent - traverse left
            return evaluateNode(node.left, p, q);
        } else {
            // Current node is the split point or descendant of itself
            return node;
        }
    }
    return evaluateNode(root, p, q);
};