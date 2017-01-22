// Start with the sign in form hidden
// When document is ready, set up 2 event listeners to toggle
// btw sign up and sign in forms
$(document).ready(function(){
  // event listener for already registered login
  $("#sign-up-form").find("p.form-text-link").on("click", function(){
      console.log("EVENT fired");
      $("form#sign-in-form").show();
      $("form#sign-up-form").hide();
  });

  // event listener for new user
  $("#sign-in-form").find("p.form-text-link").on("click", function(){
      console.log("sign in form event!");
      $("form#sign-in-form").hide();
      $("form#sign-up-form").show();
  });
});


// Whenever the user presses down a key, they could
// be inserting into the form
$(document).on("keyup", function(e){
  // 1. check to see if the user is entering a password
  if ($("#sign-up-password").is(':focus')){
    console.info("User is entering something into password field");
    // CALL FUNCTION THAT CHECKS FOR VALID DATA
    checkValidPassword( $("#sign-up-password").val().trim() );
    // console.log($("#sign-up-password").val().trim());
  }
  // 2. check to see if the user is entering a password
  else if ($("#confirmPassword").is(':focus')) {
    console.info("User is entering something into CONFIRM password field");
  }
  // 3. check if user is entering an email
  else if ($("#sign-up-email").is(':focus')){
    console.info("User is entering something into sign up email");
  }

})
