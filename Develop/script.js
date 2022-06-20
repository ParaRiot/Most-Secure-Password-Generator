// Assignment code here
var charArray = [];
var length = 8;
var lowerArray = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "&", "?", "<", ">"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = generatePrompts ();
  var passwordText = document.querySelector("#password");
  if (truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

function generatePassword(){
  var password = "";
  for (let index = 0; index < length; index++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomIndex]
  }
  return password;
}


function generatePrompts() {
  charArray = [];
  length = parseInt(prompt("How many characters?"));
  if (length < 8 || length > 128) {
    alert ("Password must be between 8 & 128 characters");
    return generatePassword;
  }
  if (confirm("Include lowercase letters?")){
    charArray = charArray.concat(lowerArray);
  }
  if (confirm("Include uppercase letters?")){
    charArray = charArray.concat(upperArray);
  }
  if (confirm("Include numerical values?")){
    charArray = charArray.concat(numericArray);
  }
  if (confirm("Include special characters?")){
    charArray = charArray.concat(specialArray);
  }
  return true;
}



