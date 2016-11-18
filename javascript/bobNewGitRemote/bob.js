//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  let splitInput = input.split("");
  let upperCaseBool = false;
  let numbersConfirmed = false;
  let stripped = input.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");
  let spaceRemove = stripped.replace(/\s/g, '');
  lastIndex = splitInput[splitInput.length -1];
  let count = 0;
  let numCount = 0;

  for (var i = 0; i < spaceRemove.length; i++) {
    if(spaceRemove[i] === spaceRemove[i].toUpperCase()){
      count++
    }
    if(!isNaN(spaceRemove[i])){
      numCount++
    }
  }

  if(count == spaceRemove.length){
    upperCaseBool = true
  }
  if(numCount === spaceRemove.length){
    numbersConfirmed = true;
  }

  if(spaceRemove){
    if(upperCaseBool === true && numbersConfirmed == false){
      return 'Whoa, chill out!';
    }else if(lastIndex === '?'){
      return 'Sure.'
    }else{
      return 'Whatever.'
    }
  }else{
    return 'Fine. Be that way!'
  }

};

module.exports = Bob;
