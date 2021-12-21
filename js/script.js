// import ciao from "../puntiniModule/puntini.js";

window.onload = function(){

    //variabili SLIDE
    const img = document.querySelector("#sfondoScorriId");
    // intanto non servono ma lasciali qui
    // const bottoneSlide1 = document.querySelector(".bottoneSlide1");
    // const bottoneSlide2 = document.querySelector(".bottoneSlide2");
    // const bottoneSlide3 = document.querySelector(".bottoneSlide3");
    // 
    var incrementazione = 0;
    var posizione = 0;
    var tempo = 8;
    tempo *= 1000;

    //variabili BOTTONI QUADRI


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
    var vignetta;
    var vignettaX;
    var vignettaY;
    var Nbottoni = 0;

    function bottoneQuadro(x, y, colore){
        Nbottoni += 1;

        eval("vignattaX"+Nbottoni+" = x");
        eval("vignettaY"+Nbottoni+" = y");

        var bottoniQuadri = document.createElement("div");
        bottoniQuadri.textContent = '';
        document.querySelector(".home").appendChild(bottoniQuadri);
        bottoniQuadri.className = "bottoneQuadro";

        var bottone = document.createElement("div");
        bottone.textContent = '';
        document.querySelector(".bottoneQuadro").appendChild(bottone);

        vignetta = document.createElement("div");
        vignetta.textContent = "";
        document.querySelector(".bottoneQuadro").appendChild(vignetta);

        // stile
        bottoniQuadri.style.left = ""+y+"px";
        bottoniQuadri.style.top = ""+x+"px";
        bottone.style.color = colore;
        bottone.style.background  = colore;
        bottone.style.position = "absolute";
        bottone.style.height = "12px";
        bottone.style.width = "12px";
        bottone.style.borderRadius = "50%";
        bottone.style.left = ""+y+"px";
        bottone.style.top = ""+x+"px";

        vignetta.style.color = "black";
        vignetta.style.background = "white";
        vignetta.style.height = "20px";
        vignetta.style.width = "40px";
        vignetta.style.borderRadius = "5px";
        vignetta.style.position = "absolute";
        vignetta.style.left = "vignettaY"+Nbottoni+"px";
        vignetta.style.top = "vignattaX"+Nbottoni+"px";
        vignetta.style.display = "none";

        window.bottoneQ = document.querySelector(".bottoneQuadro");

        console.log(Nbottoni);
    }

    function mostraVignetta(){
        vignetta.style.display = "block";
    }
    
    function nascondiVignetta(){
        vignetta.style.display = "none";
    }

    bottoneQuadro(300, 500, "#faff00");
    bottoneQuadro(200, 400, "#faff00");

    // coordinate, nomeQuadro, descrizione, link(opzionale)

    bottoneQ.addEventListener("mouseover", mostraVignetta);
    bottoneQ.addEventListener("mouseout", nascondiVignetta);

};
