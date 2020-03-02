module.exports = function createDreamTeam(/* members */ arr) {
 answer = false;
  if (Array.isArray(arr) ==true) {
 let team = [];
 let j = 0;
 for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'string') {
      for ( let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] != ' '){
            team.push(arr[i][k].toUpperCase());
            break;
          }
      }  
        
    }
 }
  answer = team.sort().join("");
}
  return answer;
};