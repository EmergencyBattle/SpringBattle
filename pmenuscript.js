var menu = document.getElementById("mainmenu");
var background = document.getElementById("menupicture");
var menufade = document.getElementById("menufade");
var portfolio = document.getElementById("portfoliopagewrapper");

var hasrun = false;


function menuclick() {
    console.log("clicked");
    if (hasrun == true) {

        menuReverse();
        backgroundReverse();
        fadeReverse();
        hasrun = false;
        console.log("trying to reverse");
        setTimeout(function(){portfolioContentZIndexHigher();},1000);
    } else {
        portfolioContentZIndexLower();
        menuMove();
        backgroundMove();
        fadeMove();
        hasrun = true;
        console.log("trying to animate");
    }
}

function menuMove() {
    console.log("the function has started");
    menu.classList.add("showmenulist");
    menu.style.bottom = "255px";
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
    menu.style.bottom = "-95px";
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

function fadeMove() {
    console.log("the function has started");
    menufade.classList.add("showmenufade");
    menufade.style.backgroundColor = "hsla(229, 34%, 34%, 0.9)";
    if (menufade.classList.contains("hidemenufade")) {
        menufade.classList.remove("hidemenufade");
        console.log("removed hidemenufade");
    } else {
        console.log("no hidemenufade to remove");
    }
}

function fadeReverse() {
    console.log("the function has started");
    menufade.classList.add("hidemenufade");
    menufade.style.backgroundColor = "hsla(229, 34%, 34%, 0.0)";
    if (menufade.classList.contains("showmenufade")) {
        menufade.classList.remove("showmenufade");
        console.log("removed showmenufade");
    } else {
        console.log("no showmenufade to remove");
    }
}


function portfolioContentZIndexHigher() {
    portfolio.style.zIndex = "26";
    console.log("higher");
}

function portfolioContentZIndexLower() {
        portfolio.style.zIndex = "12";
        console.log("lower");
}
