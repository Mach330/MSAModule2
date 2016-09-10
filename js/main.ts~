/// <reference path="X:\MSA module 2\typings\index.d.ts" />
declare var FB:any;

var testbtn = $("#testbtn")[0];

testbtn.addEventListener("click", function () {
    // TODO: Load random song based on mood
    alert("You clicked the button again"); 
})

// Only works after `FB.init` is called
function myFacebookLogin() {
    FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
}