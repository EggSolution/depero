function redirectHome(){
    var realLink = window.location.href.replace(window.location.pathname, "index.com");
    console.log(realLink);
    //window.location.replace(realLink);
}
