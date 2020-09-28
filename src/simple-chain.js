const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) this.arr.push("( )");
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 0 ||
      position >= this.arr.length
    ) {
      this.arr = [];
      throw Error("Error");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join("~~");
    this.arr = [];
    return result;
  },
};

module.exports = chainMaker;
