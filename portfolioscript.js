// JavaScript source code
var thesismodal = document.getElementById("thesisModal");
var istwtmodal = document.getElementById("istwtModal");
var lumbermodal = document.getElementById("lumberModal");
var awdmodal = document.getElementById("awdModal");
var sambmodal = document.getElementById("sambModal");
var avfallmodal = document.getElementById("avfallModal");
var compmodal = document.getElementById("compModal");
var kramforsmodal = document.getElementById("kramforsModal");
var sprakmodal = document.getElementById("sprakModal");
var susannamodal = document.getElementById("susannaModal");
var etherealmodal = document.getElementById("etherealModal");

// Get the button that opens the modal
var thesisthumb = document.getElementById("thesis");
var istwtthumb = document.getElementById("istwt");
var lumberthumb = document.getElementById("lumber");
var awdthumb = document.getElementById("awd");
var sambthumb = document.getElementById("samb");
var avfallthumb = document.getElementById("avfall");
var sprakthumb = document.getElementById("sprak");
var kramforsthumb = document.getElementById("kramfors");
var compthumb = document.getElementById("comp");
var susannathumb = document.getElementById("susanna");
var etherealthumb = document.getElementById("ethereal");

// Get the <span> element that closes the modal
var thesisClose = document.getElementById("thesisclose");
var thesisCtc = document.getElementById("thesisctc");
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
var etherealClose = document.getElementById("etherealclose");
var etherealCtc = document.getElementById("etherealctc");

