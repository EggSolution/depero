// import ciao from "../puntiniModule/puntini.js";

window.onload = function(){

    // BOTTONI QUADRI
    var larghezzaSchermo = screen.width;
    var Nbottoni = 0;
    var x, y, x1, y1;

    var bottoniGenerale = document.createElement("div");
    bottoniGenerale.textContent = "";
    document.querySelector("body").appendChild(bottoniGenerale);
    bottoniGenerale.className = "bottoniGenerale"; 
    
    function bottoneQuadro(x1, y1, colore, apparteneza, titolo, testo){
        Nbottoni += 1;

        function bottoneQuadro2(Nbottoni, x, y){
            var larghezza = 200;

            switch(apparteneza){
                case "sfondo1":
                    var x = x1;
                    var y = y1;
                    break;
                case "sfondo2":
                    var x = x1;
                    var y = y1 + screen.width;
                    break;
                case "sfondo3":
                    var x = x1;
                    var y = y1 + screen.width * 2;
                    break;
                default:
                    allert('error 3: la funzione non è stata chiamata con un parametro adeguata');
            }

            eval('var bottoniQuadri'+Nbottoni+' = document.createElement("div");');
            eval('bottoniQuadri'+Nbottoni+'.textContent = "";');
            eval('document.querySelector(".sfondo-scorri").appendChild(bottoniQuadri'+Nbottoni+');');
            eval('bottoniQuadri'+Nbottoni+'.className = "bottoneQuadro'+Nbottoni+'";');

            eval('var bottone'+Nbottoni+' = document.createElement("div");');
            eval('bottone'+Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+Nbottoni+'").appendChild(bottone'+Nbottoni+');');

            eval('var vignetta'+Nbottoni+' = document.createElement("div");');
            eval('vignetta'+Nbottoni+'.textContent = "";');
            eval('document.querySelector(".sfondo-scorri").appendChild(vignetta'+Nbottoni+');');
            eval('vignetta'+Nbottoni+'.className = "vignetta'+Nbottoni+'";');

            eval('var titoloVignetta'+Nbottoni+' = document.createElement("div");');
            eval('titoloVignetta'+Nbottoni+'.textContent = "'+titolo+'";');
            eval('document.querySelector(".vignetta'+Nbottoni+'").appendChild(titoloVignetta'+Nbottoni+');');

            eval('var testoSotto'+Nbottoni+' = document.createElement("div");');
            eval('testoSotto'+Nbottoni+'.textContent = "'+testo+'";');
            eval('document.querySelector(".vignetta'+Nbottoni+'").appendChild(testoSotto'+Nbottoni+');');

            var x2 = x + 12;
            var y2 = y - 4;
            eval('triangoloX'+Nbottoni+' = String('+x2+'+"px");');
            eval('triangoloY'+Nbottoni+' = String('+y2+'+"px");');

            eval('triangoloSopra'+Nbottoni+' = document.createElement("div");');
            eval('triangoloSopra'+Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+Nbottoni+'").appendChild(triangoloSopra'+Nbottoni+');');

            eval('triangoloSopra'+Nbottoni+'.style.height = "0px";');
            eval('triangoloSopra'+Nbottoni+'.style.width = "0px";');
            eval('triangoloSopra'+Nbottoni+'.style.borderBottom = "10px solid white";');
            eval('triangoloSopra'+Nbottoni+'.style.borderLeft = "10px solid transparent";');
            eval('triangoloSopra'+Nbottoni+'.style.borderRight = "10px solid transparent";');
            eval('triangoloSopra'+Nbottoni+'.style.position = "absolute";');
            eval('triangoloSopra'+Nbottoni+'.style.left = triangoloY'+Nbottoni+';');
            eval('triangoloSopra'+Nbottoni+'.style.top = triangoloX'+Nbottoni+';');
            eval('triangoloSopra'+Nbottoni+'.style.opacity = "0";');
            eval('triangoloSopra'+Nbottoni+'.style.transition = "opacity 0.6s";');
            eval('triangoloSopra'+Nbottoni+'.style.zIndex = "6";');

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
            eval('bottone'+Nbottoni+'.style.zIndex = "6";');

            larghezza = String(larghezza + "px");
            eval('vignetta'+Nbottoni+'.style.color = "black";');
            eval('vignetta'+Nbottoni+'.style.background = "white";');
            eval('vignetta'+Nbottoni+'.style.minHeight = "80px";');
            eval('vignetta'+Nbottoni+'.style.width = "'+larghezza+'";');
            eval('vignetta'+Nbottoni+'.style.borderRadius = "20px";');
            eval('vignetta'+Nbottoni+'.style.position = "absolute";');
            eval('vignetta'+Nbottoni+'.style.textAlign = "center";');
            eval('vignetta'+Nbottoni+'.style.display = "flex";');
            eval('vignetta'+Nbottoni+'.style.flexDirection = "column";');
            eval('vignetta'+Nbottoni+'.style.justifyContent = "center";');
            eval('vignetta'+Nbottoni+'.style.padding = "10px";');
            eval('vignetta'+Nbottoni+'.style.zIndex = "6";');

            eval('titoloVignetta'+Nbottoni+'.style.width = "'+larghezza+'";');
            eval('titoloVignetta'+Nbottoni+'.style.height = "20px";');
            eval('titoloVignetta'+Nbottoni+'.style.zIndex = "6";');

            larghezza -= 0;
            larghezza = String(larghezza + "px");
            eval('testoSotto'+Nbottoni+'.style.marginTop = "20px";');
            eval('testoSotto'+Nbottoni+'.style.marginBottom = "10px";');
            eval('testoSotto'+Nbottoni+'.style.width = "'+larghezza+'";');
            eval('testoSotto'+Nbottoni+'.style.textAlign = "center";');
            eval('testoSotto'+Nbottoni+'.style.zIndex = "6";');
            var x2 = x + 22;
            var y2 = y - (200 / 2) + 5;
            eval('vignettaX'+Nbottoni+' = String('+x2+'+"px");');
            eval('vignettaY'+Nbottoni+' = String('+y2+'+"px");');

            eval('vignetta'+Nbottoni+'.style.left = vignettaY'+Nbottoni+';');
            eval('vignetta'+Nbottoni+'.style.top = vignettaX'+Nbottoni+';');
            eval('vignetta'+Nbottoni+'.style.opacity = "0";');
            eval('vignetta'+Nbottoni+'.style.transition = "opacity 0.6s";');

            eval('function mostraVignetta'+Nbottoni+'(){vignetta'+Nbottoni+'.style.opacity = "1";triangoloSopra'+Nbottoni+'.style.opacity = "1";}');
            eval('function nascondiVignetta'+Nbottoni+'(){vignetta'+Nbottoni+'.style.opacity = "0";triangoloSopra'+Nbottoni+'.style.opacity = "0";}');

            eval('bottoniQuadri'+Nbottoni+'.addEventListener("mouseover", mostraVignetta'+Nbottoni+');');
            eval('bottoniQuadri'+Nbottoni+'.addEventListener("mouseout", nascondiVignetta'+Nbottoni+');');
        }
        bottoneQuadro2(Nbottoni, x1, y1);
    }

    var testo1 = "Quis ut sed sed perferendis excepturi. Qui sit ut temporibus qui earum doloribus. Voluptatum sit hic voluptatem distinctio cum dolorum eveniet et. Incidunt consequuntur a ea sunt quae dolor neque sunt. Laboriosam in ut eveniet quos odit quo numquam qui."
    var testo2 = "Fugit voluptatem ipsa consequatur fugiat distinctio veritatis nihil aperiam. Quia vel laudantium doloribus ea architecto itaque earum."
    var testo3 = "Blanditiis laboriosam assumenda quisquam atque inventore illo. Et nulla et blanditiis natus quia aut omnis."


    //            x:   y:    colore:   appartenenza: titolo:     testo:
    bottoneQuadro(300, 800, "#faff00", "sfondo1",   "Quadro 1", testo1);
    bottoneQuadro(400, 600, "#faff00", "sfondo2",   "Quadro 2", testo2);
    bottoneQuadro(400, 1000, "#faff00", "sfondo3",  "Quadro 3", testo3);




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
};
