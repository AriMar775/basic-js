module.exports = function repeater(str, options) {
  if(!str) throw Error("Error");
  let result = "";
  let resultAddition = "";
  let separator = "+";
  let additionSeparator = "|";
  if (options.separator) separator = options.separator.toString();
  if (options.addition) resultAddition = options.addition.toString();
  if (options.additionSeparator) additionSeparator = options.additionSeparator.toString();

  if (options.additionRepeatTimes && options.additionRepeatTimes > 0) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      resultAddition +=  additionSeparator + options.addition;
    }
  }

  result =  str + resultAddition;

  if(options.repeatTimes && options.repeatTimes > 0) {
    for (let i = 1; i < options.repeatTimes; i++) {
      result += separator + str + resultAddition ;
    }
  }

  return result;
};
  