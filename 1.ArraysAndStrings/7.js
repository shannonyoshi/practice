
/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pizel in the image is 4 bytes, 
write a method to rotate the image 90 degrees. Can you do this in place?
*/

/*

Example: 
[1,2,3],    [3,6,9]  0,0=> 2,0| 0,1 => 1,0 | 0,2 =>  0,0
[4,5,6], => [2,5,8]  1,0=> 2,1| 1,1 => 1,1 |1,2 => 0,1
[7,8,9]     [1,4,7]  2,0=> 2,2| 2,1 =>1,2 |2,2 =>0,2
 i becomes j where i is index of elements in arrays and j is index of each array
*/

const rotateMatrix = (matrix) => {
    matrixSize = matrix.length
    rotatedMatrix = []
    for (let x=0; x< matrixSize/2; x++) {
        for (let y=x; y< matrixSize-x-1; y++) {
        //hold temp value about to be replaced
        temp = matrix[x][y]
        //replace top left with top right
        matrix[x][y]=matrix[y][matrixSize-x-1]
        //replace top right with bottom right        //replace top right with bottom right
        matrix[y][matrixSize-x-1] = matrix[matrixSize-1-x][matrixSize-1-y]
        //replace bottom right with bottom left
        matrix[matrixSize-1-x][matrixSize-1-y] = matrix[matrixSize-1-y][x]
        //replace bottom left with temp
        matrix[matrixSize-1-y][x] = temp

        // console.log(`${matrix[0]}\n${matrix[1]}\n${matrix[2]}`)
        }
    }
}
let matrix = [[1,2,3], [4,5,6], [7,8,9]]

rotateMatrix(matrix)
console.log(matrix)

matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
rotateMatrix(matrix)
console.log(matrix)

