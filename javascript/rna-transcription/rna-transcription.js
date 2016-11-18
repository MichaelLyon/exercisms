var RnaConverter = function() {

}
const translateObj = {
  G : 'C',
  C : 'G',
  T : 'A',
  A : 'U'
}

RnaConverter.prototype.toRna = function(str) {
  let splitStr = str.split("");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = translateObj[splitStr[i]]
  }
  return splitStr.join("");
}

module.exports = RnaConverter;
