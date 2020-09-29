module.exports = function repeater( str, options={'repeatTimes':0 ,'separator':'+', addition: '', additionRepeatTimes : 0, additionSeparator:'|'}) {
    //throw 'Not implemented';
    // remove line with error and write your code here
    let result = '' ;
    for (let i = 1; i < options.repeatTimes; i++){
        result+=str;
        if (options.additionRepeatTimes > 0){
            options.additionRepeatTimes-=1;
            result+=options.addition;
        }
        result+=toString(options.separator);
    };
    result+=str;
    return result;
};
  