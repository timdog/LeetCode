// Math - Binary Search

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x <= 1) return x;
    let square = 1;
    while(square <= x) {
        if (square * square > x) {
            return square - 1;
        } else {
            square++;
        }
    }
};