module.exports = function transform(arr) {
 
   if (Array.isArray(arr)) {

       for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "--discard-next" : 
            i == arr.length-1 ? arr.splice(i, 1) : arr.splice(i, 2);
            i--;
          break;
            case "--discard-prev" : 
            i == 0 ? arr.splice(i, 1):arr.splice(i-1, 2);
            i--;
          break;
            case "--double-next" : 
            i == arr.length-1 ? arr.splice(i, 1) : arr[i] = arr[i+1];
            i--;
          break; 
            case "--double-prev" : 
            i == 0 ? arr.splice(i, 1) : arr[i] = arr[i-1];
            i--;
          break;
        }
  
            }
} else {
    throw Error;
  }
    return arr;
};
