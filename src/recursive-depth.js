const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.deph = 1;
  }
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    // for (let elem of arr) {
    //   if (Array.isArray(elem)) {
    //     this.deph++;
    //     this.calculateDepth(elem);
    //   }
    // }
    return this.deph;
  }
}

module.exports = {
  DepthCalculator
};
