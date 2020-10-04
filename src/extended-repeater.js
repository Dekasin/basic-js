module.exports = function repeater(str, options) {

    let result = '',
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 0,
        additionSeparator = '';

    if (options.repeatTimes != undefined) {
        repeatTimes = options.repeatTimes;
    };

    if (options.separator != undefined) {
        separator = options.separator + "";
    };

    if (options.addition+"" != 'undefined') {
        addition = options.addition + "";
        additionRepeatTimes = 1;
        
    };

    if (options.additionRepeatTimes != undefined && options.additionRepeatTimes > 1) {
        additionRepeatTimes = options.additionRepeatTimes;
        additionSeparator = '|';
    };

    if (options.additionSeparator+ "" != 'undefined' ) {
        additionSeparator = options.additionSeparator + "";

       };


        for (let i = 0, m = repeatTimes; i < repeatTimes; i++) {
        m --;
            result += str;

            for (let j = 0, k = additionRepeatTimes; j < additionRepeatTimes; j++) {
                k--;
                if (k>0) {
                    result = result + addition + additionSeparator;
                } else {
                    result = result + addition;
                };
                 }
            if (m > 0){
               result += separator; 
            }
        
    };

   
    return result;
};