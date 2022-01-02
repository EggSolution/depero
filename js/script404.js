function redirectHome(){
    var realLink = window.location.href.slice(0, -8);
    var realLink = realLink+"index.html"
    window.location.replace(realLink);
}
