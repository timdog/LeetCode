// Array - Depth-First Search

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    const fill = (i, j, val) => {
        image[i][j] = color;
        if (i > 0 && val == image[i - 1][j]) fill(i - 1, j, val);
        if (j > 0 && val == image[i][j - 1]) fill(i, j - 1, val);
        if (i < image.length - 1  && val == image[i + 1][j]) fill(i + 1, j, val);
        if (j < image[0].length - 1 && val == image[i][j + 1]) fill(i, j + 1, val);
    }
    if (image[sr][sc] == color) return image;
    fill(sr, sc, image[sr][sc]);
    return image;
};