window.onload = function(){
    const img = document.getElementById("sfondoScorriId");
    tempo = 3000;
    tempo1 = tempo * 1;
    tempo2 = tempo * 2;
    tempo3 = tempo * 3;
    tempo4 = tempo * 4;
    tempo5 = tempo * 5;
    tempo6 = tempo * 6;
    tempo7 = tempo * 7;
    tempo8 = tempo * 8;
    tempo9 = tempo * 9;
    var i = 10;

    while(i < 100){
        setTimeout(cambioSlide1, tempo1)
        setTimeout(cambioSlide2, tempo2)
        setTimeout(cambioSlide1, tempo3)
        setTimeout(cambioSlide2, tempo4)
        setTimeout(cambioSlide1, tempo5)
        setTimeout(cambioSlide2, tempo6)
        setTimeout(cambioSlide1, tempo7)
        setTimeout(cambioSlide2, tempo8)
        setTimeout(cambioSlide2, tempo9)
        i = i + 1;
    }

    function cambioSlide1() {
        img.style.transform = "translate(-50%)";
        console.log("1");
    }
    function cambioSlide2() {
        img.style.transform = "translate(0)";
        console.log("2");
    }

};
