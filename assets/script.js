// Assignment code here


const CharsAmountRange = document.getElementById ('CharsAmountRange')
const CharsAmountNumber = document.getElementById ('CharsAmountNumber')

CharsAmountNumber.addEventListener('input', syncCharsAmount)
CharsAmountRange.addEventListener('input', syncCharsAmount)

function syncCharsAmount(e) {
  const value = e.target.value
  CharsAmountNumber.value = value
  CharsAmountRange.value = value
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


