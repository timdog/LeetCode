// Binary Search - Interactive

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n;
        while (start !== end) {
            let idx = Math.floor((end - start) / 2) + start;
            if (isBadVersion(idx)) {
                if (end - start === 1) return start;
                end = idx - 1;
            } else {
                start = idx + 1;
            }
        }
        return start !== 0 && isBadVersion(start) ? start :  start + 1;
    };
};