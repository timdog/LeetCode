// Array - Prefix Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += nums[j];
        }
        for (let k = i + 1; k < nums.length; k++) {
            rightSum += nums[k];
        }
        if (leftSum == rightSum) return i;
    }
    return -1;
};