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
    if (menu.classList.contains("hidemenulist")) {
        menu.classList.remove("hidemenulist");
        console.log("removed hidemenulist");
    } else {
        console.log("no hidemenulist to remove");
    }
}

function menuReverse() {
    console.log("the function has started");
    menu.classList.add("hidemenulist");
    menu.style.bottom = "-80px";
    if (menu.classList.contains("showmenulist")) {
        menu.classList.remove("showmenulist");
        console.log("removed showmenulist");
    } else {
        console.log("no showmenulist to remove");
    }
}

function backgroundMove() {
    console.log("the function has started");
    background.classList.add("showmenuimage");
    background.style.bottom = "0px";
    if (background.classList.contains("hidemenuimage")) {
        background.classList.remove("hidemenuimage");
        console.log("removed hidemenuimage");
    } else {
        console.log("no hidemenuimage to remove");
    }
}

function backgroundReverse() {
    console.log("the function has started");
    background.classList.add("hidemenuimage");
    background.style.bottom = "-350px";
    if (background.classList.contains("showmenuimage")) {
        background.classList.remove("showmenuimage");
        console.log("removed showmenuimage");
    } else {
        console.log("no showmenuimage to remove");
    }
}
