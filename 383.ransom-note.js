// Hash Table - String - Counting

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magazine.indexOf(ransomNote.charAt(i));
        if (index >= 0) {
            let left = magazine.slice(0, index);
            let right = magazine.slice(index + 1);
            magazine = left + right;
            continue;
        }
        return false;
    }
    return true;
};