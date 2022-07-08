// String - Stack - Recursion

/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let stack = [];
    let cache = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ']') {
            while (stack[stack.length - 1] !== '[') {
                cache += stack.pop();
            }
            stack.pop();
            let num = '';
            while (!isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num;
            }
            cache = cache.repeat(parseInt(num));
            stack = [...stack, ...cache.split('').reverse()];
            cache = '';
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.join('');
};