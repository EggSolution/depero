function redirectHome(){
    var realLink = window.location.href.replace(window.location.pathname, "/");
    window.location.replace(realLink);
}
