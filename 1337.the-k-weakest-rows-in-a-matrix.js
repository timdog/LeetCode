// Array - Binary Search - Sorting - Heap (Priority Queue) - Matrix

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let results = [];
    let rowIds = [];
    let rowStrengths = [];
    for (let i = 0; i < mat.length; i++) {
        rowIds.push(i);
        let strVal = 0;
        for (let j = 0; j < mat[i].length; j++) {
            strVal += mat[i][j];
        }
        rowStrengths.push(strVal);
    }
    for (let l = 0; l < k; l++) {
        let min = Infinity;
        for (let m = 0; m < rowStrengths.length; m++) {
            min = rowStrengths[m] < min ? rowStrengths[m] : min;
        }
        let id = rowStrengths.indexOf(min);
        results.push(rowIds[id]);
        rowStrengths.splice(id, 1);
        rowIds.splice(id, 1);
    }
    return results;
};