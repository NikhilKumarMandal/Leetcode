/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let temp = [];

    for(let j = 0; j < col; j++){
        temp[j] = []
    }

    for(let i = 0; i < row; i++){
        for(j = 0; j < col; j++){
            temp[j][i] = matrix[i][j]
        }
    }

    return temp
};