window.onload = function(){
    //posizione mouse
    // BOTTONI QUADRI
    var larghezzaSchermo = screen.width;
    var Nbottoni = 0;
    var x, y, x1, y1;
    function bottoneQuadro(x1, y1, colore, apparteneza, titolo, testo){
        window.Nbottoni += 1;
        x1 = (x1 * window.innerHeight) / 955;
        y1 = (y1 * window.innerWidth) / 1920;
        function bottoneQuadro2(Nbottoni, x, y){
            eval('var bottone'+Nbottoni+';');
            var larghezza = 250;

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
            eval('var bottoniQuadri'+window.Nbottoni+' = document.createElement("div");');
            eval('bottoniQuadri'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".sfondo-scorri").appendChild(bottoniQuadri'+window.Nbottoni+');');
            eval('bottoniQuadri'+window.Nbottoni+'.className = "bottoneQuadro'+window.Nbottoni+'";');
            eval('bottone'+window.Nbottoni+' = document.createElement("div");');
            eval('bottone'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+window.Nbottoni+'").appendChild(bottone'+window.Nbottoni+');');
            eval('var vignetta'+window.Nbottoni+' = document.createElement("div");');
            eval('vignetta'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".sfondo-scorri").appendChild(vignetta'+window.Nbottoni+');');
            eval('vignetta'+window.Nbottoni+'.className = "vignetta'+window.Nbottoni+'";');
            eval('var titoloVignetta'+window.Nbottoni+' = document.createElement("div");');
            eval('titoloVignetta'+window.Nbottoni+'.textContent = "'+titolo+'";');
            eval('document.querySelector(".vignetta'+window.Nbottoni+'").appendChild(titoloVignetta'+window.Nbottoni+');');
            eval('var testoSotto'+window.Nbottoni+' = document.createElement("div");');
            eval('testoSotto'+window.Nbottoni+'.textContent = "'+testo+'";');
            eval('document.querySelector(".vignetta'+window.Nbottoni+'").appendChild(testoSotto'+window.Nbottoni+');');
            var x2 = x + 20;
            var y2 = y - 0;
            eval('triangoloX'+window.Nbottoni+' = String('+x2+'+"px");');
            eval('triangoloY'+window.Nbottoni+' = String('+y2+'+"px");');
            eval('triangoloSopra'+window.Nbottoni+' = document.createElement("div");');
            eval('triangoloSopra'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+window.Nbottoni+'").appendChild(triangoloSopra'+window.Nbottoni+');');
            eval('triangoloSopra'+window.Nbottoni+'.style.height = "0px";');
            eval('triangoloSopra'+window.Nbottoni+'.style.width = "0px";');
            eval('triangoloSopra'+window.Nbottoni+'.style.borderBottom = "10px solid white";');
            eval('triangoloSopra'+window.Nbottoni+'.style.borderLeft = "10px solid transparent";');
            eval('triangoloSopra'+window.Nbottoni+'.style.borderRight = "10px solid transparent";');
            eval('triangoloSopra'+window.Nbottoni+'.style.position = "absolute";');
            eval('triangoloSopra'+window.Nbottoni+'.style.left = triangoloY'+window.Nbottoni+';');
            eval('triangoloSopra'+window.Nbottoni+'.style.top = triangoloX'+window.Nbottoni+';');
            eval('triangoloSopra'+window.Nbottoni+'.style.opacity = "0";');
            eval('triangoloSopra'+window.Nbottoni+'.style.transition = "opacity 0.6s";');
            eval('triangoloSopra'+window.Nbottoni+'.style.zIndex = "6";');
            eval('bottoniQuadri'+window.Nbottoni+'.style.left = ""+y+"px";');
            eval('bottoniQuadri'+window.Nbottoni+'.style.top = ""+x+"px";');
            eval('bottoniQuadri'+window.Nbottoni+'.style.zIndex = "5";');
            eval('bottone'+window.Nbottoni+'.style.color = colore;');
            eval('bottone'+window.Nbottoni+'.style.background  = colore;');
            eval('bottone'+window.Nbottoni+'.style.position = "absolute";');
            eval('bottone'+window.Nbottoni+'.style.height = "20px";');
            eval('bottone'+window.Nbottoni+'.style.width = "20px";');
            eval('bottone'+window.Nbottoni+'.style.borderRadius = "50%";');
            eval('bottone'+window.Nbottoni+'.style.left = ""+y+"px";');
            eval('bottone'+window.Nbottoni+'.style.top = ""+x+"px";');
            eval('bottone'+window.Nbottoni+'.style.zIndex = "6";');
            larghezza = String(larghezza + "px");
            eval('vignetta'+window.Nbottoni+'.style.color = "black";');
            eval('vignetta'+window.Nbottoni+'.style.background = "white";');
            eval('vignetta'+window.Nbottoni+'.style.minHeight = "80px";');
            eval('vignetta'+window.Nbottoni+'.style.width = "'+larghezza+'";');
            eval('vignetta'+window.Nbottoni+'.style.borderRadius = "20px";');
            eval('vignetta'+window.Nbottoni+'.style.position = "absolute";');
            eval('vignetta'+window.Nbottoni+'.style.textAlign = "center";');
            eval('vignetta'+window.Nbottoni+'.style.display = "flex";');
            eval('vignetta'+window.Nbottoni+'.style.flexDirection = "column";');
            eval('vignetta'+window.Nbottoni+'.style.justifyContent = "center";');
            eval('vignetta'+window.Nbottoni+'.style.padding = "10px";');
            eval('vignetta'+window.Nbottoni+'.style.zIndex = "6";');
            eval('titoloVignetta'+window.Nbottoni+'.style.width = "'+larghezza+'";');
            eval('titoloVignetta'+window.Nbottoni+'.style.height = "20px";');
            eval('titoloVignetta'+window.Nbottoni+'.style.zIndex = "6";');
            larghezza -= 0;
            larghezza = String(larghezza + "px");
            eval('testoSotto'+window.Nbottoni+'.style.marginTop = "20px";');
            eval('testoSotto'+window.Nbottoni+'.style.marginBottom = "10px";');
            eval('testoSotto'+window.Nbottoni+'.style.width = "'+larghezza+'";');
            eval('testoSotto'+window.Nbottoni+'.style.textAlign = "center";');
            eval('testoSotto'+window.Nbottoni+'.style.zIndex = "6";');
            var x2 = x + 30;
            var y2 = y - (250 / 2) + 2;
            eval('vignettaX'+window.Nbottoni+' = String('+x2+'+"px");');
            eval('vignettaY'+window.Nbottoni+' = String('+y2+'+"px");');
            eval('vignetta'+window.Nbottoni+'.style.left = vignettaY'+window.Nbottoni+';');
            eval('vignetta'+window.Nbottoni+'.style.top = vignettaX'+window.Nbottoni+';');
            eval('vignetta'+window.Nbottoni+'.style.opacity = "0";');
            eval('vignetta'+window.Nbottoni+'.style.transition = "opacity 0.6s";');
            eval('function mostraVignetta'+window.Nbottoni+'(){vignetta'+window.Nbottoni+'.style.opacity = "1";triangoloSopra'+window.Nbottoni+'.style.opacity = "1";}');
            eval('function nascondiVignetta'+window.Nbottoni+'(){vignetta'+window.Nbottoni+'.style.opacity = "0";triangoloSopra'+window.Nbottoni+'.style.opacity = "0";}');
        }
        bottoneQuadro2(Nbottoni, x1, y1);
    }
    var testo1 = "Quis ut sed sed perferendis excepturi. Qui sit ut temporibus qui earum doloribus. Voluptatum sit hic voluptatem distinctio cum dolorum eveniet et. Incidunt consequuntur a ea sunt quae dolor neque sunt. Laboriosam in ut eveniet quos odit quo numquam qui."
    var testo2 = "Fugit voluptatem ipsa consequatur fugiat distinctio veritatis nihil aperiam. Quia vel laudantium doloribus ea architecto itaque earum."
    var testo3 = "Blanditiis laboriosam assumenda quisquam atque inventore illo. Et nulla et blanditiis natus quia aut omnis."
    //            x:   y:    colore:   appartenenza: titolo:     testo:
    bottoneQuadro(500, 370, "#e6fa07", "sfondo1",   "Quadro 1", testo1);
    bottoneQuadro(500, 770, "#e6fa07", "sfondo1",   "Quadro 2", testo1);
    bottoneQuadro(510, 1600, "#e6fa07", "sfondo1",   "Quadro 3", testo1);
    bottoneQuadro(630, 420, "#e6fa07", "sfondo2",   "Quadro 4", testo2);
    bottoneQuadro(625, 740, "#e6fa07", "sfondo2",   "Quadro 5", testo2);
    bottoneQuadro(630, 1040, "#e6fa07", "sfondo2",   "Quadro 6", testo2);
    bottoneQuadro(623, 1670, "#e6fa07", "sfondo2",   "Quadro 7", testo2);
    bottoneQuadro(510, 980, "#e6fa07", "sfondo3",  "Quadro 9", testo3);
    bottoneQuadro(490, 772, "#e6fa07", "sfondo3",  "Quadro 8", testo3);
    bottoneQuadro(512, 1375, "#e6fa07", "sfondo3",  "Quadro 10", testo3);
    bottoneQuadro(504, 1660, "#e6fa07", "sfondo3",  "Quadro 11", testo3);

    //variabili SLIDE
    const img = document.querySelector("#sfondoScorriId");
    // intanto non servono ma lasciali qui
    // const bottoneSlide1 = document.querySelector(".bottoneSlide1");
    // const bottoneSlide2 = document.querySelector(".bottoneSlide2");
    // const bottoneSlide3 = document.querySelector(".bottoneSlide3");
    var incrementazione = 0;
    var posizione = 0;
    var tempo = 90;
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
    var i = 0;
    console.log(window.Nbottoni);
    while(i < window.Nbottoni){
        i += 1;
        eval('bottone'+i+'.addEventListener("mouseover", mostraVignetta'+i+');');
        eval('bottone'+i+'.addEventListener("mouseout", nascondiVignetta'+i+');');
        console.log(i);
    }
};
