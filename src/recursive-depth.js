module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result= 1;
    arr.map(item =>  {
      if(Array.isArray(item)) {
      let depth = this.calculateDepth(item) + 1;
      if (result < depth) result = depth;}
    })
    return result;
  }
};
