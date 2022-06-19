/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = [];
    let i = 0;
    let n = num;
    const l = ["M", "D", "C", "L", "X", "V", "I"];
    const v = [1000, 500, 100, 50, 10, 5, 1];
    while (n > 0) {
        if (n >= v[i]) {
            if (i > 0) {
                const mid = v[i-1] / v[i] === 2;
                const nextI = mid ? i + 1 : i;
                const prevI = i - 1;
                const sub = v[prevI] - v[nextI];
                if (n >= sub) {
                    n = n - sub;
                    result.push(...[l[nextI], l[prevI]]);
                    i = mid ? i + 2 : i + 1;
                } else {
                    n = n - v[i];
                    result.push(l[i]);
                }
                continue;
            }
            n = n - v[i];
            result.push(l[i]);
            continue;
        }
        i++;
    }
    return result.join('');    
};
// @lc code=end

