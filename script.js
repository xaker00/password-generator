// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate the password
// returns password on success
// returns empty string on error
function generatePassword(){
  // character pool constants
  const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersLower = lettersUpper.toLowerCase();
  const numbers = '0123456789';
  const special = '!"#$%&\'()*+,-./:;<=>?@\\[]^_`~';

  var characters = '';  // character pool
  var length;           // password length
  var password = '';    // password

  // ask for length
  length = prompt('Length of password?\n(8-128 characters)');
  // debug length
  console.log('password length:', length);

  // validate input
  if(length < 8 || length > 128){
    alert('Valid length is 8-128. Try again.');
    return '';
  }

  // ask to include uppercase
  if(confirm('Include uppercase?')){
    // append the character pool
    characters += lettersUpper;
  }

  // ask to include lowercase
  if(confirm('Include lowercase?')){
    // append the character pool
    characters += lettersLower;
  }

  // ask to include numbers
  if(confirm('Include numbers?')){
    // append the character pool
    characters += numbers;
  }

  // ask to include special characters
  if(confirm('Include special characters?')){
    // append the character pool
    characters += special;
  }

  // debug character pool
  console.log('character pool:', characters);

  // if no character group is selected exit the function with error message
  if(characters.length === 0){
    alert('At least one character group must be selected. Try again.');
    return '';
  }

  // fill the password
  for(var i=0; i<length; i++){
    // append the password with random character
    password += characters[getRandomInt(characters.length)]
  }
  
  // return the password string
  return password;
}

// random integer 0 to max (not inclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}