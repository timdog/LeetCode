// String - Stack

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    let order = [];
    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {         
            order.push(s[i]);
        } else {
            if (order[order.length - 1] != open[close.indexOf(s[i])]) {
                return false;
            }
            order.pop();
        }
    }
    return order.length === 0;
};