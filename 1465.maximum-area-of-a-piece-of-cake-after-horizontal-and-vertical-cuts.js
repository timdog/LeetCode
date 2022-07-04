// Array - Greedy - Sorting

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    const largestSlice = (length, cuts) => {
        let max = 0;
        if (cuts.length === 0) return length;
        cuts.sort((a, b) => a - b);
        if (cuts[0] > max) max = cuts[0];
        for (let i = 1; i < cuts.length; i++) {
            if (cuts[i] - cuts[i - 1] > max) max = cuts[i] - cuts[i - 1];
        }
        if (length - cuts[cuts.length - 1] > max) max = length - cuts[cuts.length - 1];
        return max;
    };
    return (BigInt(largestSlice(h, horizontalCuts)) * BigInt(largestSlice(w, verticalCuts))) % 1000000007n;
};