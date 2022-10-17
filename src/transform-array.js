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
  if(!(arr instanceof Array)) throw Error(`'arr' parameter must be an instance of the Array!`)
  const arrCopy = [...arr]
  const command = ['--double-next','--discard-next','--double-prev','--discard-prev']
  const newArray = []
  console.log(newArray)

    for(let i=0; arrCopy.length > i; i++) {
      if(command.includes(arrCopy[i])) {
          if(arrCopy[i] == '--double-next') {
              if(!isNaN(+arrCopy[i+1])) newArray.push(arrCopy[i+1])
          }
          if(arrCopy[i] == '--discard-next') {
            if(!isNaN(+arrCopy[i+1])) arrCopy[i+1] = NaN
          }
          if(arrCopy[i] == '--double-prev') {
            if(!isNaN(+arrCopy[i-1])) newArray.push(arrCopy[i-1])
          }
          if(arrCopy[i] == '--discard-prev') {
            if(!isNaN(+arrCopy[i-1])) newArray[i-1] = NaN
          }
      } else {
        newArray.push(arrCopy[i])
      }
    }
  return newArray.filter(e => !isNaN(e) || typeof e == 'string' || typeof e == 'nimber'  || typeof e == 'boolean' || typeof e == 'object')
  }

module.exports = {
  transform
};
