module.exports = function getSeason(date ) {
  
  // let absense = "";
  //   absense = date;

  // if (absense == ""){
  //   return 'Unable to determine the time of year!';
  // }
  
  // if (isNaN(date)){
  //   throw 'Error';
  // }
  
  if (isNaN(date)){
      return 'Unable to determine the time of year!';
    }

    let month = date.getMonth();
    
    if(month<2 || month >10){
        return 'winter';
    } else if (month<5){
        return 'spring'; 
    } else if (month<8){
        return 'summer';
    } else {
        return ('autumn');
    };
  
};
