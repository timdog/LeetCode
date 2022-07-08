// Hash Table - String - Trie - Sorting - Heap (Priority Queue) - Bucket Sort - Counting

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let map = [];
    for (let w of words) {
        let word = map.find(m => m.key === w);
        if (!word) {
            map.push({ key: w, value: 1 })
        } else {
            word.value += 1;
        }
    }
    map = map.sort((a, b) => (b.value - a.value || a.key.localeCompare(b.key))).splice(0, k);
    return map.map(m => m.key);
};