// Global
const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//Front-end
$(document).ready(function(){
  debugger;
  var input = prompt("Convert any number below 3,999 to roman numerals");
  checkInputValidity(input);
});
//Back-End

function checkInputValidity(input){
  //Check for invalid entries
  if (isNaN(input)) {
    alert("Invalid input");
  } else if (input > 3999) {
    alert("Invalid input");
  } else {
    //validates and converts to proper type.
    alert("Valid Number");
    var validatedInput = parseInt(input);

  }
}

//function validatedInput(input){
//  parseInt(input);
//}

//function basicNumberConversion(input) {
//  alert(typeof input)
//  if (input === 1) {
//    input = romanNumerals[0];
//    return input;
//  } else if (input === 5) {
//    input = romanNumerals[1];
//  } else if (input === 10) {
//    input = romanNumerals[2];
//    return input;
//  } else if (input === 50) {
//    input = romanNumerals[3];
//    return input;
//  } else if (input === 100){
//    input = romanNumerals[4];
//    return input;
//  } else if (input === 500) {
//    input = romanNumerals[5];
//    return input;
//  } else if (input === 1000) {
//    input = romanNumerals[6];
//    return input;
//  } else {
//  }
  //"1" =
  //"5" = romanNumerals.indexOf(romanNumerals[1]);
  //"10" = romanNumerals.indexOf(romanNumerals[2]);
  //"50" = romanNumerals.indexOf(romanNumerals[3]);
  //"100" = romanNumerals.indexOf(romanNumerals[4]);
  //"500" = romanNumerals.indexOf(romanNumerals[5]);
  //"1000" = romanNumerals.indexOf(romanNumerals[6]);
//}
//if ("input" === NaN) {
//  "invalid input"
//} else if ("input" > 3,999) {
//  "invalid input"
//} else if ( input === 1 || input === 5 || input === 10 || input === 50 || input === 100 || input === 500 || input === 1000 ) {
//}
//} else if (array.length > # && "input" > #) {

//}
