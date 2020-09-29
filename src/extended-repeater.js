module.exports = function repeater(str, options) {
  let result = "";
  let resultAddition = "";
  let separator = "+";
  let additionSeparator = "|";

  if (options.separator) separator = String(options.separator);
  if (options.addition != undefined || options.addition === null)
    resultAddition = String(options.addition);
  if (options.additionSeparator)
    additionSeparator = String(options.additionSeparator);

  if (options.additionRepeatTimes) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      resultAddition += additionSeparator + options.addition;
    }
  }

  result = str + resultAddition;

  if (options.repeatTimes && options.repeatTimes > 0) {
    for (let i = 1; i < options.repeatTimes; i++) {
      result += separator + str + resultAddition;
    }
  }

  return result;
};
