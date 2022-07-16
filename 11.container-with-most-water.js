// Array - Two Pointers - Greedy

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = Math.min(height[left], height[right]) * (right - left);
    let prevL = left;
    let prevR = right;
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
        } else if (height[left] > height[right]) {
            right--;
        } else {
            left++;
            right--;
        }
        if (height[left] > height[prevL] || height[right] > height[prevR] ) {
            let vol = Math.min(height[left], height[right]) * (right - left);
            max = vol > max ? vol : max;
            prevL = left;
            prevR = right;
        }
    }
    return max;
};