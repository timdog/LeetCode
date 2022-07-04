// Array - Depth-First Search

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let islands = 0;
    const fillIsland = (i, j) => {
        grid[i][j] = '2';
        if (i > 0 && grid[i - 1][j] == '1') fillIsland(i - 1, j);
        if (j > 0 && grid[i][j - 1] == '1') fillIsland(i, j - 1);
        if (i < grid.length - 1  && grid[i + 1][j] == '1') fillIsland(i + 1, j);
        if (j < grid[0].length - 1 && grid[i][j + 1] == '1') fillIsland(i, j + 1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '1') {
                fillIsland(i, j);
                islands++;
            }
        }
    }
    return islands;
};