module.exports = function transform(arr) {
 let arr2 = arr;
 let skip = false;
   if (Array.isArray(arr)) {
     

       for (let i = 0; i < arr2.length; i++) {
        switch(arr2[i]) {
        
            case "--double-next" : 
            i == arr2.length-1 ? arr2.splice(i, 1) : arr2[i] = arr2[i+1];
            i--;
          break; 
            case "--double-prev" : 
           ( i == 0 || skip == true ) ? arr2.splice(i, 1) : arr2[i] = arr2[i-1];
            i--;
          break;
          case "--discard-next" : 
              (i == arr2.length-1 ) ? arr2.splice(i, 1) : arr2.splice(i, 2);
              i--;
              skip = true;

            break;
              case "--discard-prev" : 
              (i == 0 || skip == true) ? arr2.splice(i, 1):arr2.splice(i-1, 2);
              i--;
              skip = true;
              break;
          
          default :
          skip == false

        }
      } 
        
   } else {
    throw Error;
  }
    return arr2;
};
