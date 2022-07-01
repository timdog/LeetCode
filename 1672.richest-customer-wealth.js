// Array - Matrix

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let wealths = [];
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (const w of accounts[i]) {
            wealth += w;
        }
        wealths.push(wealth);
    }
    let result = 0;
    for (let j = 0; j < wealths.length; j++) {
        result = wealths[j] > result ? wealths[j] : result;
    }
    return result;
};