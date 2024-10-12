/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const visited = new Set()
    const rows = board.length;
    if (rows === 0) return;
    const cols = board[0].length;

    function dfs(i,j){
        const pos = i + "," + j
        if (
            i < 0 || i >= rows || j < 0 || j >= cols || 
            visited.has(pos) || board[i][j] !== 'O'
        ) {
            return 
        }

        visited.add(pos);

        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }

        for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (
            (i === 0 || i === rows - 1 || j === 0 || j === cols - 1)
            && board[i][j] === 'O'
            ){
                dfs(i, j);
            }
        }
    }

    
    for(let i = 0; i < rows; i++ ){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === "O" && !visited.has(i + "," + j)){
                board[i][j] = "X";
                dfs(i,j)
            }
        }
    }
};

