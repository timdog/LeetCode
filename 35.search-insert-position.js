// Array - Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) return i;
        if (target > nums[i]) idx = i + 1;
    }
    return idx;
};