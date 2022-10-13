const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  // if (!arr.length) return [];
  // let result = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (i === '--discard-next') {
  //     i++;
  //     continue;
  //   } else if (i === '--discard-prev') {
  //     if (i !== 0 && arr[i - 2] !== '--discard-next') result.pop();
  //     continue;
  //   } else if (i === '--double-next ') {
  //     if (arr[i + 1]) result.push(arr[i + 1]);
  //     continue;
  //   } else if (i === '--double-prev') {
  //     if (i !== 0 && arr[i - 2] !== '--discard-next') result.push(arr[i - 1]);
  //     continue;
  //   } else {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
}

module.exports = {
  transform
};

// transform([1, 2, 3, '--double-next', 4, 5]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);