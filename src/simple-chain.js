const CustomError = require("../extensions/custom-error");

const chainMaker = {

  fullChain: [],
  getLength() {
    return this.fullChain.length;
  },
  addLink(value = '( )') {
    value = ''+ value;
    this.fullChain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if (typeof position != 'number' || position % 1 > 0 || position > this.fullChain.length-1 || position < 0){
      this.fullChain = [];
      throw new Error();
    }
    this.fullChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.fullChain.reverse();
    return this;
  },
  finishChain() {
    let exportChain = "";

    for (let i = 1; i < this.fullChain.length; i++) {
      exportChain += `${this.fullChain[i-1]}~~`
    }

    exportChain += this.fullChain[this.fullChain.length-1];
    this.fullChain = [];
    return exportChain;
  }
};

module.exports = chainMaker;
