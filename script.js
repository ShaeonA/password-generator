// Assignment code here
const resultsEL = document.getElementById('results')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateEL = document.getElementById('generate')
const lengthEL = document.getElementById('length')


const randomfunc = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  Number: getRandomNumber,
  Symbol: getRandomSymbol,
}
generateEL.addEventListener("click", () => {
  const length = +lengthEL.value;
  const hasLower = lowercaseEL.checked;
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultsEL.innertext = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(lower, upper, number, symbol, length) {


  let generatePassword = '';

  const countType = lower + upper + Number + Symbol;

  //console.log('countType:', countType);

  //const types array
  const typesArr = [{ lower }, { upper }, { Number }, { Symbol }].filter
    (item => Object.values(item)[0]);

  //console.log('typesArr:', typesArr);

  if (countType === 0) {
    return '';
  }

  for (let i = 0; i < length; i += countType) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomfunc[funcName];
    });
  }

  const finalpassword = generatePassword.slice(0, length);

  return finalpassword;
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}

// Add event listener to generate button








//generateBtn.addEventListener("click", e => {
//  window.alert('create a password of at least 8 characters, no more than 128');
//  window.prompt('which of the following options would you like to include in your password lowercase, uppercase, numeric, and/or special characters');
//})
