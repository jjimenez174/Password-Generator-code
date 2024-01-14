// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define Variables
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "(", ")", ">", "<", "?"];

var pwdLength = "";
var capitals;
var letterCase; 
var integers; 
var symbols; 

//Define generatePassword Length
function generatePassword() {
  var pwdLength = (prompt("\n How many characters do you want your password to be? \n Must be between 8 and 128 characters."));
 
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Password length must be between 8 - 128 characters. Please try again."); 
    var pwdLength = (prompt("How many characters do you want your password to be? (8 - 128 characters).")); 
  }

//Message shown when password length is accepted
  alert("Your password length will be " + pwdLength + " characters."); 

  var capitals = confirm("\n Do you want to use UPPERCASE characters? \n Press OK or Cancel"); 
  var letterCase = confirm("\n Do you want to use LOWERCASE characters? \n Press OK or Cancel"); 
  var integers = confirm("\n Do you want to use NUMBERS? \n Press OK or Cancel"); 
  var symbols = confirm("\n Do you want to use SPECIAL CHARACTERS? \n Press OK or Cancel"); 


//Message shown when criteria are not met
  while (
    capitals === false &&
    letterCase === false &&
    integers === false &&
    symbols === false) {
        alert("Please select at least one criteria to generate password."); 

        var capitals = confirm("\n Do you want to use UPPERCASE letters? \n Press OK or Cancel"); 
        var letterCase = confirm("\n Do you want to use LOWERCASE letters? \n Press OK or Cancel"); 
        var integers = confirm("\n o you want to use NUMBERS? \n Press OK or Cancel");
        var symbols = confirm("\n Do you want to use SPECIAL CHARACTERS? \n Press OK or Cancel"); 
    }
  //Password Generator
  var pwdGenerator = [] 
      if (capitals) {pwdGenerator = pwdGenerator.concat(upperCase)}
      if (letterCase) {pwdGenerator = pwdGenerator.concat(lowerCase)}
      if (integers) {pwdGenerator = pwdGenerator.concat(number)}
      if (symbols) {pwdGenerator = pwdGenerator.concat(specialCharacter)}

  var randomPassword = ""

    for (var i=0; i < pwdLength; i++) {
      randomPassword = randomPassword + pwdGenerator[Math.floor(Math.random() * pwdGenerator.length)]; 
    }
   return randomPassword; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Styling attributes
var wrapper = document.querySelector("h1");
wrapper.setAttribute("style", "font-size: 40px; color: blue");
