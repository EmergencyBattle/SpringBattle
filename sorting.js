var ixd = document.getElementsByClassName("ixd");
var ill = document.getElementsByClassName("ill");

function hideAllIxd() {
  var elems = document.getElementsByClassName('ixd');
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.display = 'none';
  }
}

function showAllIxd() {
  var elems = document.getElementsByClassName('ixd');
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.display = 'inline-block';
  }
}

function hideAllIll() {
  var elems = document.getElementsByClassName('ill');
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.display = 'none';
  }
}

function showAllIll() {
  var elems = document.getElementsByClassName('ill');
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.display = 'inline-block';
  }
}

function allbutton(){
    showAllIll();
    showAllIxd();
}

function ixdbutton(){
    hideAllIll();
    showAllIxd();
}

function illbutton(){
    showAllIll();
    hideAllIxd();
}
