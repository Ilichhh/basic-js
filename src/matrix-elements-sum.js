const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.forEach((line, lineI) => {
    line.forEach((e, i) => {
      if (lineI === 0 || matrix[lineI - 1][i] !== 0) sum += e;
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
