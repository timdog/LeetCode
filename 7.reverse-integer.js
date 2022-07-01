// Tree - Depth-First Search - Binary Search Tree - Binary Tree

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let str = Math.abs(x).toString();
    let rev = str.split('').reverse().join('');
    let revInt = parseInt(rev);
    let result = x < 0 ? revInt * -1 : revInt;
    return result > Math.pow(2,31) - 1 || result < Math.pow(-2,31) ? 0 : result;
};