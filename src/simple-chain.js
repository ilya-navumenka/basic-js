const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length

  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (this.chain[position-1] && Number.isInteger(position) && typeof position == 'number' && position - 1 >= 0) {
        let newArray = []
        this.chain.forEach((value, i) => {
          if(position-1 != i) newArray.push(value)
        })
        this.chain = newArray;
        return this
    } else {
        this.chain = []
        throw Error('You can\'t remove incorrect link!')
    }

  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []
    return result;
  }
};

module.exports = {
  chainMaker
};
