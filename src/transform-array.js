module.exports = function transform(/* arr */ arr) {
    try {
        if (Array.isArray(arr)==false) throw Error;// I don't know what i do(((
            }
    catch (err){
       arr = (err);
    }
    // remove line with error and write your code here
   // if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "--discard-next" : arr.splice(i, 2);
            break;
            case "--discard-prev" : arr.splice(i-1, 2);
            break;
            case "--double-next" : arr[i] = arr[i+1];
            break; 
            case "--double-prev" : arr[i] = arr[i-1];
            break;
        }
  
    }
// } else {
//     arr="Error";
//   }
    return arr;
};
