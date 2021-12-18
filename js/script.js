// import ciao from "../puntiniModule/puntini.js";

window.onload = function(){
    const img = document.querySelector("#sfondoScorriId");
    const bottoneSlide1 = document.querySelector(".bottoneSlide1");
    const bottoneSlide2 = document.querySelector(".bottoneSlide2");
    const bottoneSlide3 = document.querySelector(".bottoneSlide3");
    var incrementazione = 0;
    var posizione = 0;
    var tempo = 8;
    tempo *= 1000;

    window.cambioSlide=function(direzione) {
        switch(direzione){
            case "avanti":
                if(posizione === 0){
                    incrementazione = 100/3;
                } else if (posizione === 1){
                    incrementazione = (100/3)*2;
                }
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
            case "uno":
                incrementazione = 0;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                incrementazione = 0;
                posizione = 0;
                break;
            case "due":
                incrementazione = 100/3;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                incrementazione = 0;
                posizione = 1;
                break;
            case "tre":
                incrementazione = (100/3)*2;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                incrementazione = 0;
                posizione = 2;
                break;
            default:
                alert("error 1: la funzione cambioSlide non funziona correttamente");
        }
    }

    function cambioAutomatico(){

        switch(posizione){
            case 0:
                cambioSlide("avanti");
                break;
            case 1:
                cambioSlide("avanti");
                break;
            case 2:
                cambioSlide("indietro");
                break;
            default:
                alert("error 2: la funzione cambioAutomatico non funziona correttamente");
        }
        console.log(posizione);
    }

    // cambioSlide(0)
    // cambioSlide(1)
    // cambioSlide(2)


    setInterval(cambioAutomatico, tempo);
};
