// Hash Table - Math - String

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let skip = false;
    const nums = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};
    
    for (let i = 0; i < s.length; i++) {
        if (skip) {
            skip = false;
            continue;
        }
        const char = s.charAt(i);
        if (i == s.length - 1){
            result += nums[char];
            continue;
        }
        const nextChar = s.charAt(i + 1);
        if (nums[nextChar] > nums[char]) {
            result += nums[nextChar] - nums[char];
            skip = true;
        } else {
            result += nums[char];
        }
    }
    
    return result;    
};
// @lc code=end

