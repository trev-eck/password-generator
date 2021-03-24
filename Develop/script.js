// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

//here are the different characters we are going to select from based on the users input
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const specialChars = "~!@#$%^&*()_+?";

function generatePassword(){
  //TODO: your code here

  //take users input, lets assume they select to use all available characters
  //we will create a new string using concat with all available characters to create one giant string to select characters from
  //will need to use some if / else logic in order to decide which strings we are going to join based upon user selection
  //once we have our giant character string we will then need to begin picking characters at random to construct our password
  // user will have specified a length for their password, lets assume password length is 10
  // we will then use a for loop to run passwordLength times and generate random number such as math.floor(math.random()*giantString.length()) to select a random character from our string of available characters
  // each iteration will select a character from the string and add it to our new password string
  //once we have selected the desired number of characters for our password we can return our completed password to the user


  return "extraSecretPassword"
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
