// import ciao from "../puntiniModule/puntini.js";

window.onload = function(){

    //variabili SLIDE
    const img = document.querySelector("#sfondoScorriId");
    // intanto non servono ma lasciali qui
    const bottoneSlide1 = document.querySelector(".bottoneSlide1");
    const bottoneSlide2 = document.querySelector(".bottoneSlide2");
    const bottoneSlide3 = document.querySelector(".bottoneSlide3");
    // 
    var incrementazione = 0;
    var posizione = 0;
    var tempo = 8;
    tempo *= 1000;

    //variabili BOTTONI QUADRI
    var coordinate;



    // SLIDE

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
                break;
            case "indietro":
                incrementazione = 0;
                img.style.transform = String("translate(-"+incrementazione+"%)");
                posizione = 0;
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
    }

    setInterval(cambioAutomatico, tempo);


    // BOTTONI QUADRI

    function bottoneQuadro(coordinate, nomeQuadro, descrizione, link){
        
    }
};
