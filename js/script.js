// import ciao from "../puntiniModule/puntini.js";

window.onload = function(){
    const img = document.getElementById("sfondoScorriId");
    var incrementazione;
    var posizione = 0;
    var tempo = 5;
    tempo *= 1000;

    function cambioSlide(direzione) {
        switch(direzione){
            case "avanti":
                incrementazione += 100/3;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                posizione += 1;
                console.log(incrementazione);
                break;
            case "indietro":
                incrementazione = 0;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                posizione = 0;
                console.log(incrementazione);
                break;
            default:
                alert("error 1: la funzione cambio slide non funziona correttamente");
        }
    }

    function cambioAutomatico(){
        if(posizione == 0){
            cambioSlide("avanti");
        }else if(posizione == 1){
            cambioSlide("avanti");
        }else if(posizione == 2){
            cambioSlide("indietro");
        }else{
            alert("error 2: la funzione cambio automatico non funziona correttamente");
        }
    }

    setInterval(cambioAutomatico, tempo);

};
