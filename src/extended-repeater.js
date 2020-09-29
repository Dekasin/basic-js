module.exports = function repeater(str, options) {
    
    let result = '',
        repeatTimes = 0,
        separator = '+',
        addition = '',   
        additionRepeatTimes = 0,
        additionSeparator ='';
        
    if (options.repeatTimes != undefined){
        repeatTimes = options.repeatTimes;
    };    
    if (options.separator != undefined){
        separator = options.separator;
         }; 
    
     if (options.addition != undefined){
        addition = options.addition;
        additionRepeatTimes = 1;
 }; 
       
    if (options.additionRepeatTimes != undefined){
        additionRepeatTimes = options.additionRepeatTimes;
        additionSeparator ='|';
    };    
    
    if (options.additionSeparator != undefined){
        additionSeparator = options.additionSeparator;
        if(additionRepeatTimes == 1){
            additionSeparator = '';
        };
    };
    
    str = str;
    for (let i = 1; i < repeatTimes; i++) {
        result += str;
        for (let j = 0; j < additionRepeatTimes; j++) {

            result = result + addition + additionSeparator;
        }
        result += separator;
    };
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {

            result = result + addition + additionSeparator;
        }
    return result;
};