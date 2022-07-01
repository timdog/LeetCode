// Array - Prefix Sum

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let k = 0;
        for (let j = i; j >= 0; j--) {
            k += nums[j];
        }
        result.push(k);
    }
    return result;
};