// Hash Table - String - Sliding Window

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let sub = '';
    let idx = 0;
    while (idx < s.length) {
        let char = s.charAt(idx);
        let subIdx = sub.indexOf(char);
        if (subIdx < 0) {
            sub += char;
            result = sub.length > result ? sub.length : result;
            idx++;
        } else {
            idx = idx - (sub.length - 1 - subIdx);
            sub = s[idx];
            idx++;
        }
    }
    return result;
};
    