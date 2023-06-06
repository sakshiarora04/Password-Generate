// Assignment Code

var generateBtn = document.querySelector(".btn");

var specialChars=['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  var numericalChars=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerChars= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperChars =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input
function generatePassword() {
  var length = window.prompt("How many characters would you like your password to contain?");
  
  if(!length || length<8 || length> 128){    
    var text="Hey! Password should be between 8 and 128 characters"; 
    return text;      
  }
  //when entered length is between 8 and 128
  else if (length>=8 && length<=128){
  // ask to confirm character types in password
  var special=window.confirm("click ok to confirm including special characters");
  var numerical=window.confirm("click ok to confirm including numerical characters");
  var lower= window.confirm("click ok to confirm including lower case characters");
  var upper= window.confirm("click ok to confirm including upper case characters");   
  
  var allChars= [];
  var retVal = "";
  // if special characters? add all special characters to allChars
  if (special) {
    allChars= allChars.concat(specialChars);
          }
  //if numerical characters? add all special characters to allChars
  if (numerical) {
   allChars= allChars.concat(numericalChars);
          }
  //if lowercase characters? add all special characters to allChars
  if (lower) {
      allChars= allChars.concat(lowerChars);
          }
 // if uppercase characters? add all special characters to allChars
  if (upper) {
    allChars= allChars.concat(upperChars);
         }
console.log(allChars);
if(!special && !numerical && !lower && !upper){
  var text= "Atleast one character type should be selected";
  return text;
}
// generating random number to select random character from allchars array
for (var i = 0; i < length; i++) {
    var index=Math.floor(Math.random() *allChars.length );
    retVal += allChars[index];
}
      
}
  return retVal;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
