// JavaScript source code
//var thesismodal = document.getElementById("thesisModal");
var istwtmodal = document.getElementById("istwtModal");
var lumbermodal = document.getElementById("lumberModal");
var awdmodal = document.getElementById("awdModal");
var sambmodal = document.getElementById("sambModal");
var avfallmodal = document.getElementById("avfallModal");
var compmodal = document.getElementById("compModal");
var kramforsmodal = document.getElementById("kramforsModal");
var sprakmodal = document.getElementById("sprakModal");
var susannamodal = document.getElementById("susannaModal");


// Get the button that opens the modal
//var thesisthumb = document.getElementById("thesis");
var istwtthumb = document.getElementById("istwt");
var lumberthumb = document.getElementById("lumber");
var awdthumb = document.getElementById("awd");
var sambthumb = document.getElementById("samb");
var avfallthumb = document.getElementById("avfall");
var sprakthumb = document.getElementById("sprak");
var kramforsthumb = document.getElementById("kramfors");
var compthumb = document.getElementById("comp");
var susannathumb = document.getElementById("susanna");

// Get the <span> element that closes the modal
//var thesisClose = document.getElementById("thesisclose");
//var thesisCtc = document.getElementById("thesisctc");
var istwtClose = document.getElementById("istwtclose");
var istwtCtc = document.getElementById("istwtctc");
var lumberClose = document.getElementById("lumberclose");
var lumberCtc = document.getElementById("lumberctc");
var awdClose = document.getElementById("awdclose");
var awdCtc = document.getElementById("awdctc");
var sprakClose = document.getElementById("sprakclose");
var sprakCtc = document.getElementById("sprakctc");
var compClose = document.getElementById("compclose");
var compCtc = document.getElementById("compctc");
var kramforsClose = document.getElementById("kramforsclose");
var kramforsCtc = document.getElementById("kramforsctc");
var sambClose = document.getElementById("sambclose");
var sambCtc = document.getElementById("sambctc");
var avfallClose = document.getElementById("avfallclose");
var avfallCtc = document.getElementById("avfallctc");
var susannaClose = document.getElementById("susannaclose");
var susannaCtc = document.getElementById("susannactc");

// When the user clicks on the button, open the modal
//thesisthumb.onclick = function () {
//    thesismodal.style.display = "block";
//}
istwtthumb.onclick = function () {
    istwtmodal.style.display = "block";
}
lumberthumb.onclick = function () {
    lumbermodal.style.display = "block";
}
awdthumb.onclick = function () {
    awdmodal.style.display = "block";
}

sprakthumb.onclick = function () {
    sprakmodal.style.display = "block";
}
avfallthumb.onclick = function () {
    avfallmodal.style.display = "block";
}
kramforsthumb.onclick = function () {
    kramforsmodal.style.display = "block";
}
sambthumb.onclick = function () {
    sambmodal.style.display = "block";
}
compthumb.onclick = function () {
    compmodal.style.display = "block";
}
susannathumb.onclick = function () {
    susannamodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
//thesisClose.onclick = function () {
//    thesismodal.style.display = "none";
//}
//thesisCtc.onclick = function () {
//    thesismodal.style.display = "none";
//}
istwtClose.onclick = function () {
    istwtmodal.style.display = "none";
}
istwtCtc.onclick = function () {
    istwtmodal.style.display = "none";
}
lumberClose.onclick = function () {
    lumbermodal.style.display = "none";
}
lumberCtc.onclick = function () {
    lumbermodal.style.display = "none";
}
awdClose.onclick = function () {
    awdmodal.style.display = "none";
}
awdCtc.onclick = function () {
    awdmodal.style.display = "none";
}
sprakClose.onclick = function () {
    sprakmodal.style.display = "none";
}
sprakCtc.onclick = function () {
    sprakmodal.style.display = "none";
}
kramforsClose.onclick = function () {
    kramforsmodal.style.display = "none";
}
kramforsCtc.onclick = function () {
    kramforsmodal.style.display = "none";
}
compClose.onclick = function () {
    compmodal.style.display = "none";
}
compCtc.onclick = function () {
    compmodal.style.display = "none";
}
avfallClose.onclick = function () {
    avfallmodal.style.display = "none";
}
avfallCtc.onclick = function () {
    avfallmodal.style.display = "none";
}
sambClose.onclick = function () {
    sambmodal.style.display = "none";
}
sambCtc.onclick = function () {
    sambmodal.style.display = "none";
}
susannaClose.onclick = function () {
    susannamodal.style.display = "none";
}
susannaCtc.onclick = function () {
    susannamodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
//    if (event.target == thesismodal) {
//        thesismodal.style.display = "none";
//    }
    if (event.target == istwtmodal) {
        istwtmodal.style.display = "none";
    }
    if (event.target == lumbermodal) {
        lumbermodal.style.display = "none";
    }
	if (event.target == awdmodal) {
        awdmodal.style.display = "none";
	}

	if (event.target == sambmodal) {
	    sambmodal.style.display = "none";
	}
	if (event.target == avfallmodal) {
	    avfallmodal.style.display = "none";
	}
	if (event.target == compmodal) {
	    compmodal.style.display = "none";
	}
	if (event.target == kramforsmodal) {
	    kramforsmodal.style.display = "none";
	}
	if (event.target == sprakmodal) {
	    sprakmodal.style.display = "none";
	}
	if (event.target == susannamodal) {
	    susannamodal.style.display = "none";
	}
}
