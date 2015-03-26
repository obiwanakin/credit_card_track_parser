// Copyright 2015 SIL
// by Ben Lippincott
var cardFields = {
	"ccNumber" : "",
	"name" : "",
	"expDate" : ""
};
var swipeCode = "";
var myRegex = "/%([A-Z])([0-9]{1,19})\^([^\^]{2,26})\^([0-9]{4}|\^)([0-9]{3}|\^)([^\?]+)\?/";
var gotSwipe = new Event('swiped');
elem.addEventListener('swiped',fillFields, false);

var listenForInput = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    swipeCode += charStr;
    var myRegex.exec(swipeCode) = match;
    if(match != null){
    	cardFields.ccNumber = match[1];
    	cardFields.name = match[2];
    	cardFields.expDate = match[3].slice(2,4)+ "/" + "20" + match[3].slice(0,2);
    	elem.dispatchEvent(gotSwipe);
    }
};

var fillFields = function(){
		document.getElementById('cardNumber').value = cardFields.ccNumber;
		document.getElementById('cardholderName').value = cardFields.name;
		document.getElementById('expDate').value = cardFields.expDate;
	}
}