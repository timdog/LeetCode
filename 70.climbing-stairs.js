// Math - Dynamic Programming - Memoization

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 1) return 1;
    let curr = 1
    let next = 2;
    for (let i = 3; i <= n; i++) {
        let temp = curr + next;
        curr = next;
        next = temp;
    }
    return next;
};