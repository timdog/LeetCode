// Math - String - Simulation

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let val = '';
        if (i % 3 === 0) val += 'Fizz';
        if (i % 5 === 0) val += 'Buzz';
        result.push(val == '' ? i.toString() : val);
    }
    return result;
};