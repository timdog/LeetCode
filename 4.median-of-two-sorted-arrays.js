// Array - Binary Search - Divide and Conquer

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a,b)=> a - b);
    let len = merged.length;
    return len % 2 === 0 
        ? (merged[len / 2] + merged[(len / 2) - 1]) / 2
        : merged[(len - 1) / 2];
};