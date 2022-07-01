// Stack - Tree - Depth-First Search

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let result = [];
    const traverse = function(node) {
        if (!node) return;
        result.push(node.val);
        for (let child of node.children) {
            traverse(child);
        }
    }
    traverse(root);
    return result;
};