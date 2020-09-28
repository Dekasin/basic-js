const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  
  //sampleActivity = parseFloat(sampleActivity);
//  let typ = typeof(sampleActivity);
//  if ( typ == 'undefined' || typ == 'object'  || typ == 'boolean' || typ == 'Null'||typ == 'number'){
   
//       return false;
//  }
if (typeof(sampleActivity) == "string"){
 sampleActivity = parseFloat(sampleActivity);
console.log( sampleActivity);
  if (sampleActivity <= 15 && sampleActivity > 0) {
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