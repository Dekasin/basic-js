
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   
    // throw 'Not implemented';
    // remove line with error and write your code here
    
    let turn = (2**disksNumber)-1;
    let second = Math.floor(turn/turnsSpeed)*3600;
    
    let obj={turns:turn, seconds:second};
    return obj;
}