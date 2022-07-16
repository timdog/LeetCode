// Math - String - Bit Manipulation - Simulation

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let maxLength = Math.max(a.length, b.length);
    // Pad the shorter string so both lengths are the same
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    let result = '';
    let carry = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
        result = (sum >= 2 ? (sum - 2).toString() : sum) + result;
        carry = sum >= 2 ? 1 : 0;
    }
    if (carry > 0) result = '1' + result;
    return result;
};