/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    let count = 0;

    function dfs(r,c){
        pos = r + "," + c;

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            visited.has(pos) ||
            grid[r][c] === "0"
        ) {
            return;
        }

        visited.add(pos)

        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === "1" && !visited.has(r + "," + c)){
                count++
                dfs(r,c)
            }
        }
    }

    return count
};

