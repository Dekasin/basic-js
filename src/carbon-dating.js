const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

if (typeof(sampleActivity) == "string"){
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 15 && sampleActivity > 0) {
    // t=ln(N0/N)k
    //k=0.693t1/2
    let t = 0,
      k = 0,
      N0 = MODERN_ACTIVITY,
      N = sampleActivity,
      T = HALF_LIFE_PERIOD;

    k = 0.693 / T;

    t = Math.log(N0 / N) / k;
    return Math.ceil(t);
    };
  }
  return false;
};