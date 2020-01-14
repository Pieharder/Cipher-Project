var userInput = prompt("Enter a sentence"); //1st Func
console.log(userInput);

var firstLetter = userInput.charAt(0).toUpperCase();
var lastLetter = userInput.charAt(userInput.length-1).toUpperCase();

var newString;
function backToString(A, B) { //2nd Func
  return newString = A + B;
};

backToString(firstLetter, lastLetter);


var reverseString = backToString(lastLetter, firstLetter);

var fullSentence;
function sentenceMaker(C, D) { //3rd Func
  return fullSentence = C + D
};

sentenceMaker(userInput, reverseString)

var charCount = userInput.length

var unrounded;
var divide = function(E) {
  return unrounded = E;
    };

divide(parseInt(charCount / 2))

var nine = userInput.charAt(8);

finalForm = nine + userInput +reverseString

alert(finalForm)

console.log(firstLetter);
console.log(lastLetter);
console.log(newString);
console.log(reverseString);
console.log(fullSentence);
console.log(charCount)
console.log(unrounded)
console.log(nine);






