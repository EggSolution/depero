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
    var Nbottoni = 0;
    
    function bottoneQuadro(x, y, colore, testo){
        Nbottoni += 1;

        function bottoneQuadro2(Nbottoni){
            eval('var bottoniQuadri'+Nbottoni+' = document.createElement("div");');
            eval('bottoniQuadri'+Nbottoni+'.textContent = ""');
            eval('document.querySelector(".home").appendChild(bottoniQuadri'+Nbottoni+');');
            eval('bottoniQuadri'+Nbottoni+'.className = "bottoneQuadro'+Nbottoni+'";');
    
            eval('var bottone'+Nbottoni+' = document.createElement("div");');
            eval('bottone'+Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+Nbottoni+'").appendChild(bottone'+Nbottoni+');');
    
            eval('vignetta'+Nbottoni+' = document.createElement("div");');
            eval('vignetta'+Nbottoni+'.textContent = "'+testo+'";');
            eval('document.querySelector(".bottoneQuadro'+Nbottoni+'").appendChild(vignetta'+Nbottoni+');');
    
            // stile
            eval('bottoniQuadri'+Nbottoni+'.style.left = ""+y+"px";');
            eval('bottoniQuadri'+Nbottoni+'.style.top = ""+x+"px";');
            eval('bottone'+Nbottoni+'.style.color = colore;');
            eval('bottone'+Nbottoni+'.style.background  = colore;');
            eval('bottone'+Nbottoni+'.style.position = "absolute";');
            eval('bottone'+Nbottoni+'.style.height = "12px";');
            eval('bottone'+Nbottoni+'.style.width = "12px";');
            eval('bottone'+Nbottoni+'.style.borderRadius = "50%";');
            eval('bottone'+Nbottoni+'.style.left = ""+y+"px";');
            eval('bottone'+Nbottoni+'.style.top = ""+x+"px";');

            eval('vignetta'+Nbottoni+'.style.color = "black";');
            eval('vignetta'+Nbottoni+'.style.background = "white";');
            eval('vignetta'+Nbottoni+'.style.height = "40px";');
            eval('vignetta'+Nbottoni+'.style.width = "100px";');
            eval('vignetta'+Nbottoni+'.style.borderRadius = "5px";');
            eval('vignetta'+Nbottoni+'.style.position = "absolute";');

            eval('var larghezzaVignetta = vignetta'+Nbottoni+'.style.width;');
            var x2 = x + 20;
            var y2 = y - (larghezzaVignetta / 2);
            eval('vignettaX'+Nbottoni+' = String('+x2+'+"px");');
            eval('vignettaY'+Nbottoni+' = String('+y2+'+"px");');

            eval('vignetta'+Nbottoni+'.style.left = vignettaY'+Nbottoni+';');
            eval('vignetta'+Nbottoni+'.style.top = vignettaX'+Nbottoni+';');
            eval('vignetta'+Nbottoni+'.style.display = "none";');

            eval('function mostraVignetta'+Nbottoni+'(){vignetta'+Nbottoni+'.style.display = "block";}');
            eval('function nascondiVignetta'+Nbottoni+'(){vignetta'+Nbottoni+'.style.display = "none";}');
            
            eval('bottoniQuadri'+Nbottoni+'.addEventListener("mouseover", mostraVignetta'+Nbottoni+');');
            eval('bottoniQuadri'+Nbottoni+'.addEventListener("mouseout", nascondiVignetta'+Nbottoni+');');

        }
        bottoneQuadro2(Nbottoni);
    }

    bottoneQuadro(300, 500, "#faff00", "mjBFH");
    bottoneQuadro(200, 400, "#faff00", "ciao");
};
