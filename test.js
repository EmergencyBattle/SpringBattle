if (event.target == testmodal) {
        testmodal.className += " projectmodalfadeout";
        setTimeout(function(){testBlockNone();},500);
        testmodal.style.opacity= "0.0" ;
        if (testmodal.classList.contains("projectmodalfadein")) {
            testmodal.classList.remove("projectmodalfadein");
            console.log("removed projectmodalfadein");
        } else {
            console.log("no projectmodalfadein to remove");
        }
	}


//////////////////////////////////////////////////////////////////////////////////////////////////////

var testmodal = document.getElementById("testModal");
var testthumb = document.getElementById("test");
var testClose = document.getElementById("testclose");
var testCtc = document.getElementById("testctc");

testthumb.onclick = function () {
    testmodal.style.display = "block";
    testmodal.className += " projectmodalfadein";
    testmodal.style.opacity= "1.0" ;
    if (testmodal.classList.contains("projectmodalfadeout")) {
        testmodal.classList.remove("projectmodalfadeout");
        console.log("removed projectmodalfadeout");
    } else {
        console.log("no projectmodalfadeout to remove");
    }
}
testClose.onclick = function () {
    testmodal.className += " projectmodalfadeout";
    setTimeout(function(){testBlockNone();},500);
    testmodal.style.opacity= "0.0" ;
    if (testmodal.classList.contains("projectmodalfadein")) {
        testmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
testCtc.onclick = function () {
    testmodal.className += " projectmodalfadeout";
    setTimeout(function(){testBlockNone();},500);
    testmodal.style.opacity= "0.0" ;
    if (testmodal.classList.contains("projectmodalfadein")) {
        testmodal.classList.remove("projectmodalfadein");
        console.log("removed projectmodalfadein");
    } else {
        console.log("no projectmodalfadein to remove");
    }
}
function testBlockNone(){
    testmodal.style.display = "none";

    console.log("set display to none");
}
