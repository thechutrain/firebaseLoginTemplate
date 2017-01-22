// ----- validators ----
// function checkEmail(input){
//
// };

function checkValidPassword(userInput){
  var nonLetter = new RegExp("[^a-z\s]", "g");
  var containsNonLetter = nonLetter.test(userInput);
  if (!containsNonLetter){
    // highlight that they need to choose password
    console.warn("No symbols");
  } else {
    console.info("Symbols!");
  }

}
