$(document).ready(function(){
  // hide the login form
  $("form#sign-in-form").hide();

  // event listener for already registered login
  $("#sign-up-form").find("p.form-text-link").on("click", function(){
      console.log("EVENT fired");
      $("form#sign-in-form").show();
      $("form#sign-up-form").hide();
  })

  // event listener for new user
  $("#sign-in-form").find("p.form-text-link").on("click", function(){
      console.log("sign in form event!");
      $("form#sign-in-form").hide();
      $("form#sign-up-form").show();
  })

});
