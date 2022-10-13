const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let result = [];
  let addition = [];
  
  if (options.addition !== undefined) {
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
    
    for (let i = 0; i < additionRepeatTimes; i++) {
      addition.push(String(options.addition));
    }
    addition = addition.join(additionSeparator);
  }
  
  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str) + addition);
  }

  return result.join(separator);
}

module.exports = {
  repeater
};
