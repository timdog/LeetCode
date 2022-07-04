// Math - Dynamic Programming - Combinatorics

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr[i] = Array(n).fill(1);
    }
    for (let col = 1; col < m; col++) {
        for (let row = 1; row < n; row++) {
            arr[col][row] = arr[col][row - 1] + arr[col - 1][row];
        }
    }
    return arr[m - 1][n - 1];
};