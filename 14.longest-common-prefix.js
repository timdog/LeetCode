// String

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result = '';
    let end = false;
    let start = 0;
    while (!end) {
        let char = strs[0].charAt(start);
        if (char) {
            for (let i = 1; i < strs.length; i++) {
                let charMatch = strs[i].charAt(start);
                if (!charMatch || charMatch != char) {
                    end = true;
                    break;
                }
            }
        } else {
            end = true;
        }

        if (!end) result += char;
        start++;
    }
    return result;
};