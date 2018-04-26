// JavaScript source code
var thesismodal = document.getElementById("thesisModal");
// Get the button that opens the modal
var thesisthumb = document.getElementById("thesis");
// Get the <span> element that closes the modal
var thesisClose = document.getElementById("thesisclose");
var thesisCtc = document.getElementById("thesisctc");
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


//////////////////////////////////////////////////////////////////////////////////////////////////////

var alimermmodal = document.getElementById("alimermModal");
var alimermthumb = document.getElementById("alimerm");
var alimermClose = document.getElementById("alimermclose");
var alimermCtc = document.getElementById("alimermctc");

alimermthumb.onclick = function () {
    alimermmodal.style.display = "block";
    alimermmodal.className += " projectmodalfadein";
    alimermmodal.style.opacity= "1.0" ;
    if (alimermmodal.classList.contains("projectmodalfadeout")) {
        alimermmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
alimermClose.onclick = function () {
    alimermmodal.className += " projectmodalfadeout";
    setTimeout(function(){alimermBlockNone();},500);
    alimermmodal.style.opacity= "0.0" ;
    if (alimermmodal.classList.contains("projectmodalfadein")) {
        alimermmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
alimermCtc.onclick = function () {
    alimermmodal.className += " projectmodalfadeout";
    setTimeout(function(){alimermBlockNone();},500);
    alimermmodal.style.opacity= "0.0" ;
    if (alimermmodal.classList.contains("projectmodalfadein")) {
        alimermmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function alimermBlockNone(){
    alimermmodal.style.display = "none";

    console.log("set display to none");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

var istwtmodal = document.getElementById("istwtModal");
var istwtthumb = document.getElementById("istwt");
var istwtClose = document.getElementById("istwtclose");
var istwtCtc = document.getElementById("istwtctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var lumbermodal = document.getElementById("lumberModal");
var lumberthumb = document.getElementById("lumber");
var lumberClose = document.getElementById("lumberclose");
var lumberCtc = document.getElementById("lumberctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var awdmodal = document.getElementById("awdModal");
var awdthumb = document.getElementById("awd");
var awdClose = document.getElementById("awdclose");
var awdCtc = document.getElementById("awdctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var sambmodal = document.getElementById("sambModal");
var sambthumb = document.getElementById("samb");
var sambClose = document.getElementById("sambclose");
var sambCtc = document.getElementById("sambctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var avfallmodal = document.getElementById("avfallModal");
var avfallthumb = document.getElementById("avfall");
var avfallClose = document.getElementById("avfallclose");
var avfallCtc = document.getElementById("avfallctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var compmodal = document.getElementById("compModal");
var compthumb = document.getElementById("comp");
var compClose = document.getElementById("compclose");
var compCtc = document.getElementById("compctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var kramforsmodal = document.getElementById("kramforsModal");
var kramforsthumb = document.getElementById("kramfors");
var kramforsClose = document.getElementById("kramforsclose");
var kramforsCtc = document.getElementById("kramforsctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var sprakmodal = document.getElementById("sprakModal");
var sprakthumb = document.getElementById("sprak");
var sprakClose = document.getElementById("sprakclose");
var sprakCtc = document.getElementById("sprakctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var susannamodal = document.getElementById("susannaModal");
var susannathumb = document.getElementById("susanna");
var susannaClose = document.getElementById("susannaclose");
var susannaCtc = document.getElementById("susannactc");

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


//////////////////////////////////////////////////////////////////////////////////////////////////////

var etherealmodal = document.getElementById("etherealModal");
var etherealthumb = document.getElementById("ethereal");
var etherealClose = document.getElementById("etherealclose");
var etherealCtc = document.getElementById("etherealctc");

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

var choppitymodal = document.getElementById("choppityModal");
var choppitythumb = document.getElementById("choppity");
var choppityClose = document.getElementById("choppityclose");
var choppityCtc = document.getElementById("choppityctc");

choppitythumb.onclick = function () {
    choppitymodal.style.display = "block";
    choppitymodal.className += " projectmodalfadein";
    choppitymodal.style.opacity= "1.0" ;
    if (choppitymodal.classList.contains("projectmodalfadeout")) {
        choppitymodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
choppityClose.onclick = function () {
    choppitymodal.className += " projectmodalfadeout";
    setTimeout(function(){choppityBlockNone();},500);
    choppitymodal.style.opacity= "0.0" ;
    if (choppitymodal.classList.contains("projectmodalfadein")) {
        choppitymodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
choppityCtc.onclick = function () {
    choppitymodal.className += " projectmodalfadeout";
    setTimeout(function(){choppityBlockNone();},500);
    choppitymodal.style.opacity= "0.0" ;
    if (choppitymodal.classList.contains("projectmodalfadein")) {
        choppitymodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function choppityBlockNone(){
    choppitymodal.style.display = "none";

    console.log("set display to none");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

var demonservantmodal = document.getElementById("demonservantModal");
var demonservantthumb = document.getElementById("demonservant");
var demonservantClose = document.getElementById("demonservantclose");
var demonservantCtc = document.getElementById("demonservantctc");

demonservantthumb.onclick = function () {
    demonservantmodal.style.display = "block";
    demonservantmodal.className += " projectmodalfadein";
    demonservantmodal.style.opacity= "1.0" ;
    if (demonservantmodal.classList.contains("projectmodalfadeout")) {
        demonservantmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
demonservantClose.onclick = function () {
    demonservantmodal.className += " projectmodalfadeout";
    setTimeout(function(){demonservantBlockNone();},500);
    demonservantmodal.style.opacity= "0.0" ;
    if (demonservantmodal.classList.contains("projectmodalfadein")) {
        demonservantmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
demonservantCtc.onclick = function () {
    demonservantmodal.className += " projectmodalfadeout";
    setTimeout(function(){demonservantBlockNone();},500);
    demonservantmodal.style.opacity= "0.0" ;
    if (demonservantmodal.classList.contains("projectmodalfadein")) {
        demonservantmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function demonservantBlockNone(){
    demonservantmodal.style.display = "none";

    console.log("set display to none");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

var hijabmodal = document.getElementById("hijabModal");
var hijabthumb = document.getElementById("hijab");
var hijabClose = document.getElementById("hijabclose");
var hijabCtc = document.getElementById("hijabctc");

hijabthumb.onclick = function () {
    hijabmodal.style.display = "block";
    hijabmodal.className += " projectmodalfadein";
    hijabmodal.style.opacity= "1.0" ;
    if (hijabmodal.classList.contains("projectmodalfadeout")) {
        hijabmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
hijabClose.onclick = function () {
    hijabmodal.className += " projectmodalfadeout";
    setTimeout(function(){hijabBlockNone();},500);
    hijabmodal.style.opacity= "0.0" ;
    if (hijabmodal.classList.contains("projectmodalfadein")) {
        hijabmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
hijabCtc.onclick = function () {
    hijabmodal.className += " projectmodalfadeout";
    setTimeout(function(){hijabBlockNone();},500);
    hijabmodal.style.opacity= "0.0" ;
    if (hijabmodal.classList.contains("projectmodalfadein")) {
        hijabmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function hijabBlockNone(){
    hijabmodal.style.display = "none";

    console.log("set display to none");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

var heartfeltmodal = document.getElementById("heartfeltModal");
var heartfeltthumb = document.getElementById("heartfelt");
var heartfeltClose = document.getElementById("heartfeltclose");
var heartfeltCtc = document.getElementById("heartfeltctc");

heartfeltthumb.onclick = function () {
    heartfeltmodal.style.display = "block";
    heartfeltmodal.className += " projectmodalfadein";
    heartfeltmodal.style.opacity= "1.0" ;
    if (heartfeltmodal.classList.contains("projectmodalfadeout")) {
        heartfeltmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
heartfeltClose.onclick = function () {
    heartfeltmodal.className += " projectmodalfadeout";
    setTimeout(function(){heartfeltBlockNone();},500);
    heartfeltmodal.style.opacity= "0.0" ;
    if (heartfeltmodal.classList.contains("projectmodalfadein")) {
        heartfeltmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
heartfeltCtc.onclick = function () {
    heartfeltmodal.className += " projectmodalfadeout";
    setTimeout(function(){heartfeltBlockNone();},500);
    heartfeltmodal.style.opacity= "0.0" ;
    if (heartfeltmodal.classList.contains("projectmodalfadein")) {
        heartfeltmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function heartfeltBlockNone(){
    heartfeltmodal.style.display = "none";

    console.log("set display to none");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

var hogguardmodal = document.getElementById("hogguardModal");
var hogguardthumb = document.getElementById("hogguard");
var hogguardClose = document.getElementById("hogguardclose");
var hogguardCtc = document.getElementById("hogguardctc");

hogguardthumb.onclick = function () {
    hogguardmodal.style.display = "block";
    hogguardmodal.className += " projectmodalfadein";
    hogguardmodal.style.opacity= "1.0" ;
    if (hogguardmodal.classList.contains("projectmodalfadeout")) {
        hogguardmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
hogguardClose.onclick = function () {
    hogguardmodal.className += " projectmodalfadeout";
    setTimeout(function(){hogguardBlockNone();},500);
    hogguardmodal.style.opacity= "0.0" ;
    if (hogguardmodal.classList.contains("projectmodalfadein")) {
        hogguardmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
hogguardCtc.onclick = function () {
    hogguardmodal.className += " projectmodalfadeout";
    setTimeout(function(){hogguardBlockNone();},500);
    hogguardmodal.style.opacity= "0.0" ;
    if (hogguardmodal.classList.contains("projectmodalfadein")) {
        hogguardmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function hogguardBlockNone(){
    hogguardmodal.style.display = "none";

    console.log("set display to none");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

var cupidmodal = document.getElementById("cupidModal");
var cupidthumb = document.getElementById("cupid");
var cupidClose = document.getElementById("cupidclose");
var cupidCtc = document.getElementById("cupidctc");

cupidthumb.onclick = function () {
    cupidmodal.style.display = "block";
    cupidmodal.className += " projectmodalfadein";
    cupidmodal.style.opacity= "1.0" ;
    if (cupidmodal.classList.contains("projectmodalfadeout")) {
        cupidmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
cupidClose.onclick = function () {
    cupidmodal.className += " projectmodalfadeout";
    setTimeout(function(){cupidBlockNone();},500);
    cupidmodal.style.opacity= "0.0" ;
    if (cupidmodal.classList.contains("projectmodalfadein")) {
        cupidmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
cupidCtc.onclick = function () {
    cupidmodal.className += " projectmodalfadeout";
    setTimeout(function(){cupidBlockNone();},500);
    cupidmodal.style.opacity= "0.0" ;
    if (cupidmodal.classList.contains("projectmodalfadein")) {
        cupidmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function cupidBlockNone(){
    cupidmodal.style.display = "none";

    console.log("set display to none");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == cupidmodal) {
            cupidmodal.className += " projectmodalfadeout";
            setTimeout(function(){cupidBlockNone();},500);
            cupidmodal.style.opacity= "0.0" ;
            if (cupidmodal.classList.contains("projectmodalfadein")) {
                cupidmodal.classList.remove("projectmodalfadein");
                console.log("removed projectmodalfadein");
            } else {
                console.log("no projectmodalfadein to remove");
            }
    	}
    if (event.target == hogguardmodal) {
            hogguardmodal.className += " projectmodalfadeout";
            setTimeout(function(){hogguardBlockNone();},500);
            hogguardmodal.style.opacity= "0.0" ;
            if (hogguardmodal.classList.contains("projectmodalfadein")) {
                hogguardmodal.classList.remove("projectmodalfadein");
                console.log("removed projectmodalfadein");
            } else {
                console.log("no projectmodalfadein to remove");
            }
    	}
    if (event.target == heartfeltmodal) {
            heartfeltmodal.className += " projectmodalfadeout";
            setTimeout(function(){heartfeltBlockNone();},500);
            heartfeltmodal.style.opacity= "0.0" ;
            if (heartfeltmodal.classList.contains("projectmodalfadein")) {
                heartfeltmodal.classList.remove("projectmodalfadein");
                console.log("removed projectmodalfadein");
            } else {
                console.log("no projectmodalfadein to remove");
            }
    	}
    if (event.target == hijabmodal) {
            hijabmodal.className += " projectmodalfadeout";
            setTimeout(function(){hijabBlockNone();},500);
            hijabmodal.style.opacity= "0.0" ;
            if (hijabmodal.classList.contains("projectmodalfadein")) {
                hijabmodal.classList.remove("projectmodalfadein");
                console.log("removed projectmodalfadein");
            } else {
                console.log("no projectmodalfadein to remove");
            }
    	}
    if (event.target == demonservantmodal) {
            demonservantmodal.className += " projectmodalfadeout";
            setTimeout(function(){demonservantBlockNone();},500);
            demonservantmodal.style.opacity= "0.0" ;
            if (demonservantmodal.classList.contains("projectmodalfadein")) {
                demonservantmodal.classList.remove("projectmodalfadein");
                console.log("removed projectmodalfadein");
            } else {
                console.log("no projectmodalfadein to remove");
            }
    	}
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
    if (event.target == alimermmodal) {
        alimermmodal.className += " projectmodalfadeout";
        setTimeout(function(){alimermBlockNone();},500);
        alimermmodal.style.opacity= "0.0" ;
            if (alimermmodal.classList.contains("projectmodalfadein")) {
                alimermmodal.classList.remove("projectmodalfadein");
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
        if (event.target == choppitymodal) {
                choppitymodal.className += " projectmodalfadeout";
                setTimeout(function(){choppityBlockNone();},500);
                choppitymodal.style.opacity= "0.0" ;
                if (choppitymodal.classList.contains("projectmodalfadein")) {
                    choppitymodal.classList.remove("projectmodalfadein");
                    console.log("removed projectmodalfadein");
                } else {
                    console.log("no projectmodalfadein to remove");
                }
        	}
}
