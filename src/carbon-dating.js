const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let a = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  const K = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(a / K);

  return sampleActivity < 0 ||
    typeof sampleActivity != "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    !parseFloat(sampleActivity)
    ? false
    : result;
};
