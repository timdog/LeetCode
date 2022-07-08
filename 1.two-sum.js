// Array - Hash Table

var twoSum = function(nums, target) {
    // Brute Force
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

var twoSum = function(nums, target) {
    // One-pass Hash Table
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) return [i, map[diff]];
        map[nums[i]] = i;
    }
};

