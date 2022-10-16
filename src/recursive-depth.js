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
    let currDeph = 1;
    let maxDeph = 1;

    function findMax(arr) {
      arr.forEach(e => {
        if (Array.isArray(e)) {
          currDeph++;
          if (currDeph > maxDeph) maxDeph = currDeph;
          findMax(e);
        }
      })
      currDeph--;
    }

    findMax(arr);

    this.deph = maxDeph;
    return this.deph;
  }
}

module.exports = {
  DepthCalculator
};


// class DepthCalculator {
//   constructor() {
//     this.deph = 1;
//     this.max = 1;
//   }
//   calculateDepth(arr) {
//     arr.forEach(e => {
//       console.log(e);
//       if (Array.isArray(e)) {
//         this.max++;
//         if (this.max > this.deph) this.deph = this.max;
//         this.calculateDepth(e);
//       }
//     })

//     this.max--;

//     return this.deph;
//   }
// }