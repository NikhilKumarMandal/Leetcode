/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
    let row = new Array(r).fill(0);
    let col = new Array(c).fill(0);

    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            if(matrix[i][j] === 0){
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};