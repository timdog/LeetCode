// Two Pointers - String - Stack - Simulation

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const processString = (str) => {
        let idx = 0;
        while (idx < str.length) {
            if (str.charAt(idx) !== '#') {
                idx++;
            } else if (idx === 0) {
                str = str.slice(1);
            } else {
                str = str.slice(0, idx - 1) + str.slice(idx + 1);
                idx--;
            }
        }
        return str;
    }
    return processString(s) === processString(t);
};