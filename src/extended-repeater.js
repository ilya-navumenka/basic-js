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
  if(!String(str)[0]) return;
  let repeatTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1
  let separator = options.separator || '+'
  str = (typeof str === 'string') ? str : String(str)
  let additionRow = ''
  if(String(options.addition)[0] && String(options.addition) != 'undefined') {
      let additionRepeatTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1
      console.log(additionRepeatTimes)
      let additionSeparator = options.additionSeparator || '|'
      let addition = (typeof options.addition === 'string') ? options.addition : String(options.addition)
      additionRow = (addition) ? new Array(additionRepeatTimes).fill(addition).join(additionSeparator) : ''
  }
  return result = new Array(repeatTimes).fill(str+additionRow).join(separator)
}

module.exports = {
  repeater
};
