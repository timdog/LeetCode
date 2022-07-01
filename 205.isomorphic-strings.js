// Hash Table - String

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let sCharList = [];
    let tCharList = [];
    let sIso = [];
    let tIso = [];
    for (let i = 0; i < s.length; i++) {
        if (!sCharList.includes(s[i])) sCharList.push(s[i]);
        if (!tCharList.includes(t[i])) tCharList.push(t[i]);
    }
    for (let i = 0; i < s.length; i++) {
        sIso.push(sCharList.indexOf(s[i]));
        tIso.push(tCharList.indexOf(t[i]));
    }
    return sIso.join('.') == tIso.join('.');
};