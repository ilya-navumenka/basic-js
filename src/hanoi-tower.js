const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const total = {}
  let rez;
  total.turns = stepHanoi(disksNumber);
  total.seconds = Math.floor((total.turns * 60 * 60) / turnsSpeed);
  return total;
  function stepHanoi(disk) {
    if(disk == 1) {
      return 1;
    } else {
      rez = ((stepHanoi(disk -1) * 2) + 1);
      return rez
    }
  }
}

module.exports = {
  calculateHanoi
};
