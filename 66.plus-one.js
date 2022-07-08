// Array - Math

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let increment = (i) => {
        if (i < 0) {
            digits.unshift(1);
            return;
        }
        if (digits[i] + 1 == 10) {
            digits[i] = 0;
            increment(i - 1);
        } else {
            digits[i] = digits[i] + 1;
        }
    }
    increment(digits.length - 1);
    return digits;
};