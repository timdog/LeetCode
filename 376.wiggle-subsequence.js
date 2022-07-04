// Array - Dynamic Programming - Greedy

/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function(nums) {
    let i = 0;
    while (i < nums.length - 1) {
        let nextDiff = nums[i + 1] - nums[i];
        let prevDiff = nums[i] - nums[i - 1];
        if (i === 0 && nextDiff !== 0 || nextDiff * prevDiff < 0) {
            i++;
        } else {
            nums.splice(i, 1);    
        }
    }
    return nums.length;
};