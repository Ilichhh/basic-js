const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let newS2 = s2;

  for (let char of s1) {
    if (newS2.includes(char)) {
      newS2 = newS2.replace(char, '');
      counter++;
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
