// Array - Matrix

/**
 * @param {number[][]} accounts
 * @return {number}
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(a => a.reduce((p, c) => p + c)));
};

// var maximumWealth = function(accounts) {
//     let result = 0;
//     for (let account of accounts) {
//         let wealth = account.reduce((p, c) => p + c);
//         result = wealth > result ? wealth : result;        
//     }
//     return result;
// };