/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length;
    if(rows === 0) return image;
    const originalColor = image[sr][sc];
    if(originalColor === color) return image;
    const cols = image[0].length;

    function dfs(r,c){
        if(
        r < 0 || r >= rows || c < 0 || c >= cols || 
        image[r][c] !== originalColor
        ) return ;

        image[r][c] = color;

        dfs( r - 1, c )
        dfs( r + 1, c )
        dfs( r ,c - 1 )
        dfs( r ,c + 1 )
    } 
    dfs(sr,sc);
    return image
};