// When the user clicks on the button, open the modal
thesisthumb.onclick = function () {
    thesismodal.style.display = "block";
    thesismodal.className += " projectmodalfadein";
    thesismodal.style.opacity= "1.0" ;
    if (thesismodal.classList.contains("projectmodalfadeout")) {
        thesismodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }

}
istwtthumb.onclick = function () {
    istwtmodal.style.display = "block";
    istwtmodal.className += " projectmodalfadein";
    istwtmodal.style.opacity= "1.0" ;
    if (istwtmodal.classList.contains("projectmodalfadeout")) {
        istwtmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
lumberthumb.onclick = function () {
    lumbermodal.style.display = "block";
    lumbermodal.className += " projectmodalfadein";
    lumbermodal.style.opacity= "1.0" ;
    if (lumbermodal.classList.contains("projectmodalfadeout")) {
        lumbermodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
awdthumb.onclick = function () {
    awdmodal.style.display = "block";
    awdmodal.className += " projectmodalfadein";
    awdmodal.style.opacity= "1.0" ;
    if (awdmodal.classList.contains("projectmodalfadeout")) {
        awdmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
sprakthumb.onclick = function () {
    sprakmodal.style.display = "block";
    sprakmodal.className += " projectmodalfadein";
    sprakmodal.style.opacity= "1.0" ;
    if (sprakmodal.classList.contains("projectmodalfadeout")) {
        sprakmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
avfallthumb.onclick = function () {
    avfallmodal.style.display = "block";
    avfallmodal.className += " projectmodalfadein";
    avfallmodal.style.opacity= "1.0" ;
    if (avfallmodal.classList.contains("projectmodalfadeout")) {
        avfallmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
kramforsthumb.onclick = function () {
    kramforsmodal.style.display = "block";
    kramforsmodal.className += " projectmodalfadein";
    kramforsmodal.style.opacity= "1.0" ;
    if (kramforsmodal.classList.contains("projectmodalfadeout")) {
        kramforsmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
sambthumb.onclick = function () {
    sambmodal.style.display = "block";
    sambmodal.className += " projectmodalfadein";
    sambmodal.style.opacity= "1.0" ;
    if (sambmodal.classList.contains("projectmodalfadeout")) {
        sambmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
compthumb.onclick = function () {
    compmodal.style.display = "block";
    compmodal.className += " projectmodalfadein";
    compmodal.style.opacity= "1.0" ;
    if (compmodal.classList.contains("projectmodalfadeout")) {
        compmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
susannathumb.onclick = function () {
    susannamodal.style.display = "block";
    susannamodal.className += " projectmodalfadein";
    susannamodal.style.opacity= "1.0" ;
    if (susannamodal.classList.contains("projectmodalfadeout")) {
        susannamodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
etherealthumb.onclick = function () {
    etherealmodal.style.display = "block";
    etherealmodal.className += " projectmodalfadein";
    etherealmodal.style.opacity= "1.0" ;
    if (etherealmodal.classList.contains("projectmodalfadeout")) {
        etherealmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}

// When the user clicks on <span> (x), close the modal
thesisClose.onclick = function () {
    thesismodal.className += " projectmodalfadeout";
    setTimeout(function(){thesisBlockNone();},500);
    thesismodal.style.opacity= "0.0" ;
    if (thesismodal.classList.contains("projectmodalfadein")) {
        thesismodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
thesisCtc.onclick = function () {
    thesismodal.className += " projectmodalfadeout";
    setTimeout(function(){thesisBlockNone();},500);
    thesismodal.style.opacity= "0.0" ;
    if (thesismodal.classList.contains("projectmodalfadein")) {
        thesismodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function thesisBlockNone(){
    thesismodal.style.display = "none";

    console.log("set display to none");
}

istwtClose.onclick = function () {
    istwtmodal.className += " projectmodalfadeout";
    setTimeout(function(){istwtBlockNone();},500);
    istwtmodal.style.opacity= "0.0" ;
    if (istwtmodal.classList.contains("projectmodalfadein")) {
        istwtmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
istwtCtc.onclick = function () {
    istwtmodal.className += " projectmodalfadeout";
    setTimeout(function(){istwtBlockNone();},500);
    istwtmodal.style.opacity= "0.0" ;
    if (istwtmodal.classList.contains("projectmodalfadein")) {
        istwtmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function istwtBlockNone(){
    istwtmodal.style.display = "none";

    console.log("set display to none");
}

lumberClose.onclick = function () {
    lumbermodal.className += " projectmodalfadeout";
    setTimeout(function(){lumberBlockNone();},500);
    lumbermodal.style.opacity= "0.0" ;
    if (lumbermodal.classList.contains("projectmodalfadein")) {
        lumbermodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
lumberCtc.onclick = function () {
    lumbermodal.className += " projectmodalfadeout";
    setTimeout(function(){lumberBlockNone();},500);
    lumbermodal.style.opacity= "0.0" ;
    if (lumbermodal.classList.contains("projectmodalfadein")) {
        lumbermodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function lumberBlockNone(){
    lumbermodal.style.display = "none";

    console.log("set display to none");
}

awdClose.onclick = function () {
    awdmodal.className += " projectmodalfadeout";
    setTimeout(function(){awdBlockNone();},500);
    awdmodal.style.opacity= "0.0" ;
    if (awdmodal.classList.contains("projectmodalfadein")) {
        awdmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
awdCtc.onclick = function () {
    awdmodal.className += " projectmodalfadeout";
    setTimeout(function(){awdBlockNone();},500);
    awdmodal.style.opacity= "0.0" ;
    if (awdmodal.classList.contains("projectmodalfadein")) {
        awdmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function awdBlockNone(){
    awdmodal.style.display = "none";

    console.log("set display to none");
}

sprakClose.onclick = function () {
    sprakmodal.className += " projectmodalfadeout";
    setTimeout(function(){sprakBlockNone();},500);
    sprakmodal.style.opacity= "0.0" ;
    if (sprakmodal.classList.contains("projectmodalfadein")) {
        sprakmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
sprakCtc.onclick = function () {
    sprakmodal.className += " projectmodalfadeout";
    setTimeout(function(){sprakBlockNone();},500);
    sprakmodal.style.opacity= "0.0" ;
    if (sprakmodal.classList.contains("projectmodalfadein")) {
        sprakmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function sprakBlockNone(){
    sprakmodal.style.display = "none";

    console.log("set display to none");
}

kramforsClose.onclick = function () {
    kramforsmodal.className += " projectmodalfadeout";
    setTimeout(function(){kramforsBlockNone();},500);
    kramforsmodal.style.opacity= "0.0" ;
    if (kramforsmodal.classList.contains("projectmodalfadein")) {
        kramforsmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
kramforsCtc.onclick = function () {
    kramforsmodal.className += " projectmodalfadeout";
    setTimeout(function(){kramforsBlockNone();},500);
    kramforsmodal.style.opacity= "0.0" ;
    if (kramforsmodal.classList.contains("projectmodalfadein")) {
        kramforsmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function kramforsBlockNone(){
    kramforsmodal.style.display = "none";

    console.log("set display to none");
}

compClose.onclick = function () {
    compmodal.className += " projectmodalfadeout";
    setTimeout(function(){compBlockNone();},500);
    compmodal.style.opacity= "0.0" ;
    if (compmodal.classList.contains("projectmodalfadein")) {
        compmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
compCtc.onclick = function () {
    compmodal.className += " projectmodalfadeout";
    setTimeout(function(){compBlockNone();},500);
    compmodal.style.opacity= "0.0" ;
    if (compmodal.classList.contains("projectmodalfadein")) {
        compmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function compBlockNone(){
    compmodal.style.display = "none";

    console.log("set display to none");
}

avfallClose.onclick = function () {
    avfallmodal.className += " projectmodalfadeout";
    setTimeout(function(){avfallBlockNone();},500);
    avfallmodal.style.opacity= "0.0" ;
    if (avfallmodal.classList.contains("projectmodalfadein")) {
        avfallmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
avfallCtc.onclick = function () {
    avfallmodal.className += " projectmodalfadeout";
    setTimeout(function(){avfallBlockNone();},500);
    avfallmodal.style.opacity= "0.0" ;
    if (avfallmodal.classList.contains("projectmodalfadein")) {
        avfallmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function avfallBlockNone(){
    avfallmodal.style.display = "none";

    console.log("set display to none");
}

sambClose.onclick = function () {
    sambmodal.className += " projectmodalfadeout";
    setTimeout(function(){sambBlockNone();},500);
    sambmodal.style.opacity= "0.0" ;
    if (sambmodal.classList.contains("projectmodalfadein")) {
        sambmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
sambCtc.onclick = function () {
    sambmodal.className += " projectmodalfadeout";
    setTimeout(function(){sambBlockNone();},500);
    sambmodal.style.opacity= "0.0" ;
    if (sambmodal.classList.contains("projectmodalfadein")) {
        sambmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function sambBlockNone(){
    sambmodal.style.display = "none";

    console.log("set display to none");
}

susannaClose.onclick = function () {
    susannamodal.className += " projectmodalfadeout";
    setTimeout(function(){susannaBlockNone();},500);
    susannamodal.style.opacity= "0.0" ;
    if (susannamodal.classList.contains("projectmodalfadein")) {
        susannamodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
susannaCtc.onclick = function () {
    susannamodal.className += " projectmodalfadeout";
    setTimeout(function(){susannaBlockNone();},500);
    susannamodal.style.opacity= "0.0" ;
    if (susannamodal.classList.contains("projectmodalfadein")) {
        susannamodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function susannaBlockNone(){
    susannamodal.style.display = "none";

    console.log("set display to none");
}

etherealClose.onclick = function () {
    etherealmodal.className += " projectmodalfadeout";
    setTimeout(function(){etherealBlockNone();},500);
    etherealmodal.style.opacity= "0.0" ;
    if (etherealmodal.classList.contains("projectmodalfadein")) {
        etherealmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
etherealCtc.onclick = function () {
    etherealmodal.className += " projectmodalfadeout";
    setTimeout(function(){etherealBlockNone();},500);
    etherealmodal.style.opacity= "0.0" ;
    if (etherealmodal.classList.contains("projectmodalfadein")) {
        etherealmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function etherealBlockNone(){
    etherealmodal.style.display = "none";

    console.log("set display to none");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == thesismodal) {
        thesismodal.className += " projectmodalfadeout";
        setTimeout(function(){thesisBlockNone();},500);
        thesismodal.style.opacity= "0.0" ;
        if (thesismodal.classList.contains("projectmodalfadein")) {
            thesismodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
    }
    if (event.target == istwtmodal) {
        istwtmodal.className += " projectmodalfadeout";
        setTimeout(function(){istwtBlockNone();},500);
        istwtmodal.style.opacity= "0.0" ;
        if (istwtmodal.classList.contains("projectmodalfadein")) {
            istwtmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
    }
    if (event.target == lumbermodal) {
        lumbermodal.className += " projectmodalfadeout";
        setTimeout(function(){lumberBlockNone();},500);
        lumbermodal.style.opacity= "0.0" ;
        if (lumbermodal.classList.contains("projectmodalfadein")) {
            lumbermodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
    }
	if (event.target == awdmodal) {
        awdmodal.className += " projectmodalfadeout";
        setTimeout(function(){awdBlockNone();},500);
        awdmodal.style.opacity= "0.0" ;
        if (awdmodal.classList.contains("projectmodalfadein")) {
            awdmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}

	if (event.target == sambmodal) {
        sambmodal.className += " projectmodalfadeout";
        setTimeout(function(){sambBlockNone();},500);
        sambmodal.style.opacity= "0.0" ;
        if (sambmodal.classList.contains("projectmodalfadein")) {
            sambmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
	if (event.target == avfallmodal) {
        avfallmodal.className += " projectmodalfadeout";
        setTimeout(function(){avfallBlockNone();},500);
        avfallmodal.style.opacity= "0.0" ;
        if (avfallmodal.classList.contains("projectmodalfadein")) {
            avfallmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
	if (event.target == compmodal) {
        compmodal.className += " projectmodalfadeout";
        setTimeout(function(){compBlockNone();},500);
        compmodal.style.opacity= "0.0" ;
        if (compmodal.classList.contains("projectmodalfadein")) {
            compmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
	if (event.target == kramforsmodal) {
        kramforsmodal.className += " projectmodalfadeout";
        setTimeout(function(){kramforsBlockNone();},500);
        kramforsmodal.style.opacity= "0.0" ;
        if (kramforsmodal.classList.contains("projectmodalfadein")) {
            kramforsmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
	if (event.target == sprakmodal) {
        sprakmodal.className += " projectmodalfadeout";
        setTimeout(function(){sprakBlockNone();},500);
        sprakmodal.style.opacity= "0.0" ;
        if (sprakmodal.classList.contains("projectmodalfadein")) {
            sprakmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
	if (event.target == susannamodal) {
        susannamodal.className += " projectmodalfadeout";
        setTimeout(function(){susannaBlockNone();},500);
        susannamodal.style.opacity= "0.0" ;
        if (susannamodal.classList.contains("projectmodalfadein")) {
            susannamodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
    if (event.target == etherealmodal) {
        etherealmodal.className += " projectmodalfadeout";
        setTimeout(function(){etherealBlockNone();},500);
        etherealmodal.style.opacity= "0.0" ;
        if (etherealmodal.classList.contains("projectmodalfadein")) {
            etherealmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}
}
