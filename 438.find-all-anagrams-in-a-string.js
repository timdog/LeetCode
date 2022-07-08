// Hash Table - String - Sliding Window

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let results = []
    if (s.length < p.length) return [];
    
    let pFreq = Array(26).fill(0);
    let sFreq = Array(26).fill(0);
    
    for (let i = 0; i < p.length; i++) {
        pFreq[p.charCodeAt(i) - 'a'.charCodeAt()]++;
        sFreq[s.charCodeAt(i) - 'a'.charCodeAt()]++;
    }
    
    const n = s.length - p.length;
    const isEqual = (pFreq, sFreq) => {
        for (let i = 0; i < pFreq.length; i++) {
            if (pFreq[i] !== sFreq[i]) {
                return false;
            } 
        }
        return true;
    }
    
    for (let i = 0; i <= n; i++) {
        if (isEqual(pFreq, sFreq)) {
            results.push(i);
        }
        sFreq[s.charCodeAt(i) - 'a'.charCodeAt()]--;
        sFreq[s.charCodeAt(i + p.length) - 'a'.charCodeAt()]++;
    }
    
    return results;
};
