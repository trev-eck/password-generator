// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

//here are the different characters we are going to select from based on the users input
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const specialChars = "!@#$%^&*()_+";

//these variables will need to be filled with input gathered from user
let useLower = false;
let useUpper = false;
let useNumbers = false;
let useSpecial = false;
let passwordLength = 0;

//this string will hold all our potential characters
let charHolder = "";

//we will save the users password here
let userPassword = "";

function generatePassword() {
  //TODO: your code here

  // lets collect all the information we need from the user
  passwordLength = window.prompt(
    "How long would you like your password to be?",
    "8 to 128 characters"
  );
  useLower = window.confirm("Would you like to use lowercase letters?");
  useUpper = window.confirm("Would you like to use uppercase letters?");
  useNumbers = window.confirm("Would you like to use numbers?");
  useSpecial = window.confirm("Would you like to use special characters?");

  // lets validate that we have been provided the minimum necessary requirements for a password
  if (isNaN(passwordLength) ||  passwordLength < 8 || passwordLength > 128) {
    return "Please enter a valid number for your password length";
  } else if (!useLower && !useUpper && !useNumbers && !useSpecial) {
    return "Please select at least one character type for your password";
  } else {
    // we have everything we need to generate a password, lets begin

    //based on the user input lets create a string that contains all the possible characters we can use for their password
    if (useLower) {
      charHolder += lowerLetters;
    }
    if (useUpper) {
      charHolder += upperLetters;
    }
    if (useNumbers) {
      charHolder += allNumbers;
    }
    if (useSpecial) {
      charHolder += specialChars;
    }

    //we now have a string with all possible characters we can use for the password, we now need a loop that will select random characters from our list and save it to our users password

    for(let x=0; x < passwordLength; x++) {
    //we need to create a random number that matches with a character in our charHolder string, select it, and add it to our password
    userPassword+= charHolder.charAt( Math.floor( ( Math.random()*charHolder.length ) ) );
    }


  }
  return userPassword;
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
