

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
       
    let turn = (2**disksNumber)-1;
    let second = Math.floor((turn/turnsSpeed)*3600);
    
    let obj={turns:turn, seconds:second};
    return obj;
}
