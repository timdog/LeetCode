// Math - Bit Manipulation

/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let result = 0;
    while (num > 0) {
        // Bitwise
        num = (num & 1) == 0 ? num >> 1 : num - 1;
        // Normal
        //num = num % 2 == 0 ? num / 2 : num - 1;
        result++;
    }
    return result;
};