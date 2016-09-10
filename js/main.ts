/// <reference path="X:\MSA module 2\typings\index.d.ts" />
declare var FB:any;

// Only works after `FB.init` is called
function myFacebookLogin() {
    FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
}

function calculateRate() {
	//get whats in the comboboxes
	var from = document.getElementById("from").value;

	var to = document.getElementById("to").value;

	var amount = document.getElementById("amount").value;
	//make dynamic API request
	GET
	//access the data that is recieved

	//change the GUI to match what was recieved

	//
}
