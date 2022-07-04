// Math - Dynamic Programming - Recursion - Memoization

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n <= 1) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let temp = prev;
        prev = curr;
        curr = temp + curr;
    }
    return curr;
};