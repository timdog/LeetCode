// Hash Table - String - Greedy

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let result = 0;
    let extra = 0;
    let hash = {};
    // Create hash table for char count
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        hash[c] = !hash.hasOwnProperty(c) ? 1 : hash[c] + 1;
    }
    for (let prop in hash) {
        let val = hash[prop];
        // If at least one hash val is odd we add 1 to the result
        if (!extra && val % 2 !== 0) extra = 1;
        // Add greatest even value that can be subtracted from val
        result += val > 1 && val % 2 === 0 ? val : val - 1;
    }
    return result + extra;
};