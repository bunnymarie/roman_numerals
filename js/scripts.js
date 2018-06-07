$(document).ready(function(){
  var input = prompt("Convert any number below 3,999 to roman numerals");
  //checkInputValidity(input);
});

function checkInputValidity(input){
  //Check for invalid entries
  if (isNaN(input)) {
    alert("Invalid input");
  } else if (input > 3999) {
    alert("Invalid input");
  } else {
    alert("Valid Number");
  }
}


//if ("input" === NaN) {
//  "invalid input"
//} else if ("input" > 3,999) {
//  "invalid input"
//} else if ( input === 1 || input === 5 || input === 10 || input === 50 || input === 100 || input === 500 || input === 1000 ) {
//}
//} else if (array.length > # && "input" > #) {

//}
