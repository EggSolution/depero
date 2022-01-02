function redirectHome(){
    console.log(window.location.pathname);
    var realLink = window.location.href.replace(window.location.pathname, "");
    console.log(realLink);
    //window.location.replace(realLink);
}
