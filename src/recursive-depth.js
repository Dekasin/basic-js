module.exports = class DepthCalculator {
                 
       calculateDepth(arr) {
        let deep = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let newDeep = this.calculateDepth(arr[i])
                if(deep < ++newDeep) deep = newDeep;
             }
        };
        return deep;
    }
};