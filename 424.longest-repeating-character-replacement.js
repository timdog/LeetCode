// Hash Table - String - Sliding Window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let map = {};
    let max = 0;
    let maxCount = 0;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        const c = s[right];
        map[c] = map[c] + 1 || 1;
        maxCount = Math.max(maxCount, map[c]);
        while (right - left + 1 - maxCount > k) {
            map[s[left]]--;
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};