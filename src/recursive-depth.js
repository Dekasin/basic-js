module.exports = class DepthCalculator {
    
        calculateDepth(arr) {
            let n = 1,
                deep = 1;
           function recursia(parr){
                for (let i = 0; i < arr.length; i++) {
                    if (Array.isArray(parr[i])) {
                        deep++;
                        (n < deep) ? n++ : n = n;
                        recursia(parr[i]);
                            deep--;
                        }
                    }
                };
                recursia(arr);

                return n;
            }
        };