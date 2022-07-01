// Array - Hash Table

/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let found = false;
    for (let j = 0; j < nums.length && !found; j++) {
        for (let k = j + 1; k < nums.length && !found; k++) {
            if (nums[j] + nums[k] === target) {
                result.push(...[j, k]);
                found = true;
            }
        }
    }
    return result;
};
// @lc code=end

