/*
Zero Matrix: Write an algorithm such that if an element MxN matrix is 0, its entire row and column are set to 0.
*/

const zeroMatrix=(matrix) => {
    zeros = []
    for (let i=0; i<matrix.length; i++) {
        let currentArray = matrix[i]
        for (let j=0; j< currentArray.length; j++) {
            if (currentArray[j]===0) {
                zeros.push([i,j])
            }
        }
    }
    for(let k =0 ; k< zeros.length; k++) {
        //zeros =[[row, column]]
        matrix[zeros[k][0]].fill(0)
        for (i=0; i< matrix.length; i++) {
            matrix[i][zeros[k][1]]=0
        }
    }
} 

const matrix = [[1,2,3,4,5], [6,7,8,9,0], [11,12,13,14,15], [16,17,18,19,20]]

zeroMatrix(matrix)
console.log(matrix)