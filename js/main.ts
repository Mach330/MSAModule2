/// <reference path="X:\MSA module 2\typings\index.d.ts" />
declare var FB: any;

declare var exchange: number;

declare var result: number;

// Only works after `FB.init` is called
function facebookLogin() {
    FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: '' + exchange});
}, {scope: 'publish_actions'});
}
  
function MarketRate() {

    var from = (<HTMLInputElement>document.getElementById("from")).value;
    var URLandBase = `http://api.fixer.io/latest?base=${from}`;

    var url = URLandBase.replace("_CURR", "@Model.CurrencyId");

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        var resInBase = JSON.parse(xhr.responseText);
        var amount = +(<HTMLInputElement>document.getElementById("amount")).value;

        var to = (<HTMLInputElement>document.getElementById("to")).value;
        if( to === from){
            exchange = +'1';
        } else {
            exchange = +resInBase.rates[to];
        }

        //Drill down
        document.getElementById('firstP').innerHTML = ("" + Math.round((exchange * amount * 100))/100);
    };

    xhr.onerror = function () {
        //Process error
    };

    xhr.send();
};


$( document ).ready(function(){
	
    (<any>$(".chosen")).chosen();

	var options = { videoId: '980K3rtMxas', start: 0 };
	(<any>$('#wrapper')).tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia

})