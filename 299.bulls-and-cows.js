// Hash Table - String - Counting

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let map = {};
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < secret.length; i++) {
        let c = secret.charAt(i);
        map[c] = map[c] + 1 || 1;
    }
    for (let i = 0; i < guess.length; i++) {
        let c = guess.charAt(i);
        if (c in map) {
            if (c === secret[i]) {
                bulls++;
                if (map[c] <= 0) cows--;
            } else {
                cows = map[c] > 0 ? cows + 1 : cows;
            }
            map[c] = map[c] > 0 ? map[c] - 1 : map[c];
        }
    }
    return `${bulls}A${cows}B`;
};