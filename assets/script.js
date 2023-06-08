// Assignment code here
console.log('Mijan')

const CharsAmountRange = document.getElementById('CharsAmountRange')
const CharsAmountNumber = document.getElementById('CharsAmountNumber')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumericElement = document.getElementById('includeNumeric')
const includeSpecialElement = document.getElementById('includeSpecial')
const form = document.getElementById('passwordForm')
const password = document.getElementById('password')

//Used ASCII to get character codes
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

//Connecting sliding bar to number
CharsAmountNumber.addEventListener('input', syncCharsAmount)
CharsAmountRange.addEventListener('input', syncCharsAmount)

function syncCharsAmount(e) {
  const value = e.target.value
  console.log(value)
  CharsAmountNumber.value = value
  CharsAmountRange.value = value
}


//Adding eventlisteners for value and check boxes on form 
form.addEventListener('submit', e => {
  e.preventDefault()

  const CharsAmount = CharsAmountNumber.value
  const includeLowercase = includeLowercaseElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const includeNumeric = includeNumericElement.checked
  const includeSymbol = includeSpecialElement.checked
  const password = generatePassword(CharsAmount, includeLowercase, includeUppercase, includeNumeric, includeSymbol)
    document.getElementById("password").value = password
  
})

//function to create the pool of charactors and then choose at random
function generatePassword(CharsAmount, includeLowercase, includeUppercase, includeNumeric, includeSymbol) {
  let charCodes = []
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumeric) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < CharsAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}







