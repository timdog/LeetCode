// Array - Two Pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let readIdx = 1;
    let writeIdx = 1;
    while(readIdx < nums.length) {
        if (nums[readIdx] === nums[readIdx - 1]) {
            readIdx++;
            continue;
        }
        nums[writeIdx] = nums[readIdx];
        readIdx++;
        writeIdx++;
    }
    return writeIdx;
};