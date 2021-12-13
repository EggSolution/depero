window.onload = function(){
    const img = document.getElementById("sfondoScorriId");
    var funzionamento = "si";
    var posizione = 0;
    var tempo = 4000;
    var prova = 1;

    function cambioSlide(){
        if(posizione === 0){
            img.style.transform = "translate(-50%)";
            posizione = posizione + 1;
            console.log("a2-1")
        } else if (posizione === 1){
            img.style.transform = "translate(none)";
            posizione = posizione - 1;
            console.log("a2-2")
        }
    }
    function slideAutomatico(){
        setTimeout(function(){
            cambioSlide()
            console.log("a3")
        },tempo);
    }

    while(prova < 100){
        slideAutomatico()
        console.log("a1")
        prova = prova + 1;
    }

};
