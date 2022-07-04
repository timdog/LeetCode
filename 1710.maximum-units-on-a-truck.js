// Array - Greedy - Sorting

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let units = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
        while (boxTypes[i][0] > 0 && truckSize > 0) {
            units += boxTypes[i][1];
            boxTypes[i][0] -= 1;
            truckSize--;
        }
    }
    return units;
};