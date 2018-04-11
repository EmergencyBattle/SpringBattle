var menu = document.getElementById("mainmenu");
var background = document.getElementById("menupicture");

var hasrun = false;


function menuclick() {
    console.log("clicked");
    if (hasrun == true) {
        menuReverse();
        backgroundReverse();
        hasrun = false;
        console.log("trying to reverse");
    } else {
        menuMove();
        backgroundMove();
        hasrun = true;
        console.log("trying to animate");
    }
}

function menuMove() {
    console.log("the function has started");
    menu.classList.add("showmenulist");
    menu.style.bottom = "270px";
}

function menuReverse() {
    console.log("the function has started");
    menu.classList.add("hidemenulist");
    menu.style.bottom = "-80px";
}

function backgroundMove() {
    console.log("the function has started");

}

function backgroundReverse() {
    console.log("the function has started");

}
