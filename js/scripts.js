var output = '';
//Front-end
$(document).ready(function(){
  var input = prompt("Convert any number below 3,999 to roman numerals");
  checkInputValidity(input);
});
//Back-End
function checkInputValidity(input){
  if (isNaN(input)) {
    alert("No");
  } else if (input > 3999) {
    alert("No");
  } else {
    alert("Valid Number");
    splitNumber(input);
  }
}
function splitNumber(input) {
  var numberArray = input.split('');
  romanCheck(numberArray);
}
function romanCheck(numberArray){
  for (i = numberArray.length-1; i >= 0 ; i--){
    var currentValue = numberArray[i];
    //ones
    if (i === numberArray.length-1){
      var ones1 = 'I';
      var ones2 = 'V';
      if(numberArray[i] === "1"){
        output = output.concat(ones1);
      } else if (numberArray[i] === "2"){
        output = output.concat(ones1+ones1);
      } else if (numberArray[i] === "3"){
        output = output.concat(ones1+ones1+ones1);
      } else if (numberArray[i] === "4"){
        output = output.concat(ones2+ones1);
      } else if (numberArray[i] === "5"){
        output = output.concat(ones2);
      } else if (numberArray[i] === "6"){
        output = output.concat(ones1+ones2);
      } else if (numberArray[i] === "7"){
        output = output.concat(ones1+ones1+ones2);
      } else if (numberArray[i] === "8"){
        output = output.concat(ones2+ones1+ones1+ones1);
      } else if (numberArray[i] === "9"){
        output = output.concat("IX");
      } else {
      }
    } else if (i === numberArray.length-2){
      var ten1 = 'X';
      var ten2 = 'L'
      if(numberArray[i] === "1"){
        output = output.concat(ten1);
      } else if (numberArray[i] === "2"){
        output = output.concat(ten1+ten1);
      } else if (numberArray[i] === "3"){
        output = output.concat(ten1+ten1+ten1);
      } else if (numberArray[i] === "4"){
        output = output.concat(ten2+ten1);
      } else if (numberArray[i] === "5"){
        output = output.concat(ten2);
      } else if (numberArray[i] === "6"){
        output = output.concat(ten1+ten2);
      } else if (numberArray[i] === "7"){
        output = output.concat(ten1+ten1+ten2);
      } else if (numberArray[i] === "8"){
        output = output.concat(ten1+ten1+ten1+ten2);
      } else if (numberArray[i] === "9"){
        output = output.concat("XC");
      } else {
      }
    } else if (i === numberArray.length-3){
      var hundred1 = 'C';
      var hundred2 = 'D';
      if(numberArray[i] === "1"){
        output = output.concat(hundred1);
      } else if (numberArray[i] === "2"){
        output = output.concat(hundred1+hundred1);
      } else if (numberArray[i] === "3"){
        output = output.concat(hundred1+hundred1+hundred1);
      } else if (numberArray[i] === "4"){
        output = output.concat(hundred2+hundred1);
      } else if (numberArray[i] === "5"){
        output = output.concat(hundred2);
      } else if (numberArray[i] === "6"){
        output = output.concat(hundred1+hundred2);
      } else if (numberArray[i] === "7"){
        output = output.concat(hundred1+hundred1+hundred2);
      } else if (numberArray[i] === "8"){
        output = output.concat(hundred1+hundred1+hundred1+hundred2);
      } else if (numberArray[i] === "9"){
        output = output.concat("CM");
      } else {
      }
    } else {
      var thousand1 = 'M';
      if(numberArray[i] === "1"){
        output = output.concat(thousand1);
      } else if (numberArray[i] === "2"){
        output = output.concat(thousand1+thousand1);
      } else if (numberArray[i] === "3"){
        output = output.concat(thousand1+thousand1+thousand1);
      } else {
      }
    }
  }
  var newOutput = output.split('').reverse().join('');
}
