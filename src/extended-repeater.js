module.exports = function repeater(str, options) {
  if(!str) throw Error("Error");
  let result = "";
  let resultAddition ="";
  let separator = "+";
  let addition = "";
  let additionSeparator = "|";
  if (options.separator) separator = options.separator.toString();
  if (options.addition) resultAddition = options.addition.toString();
  if (options.additionSeparator) additionSeparator = options.additionSeparator.toString();

  if (options.additionRepeatTimes && options.additionRepeatTimes > 0) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      resultAddition += addition + additionSeparator;
    }
  }
  else resultAddition += addition + additionSeparator;

  if(options.repeatTimes && options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str + resultAddition+ separator;
    }
  }
  else result +=  str + resultAddition+ separator;

  return result;
};
  