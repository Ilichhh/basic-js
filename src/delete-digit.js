const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  for (let char of n.toString()) {
    let newMax = +n.toString().replace(char, '');
    if (newMax > max) max = newMax;
  }

  return max;
}

module.exports = {
  deleteDigit
};
