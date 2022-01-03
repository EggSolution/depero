function redirectHome(){
    var realLink = window.location.href.replace(window.location.pathname, "/depero/");
    window.location.replace(realLink);
}
