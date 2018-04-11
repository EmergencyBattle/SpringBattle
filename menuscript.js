var menu = document.getElementById("mainmenu");
var background = document.getElementById("menupicture");

var hasrun = false;


function menuclick() {
    console.log("clicked");
    if (hasrun == true) {
        menuReverse();
        hasrun = false;
        console.log("trying to reverse");
    } else {
        menuMove();
        hasrun = true;
        console.log("trying to animate");
    }
}

function menuMove() {
    console.log("the function has started");
    var ypos = -80;
    var id = setInterval(frame, 1);
    function frame() {
        if (ypos == 270) {
            clearInterval(id);
        } else {
            ypos = (ypos + 1);
            menu.style.bottom = ypos + 'px';
        }
    }
}

function menuReverse() {
    console.log("the function has started");
    var ypos = 270;
    var id = setInterval(frame, 1);
    function frame() {
        if (ypos == -80) {
            clearInterval(id);
        } else {
            ypos = (ypos - 1);
            menu.style.bottom = ypos + 'px';
        }
    }
}
