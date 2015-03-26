// Copyright 2015 SIL
// by Ben Lippincott

var swipeCode = "";
var listenForInput = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    swipeCode += charStr;
};


var CardSwipeFillFields = {
	cardNumber: function(cardField){
	}
}

