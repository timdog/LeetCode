// Two Pointers - String - Dynamic Programming

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let sIdx = 0;
    let tIdx = 0;
    while (sIdx < s.length && tIdx < t.length) {
        if (s.charAt(sIdx) == t.charAt(tIdx)) sIdx++
        tIdx++
    }
    return sIdx == s.length;
};