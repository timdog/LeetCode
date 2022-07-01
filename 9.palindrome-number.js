// Math

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    let str = x.toString();
    let strRev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str.charAt(i);
    }    
    return strRev == x;
};