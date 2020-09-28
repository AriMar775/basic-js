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
    )
      throw Error("Error");
    this.arr.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join("~~");
    this.arr.splice(0, this.arr.length);
    return result;
  },
};

module.exports = chainMaker;
