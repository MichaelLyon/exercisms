var Leap = function(year) {
  Leap.prototype.isLeap = function(input) {
    if(year % 4 === 0){
      if(year % 100 === 0){
        if(year % 400 === 0){
          return true
        }
        return false
      }else{
        return true
      }
    }else{
      return false
    }
    return false
  }
};
// `plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```


module.exports = Leap;
