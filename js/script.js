window.onload = function(){
    // BOTTONI QUADRI
    var larghezzaSchermo = screen.width;
    var Nbottoni;
    window.Nbottoni = 0;
    var x, y, x1, y1;
    var bottoniQuadri0 = document.createElement("div");
    bottoniQuadri0.textContent = "";
    bottoniQuadri0.className = "bottoniQuadri0";
    function bottoneQuadro(x1, y1, colore, apparteneza, titolo, testo){
        window.Nbottoni += 1;
        x1 = (x1 * window.innerHeight) / 947;
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
                    var y = y1 + (window.innerWidth);
                    break;
                case "sfondo3":
                    var x = x1;
                    var y = y1 + (window.innerWidth) * 2;
                    break;
                default:
                    console.error('error 3: la funzione non è stata chiamata con un parametro adeguata');
            }
            eval('document.querySelector(".sfondo-scorri").appendChild(bottoniQuadri0);');
            eval('var bottoniQuadri'+window.Nbottoni+' = document.createElement("div");');
            eval('bottoniQuadri'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoniQuadri0").appendChild(bottoniQuadri'+window.Nbottoni+');');
            eval('bottoniQuadri'+window.Nbottoni+'.className = "bottoneQuadro'+window.Nbottoni+'";');
            eval('bottone'+window.Nbottoni+' = document.createElement("div");');
            eval('bottone'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoneQuadro'+window.Nbottoni+'").appendChild(bottone'+window.Nbottoni+');');
            eval('var vignetta'+window.Nbottoni+' = document.createElement("div");');
            eval('vignetta'+window.Nbottoni+'.textContent = "";');
            eval('document.querySelector(".bottoniQuadri0").appendChild(vignetta'+window.Nbottoni+');');
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
            eval('triangoloSopra'+window.Nbottoni+'.style.zIndex = "5";');
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
            eval('bottone'+window.Nbottoni+'.style.zIndex = "5";');
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
            eval('vignetta'+window.Nbottoni+'.style.zIndex = "5";');
            eval('titoloVignetta'+window.Nbottoni+'.style.width = "'+larghezza+'";');
            eval('titoloVignetta'+window.Nbottoni+'.style.height = "20px";');
            eval('titoloVignetta'+window.Nbottoni+'.style.zIndex = "5";');
            larghezza -= 0;
            larghezza = String(larghezza + "px");
            eval('testoSotto'+window.Nbottoni+'.style.marginTop = "20px";');
            eval('testoSotto'+window.Nbottoni+'.style.marginBottom = "10px";');
            eval('testoSotto'+window.Nbottoni+'.style.width = "'+larghezza+'";');
            eval('testoSotto'+window.Nbottoni+'.style.textAlign = "center";');
            eval('testoSotto'+window.Nbottoni+'.style.zIndex = "5";');
            var x2 = x + 30;
            var y2 = y - (250 / 2) + 2;
            eval('vignettaX'+window.Nbottoni+' = String('+x2+'+"px");');
            eval('vignettaY'+window.Nbottoni+' = String('+y2+'+"px");');
            eval('vignetta'+window.Nbottoni+'.style.left = vignettaY'+window.Nbottoni+';');
            eval('vignetta'+window.Nbottoni+'.style.top = vignettaX'+window.Nbottoni+';');
            eval('vignetta'+window.Nbottoni+'.style.opacity = "0";');
            eval('vignetta'+window.Nbottoni+'.style.transition = "opacity 0.6s";');
            eval('window.mostraVignetta'+window.Nbottoni+' = function(){vignetta'+window.Nbottoni+'.style.opacity = "1";triangoloSopra'+window.Nbottoni+'.style.opacity = "1";}');
            eval('window.nascondiVignetta'+window.Nbottoni+' = function(){vignetta'+window.Nbottoni+'.style.opacity = "0";triangoloSopra'+window.Nbottoni+'.style.opacity = "0";}');
        }
        bottoneQuadro2(Nbottoni, x1, y1);
    }
    var testo1 = "Quis ut sed sed perferendis excepturi. Qui sit ut temporibus qui earum doloribus. Voluptatum sit hic voluptatem distinctio cum dolorum eveniet et. Incidunt consequuntur a ea sunt quae dolor neque sunt. Laboriosam in ut eveniet quos odit quo numquam qui."
    var testo2 = "Fugit voluptatem ipsa consequatur fugiat distinctio veritatis nihil aperiam. Quia vel laudantium doloribus ea architecto itaque earum."
    var testo3 = "Blanditiis laboriosam assumenda quisquam atque inventore illo. Et nulla et blanditiis natus quia aut omnis."
    //            x:   y:    colore:   appartenenza: titolo:     testo:
    //slide 1
    bottoneQuadro(505, 690, "#e6fa07", "sfondo1",   "Quadro 1", testo1);
    bottoneQuadro(515, 1015, "#e6fa07", "sfondo1",   "Quadro 2", testo1);
    bottoneQuadro(515, 1670, "#e6fa07", "sfondo1",   "Quadro 3", testo1);
    //slide 2
    bottoneQuadro(630, 688, "#e6fa07", "sfondo2",   "Quadro 4", testo2);
    bottoneQuadro(625, 960, "#e6fa07", "sfondo2",   "Quadro 5", testo2);
    bottoneQuadro(630, 1230, "#e6fa07", "sfondo2",   "Quadro 6", testo2);
    bottoneQuadro(623, 1750, "#e6fa07", "sfondo2",   "Quadro 7", testo2);
    //slide 3
    bottoneQuadro(630, 660, "#e6fa07", "sfondo3",  "Mandorlato Vido", "Nel quadro è rappresentato la mascotte dell'azienda Mandorlato Vido.");
    bottoneQuadro(508, 1160, "#e6fa07", "sfondo3",  "Liquore Strega", "Nel quadro è rappresentato un picchio posato sopra ad un bicchiere di liquore strega.");
    bottoneQuadro(515, 1455, "#e6fa07", "sfondo3",  "Quadro 10", testo3);
    bottoneQuadro(515, 1680, "#e6fa07", "sfondo3",  "Quadro 11", testo3);

    //variabili SLIDE
    const img = document.querySelector("#sfondoScorriId");
    var bottoneSlide1;
    var bottoneSlide2;
    var bottoneSlide3;
    var incrementazione = 0;
    var posizione = 0;
    var tempo = 90;
    tempo *= 1000;
    // SLIDE
    window.cambioSlide = function(direzione) {
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
                console.error("error 1: la funzione cambioSlide non funziona correttamente");
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
                console.error("error 2: la funzione cambioAutomatico non funziona correttamente");
        }
    }
    setInterval(cambioAutomatico, tempo);
    document.querySelector(".bottoneSlide1").addEventListener("click", function(){
        window.cambioSlide('uno')
    });
    document.querySelector(".bottoneSlide2").addEventListener("click", function(){
        window.cambioSlide('due')
    });
    document.querySelector(".bottoneSlide3").addEventListener("click", function(){
        window.cambioSlide('tre')
    });
    var i = 0;
    while(i < window.Nbottoni){
        i += 1;
        eval('bottone'+i+'.addEventListener("mouseover", mostraVignetta'+i+');');
        eval('bottone'+i+'.addEventListener("mouseout", nascondiVignetta'+i+');');
    }

    // MOBILE
    if(window.screen.availWidth < 1000){
        document.querySelector('.scritteMenu').style.marginTop = '0px';
        // menu
        var corpo = document.querySelector('body');
        var menu = document.querySelector('.hamburgerMenu');
        var sfondoSlide = document.querySelector('#sfondoScorriId');
        var meet1 = document.querySelector('.meet1');
        var meet2 = document.querySelector('.meet2');
        var meet3 = document.querySelector('.meet3');
        var menuEsteso = document.querySelector('.menuMobile');
        var testoMenu = document.querySelector('.menuMobileScritte');
        var logo = document.querySelector('.logo');
        var bottoneSlide1 = document.querySelector('.bottoneSlide1');
        var bottoneSlide2 = document.querySelector('.bottoneSlide2');
        var bottoneSlide3 = document.querySelector('.bottoneSlide3');
        var bottoneMenu1 = document.querySelector('.scrittaMenu1M');
        var bottoneMenu2 = document.querySelector('.scrittaMenu2M');
        var bottoneMenu3 = document.querySelector('.scrittaMenu3M');
        var bottoneMenu4 = document.querySelector('.scrittaMenu4M');
        var bottoneMenu5 = document.querySelector('.scrittaMenu5M');
        menuEsteso.style.opacity = "0";
        testoMenu.style.zIndex = "0";
        bottoneMenu1.style.zIndex = "0";
        bottoneMenu2.style.zIndex = "0";
        bottoneMenu3.style.zIndex = "0";
        bottoneMenu4.style.zIndex = "0";
        bottoneMenu5.style.zIndex = "0";
        sfondoSlide.style.zIndex = "2";
        meet1.style.backgroundColor = "#242424";
        meet2.style.backgroundColor = "#242424";
        meet3.style.backgroundColor = "#242424";
        function menuCliccato(){
            if(menuEsteso.style.opacity === "1"){
                bottoneX("hamburgher")
                menuEsteso.style.opacity = "0";
                meet1.style.backgroundColor = "#242424";
                meet2.style.backgroundColor = "#242424";
                meet3.style.backgroundColor = "#242424";
                logo.style.color = "#242424";
                menuEsteso.style.zIndex = "1";
                testoMenu.style.zIndex = "1";
                bottoneMenu1.style.zIndex = "1";
                bottoneMenu2.style.zIndex = "1";
                bottoneMenu3.style.zIndex = "1";
                bottoneMenu4.style.zIndex = "1";
                bottoneMenu5.style.zIndex = "1";
            }else if(menuEsteso.style.opacity === "0"){
                bottoneX("x")
                menuEsteso.style.opacity = "1";
                meet1.style.backgroundColor = "#FFFFFF";
                meet2.style.backgroundColor = "#FFFFFF";
                meet3.style.backgroundColor = "#FFFFFF";
                logo.style.color = "#FFFFFF";
                menuEsteso.style.zIndex = "4";
                testoMenu.style.zIndex = "5";
                bottoneMenu1.style.zIndex = "5";
                bottoneMenu2.style.zIndex = "5";
                bottoneMenu3.style.zIndex = "5";
                bottoneMenu4.style.zIndex = "5";
                bottoneMenu5.style.zIndex = "5";
            }else{
                console.error('error 4: l event listener che aspetta il click del menu mobile non funziona');
            }
        }
        function hideMenu(){
            if(corpo.scrollTop >= 760){
                if(menuEsteso.style.opacity === "1"){
                    menuCliccato()
                }
            }
        }
        // BOTTONE MENU CHE DIVENTA X
        const hamburgherMenu2 = document.querySelector(".hamburgerMenu");
        const meet12 = document.querySelector(".meet1");
        const meet22 = document.querySelector(".meet2");
        const meet32 = document.querySelector(".meet3");
        meet12.style.transition = "0.2s";
        meet22.style.transition = "0.2s";
        meet32.style.transition = "0.2s";
        function bottoneX(movimento){
            switch(movimento){
                case "x":
                    meet22.style.opacity = "0";
                    meet32.style.transform = "translateY(-14.5px) rotate(45deg)"
                    meet12.style.transform = "translateY(14.5px) rotate(-45deg)"
                    meet32.style.marginTop = "12px";
                    break;
                case "hamburgher":
                    meet22.style.opacity = "1";
                    meet12.style.transform = "translateY(0px) rotate(0deg)"
                    meet32.style.transform = "translateY(0px) rotate(0deg)"
                    meet32.style.marginTop = "6px";
                    break;
                default:
                    alert("Error: funzione bottoneX non funziona corretamente")
            }
        }
        // BOTTONI VEDI ALTRO
        var parteSottoPersonaggio = document.querySelector('.sotto-p');
        var bottoneVediAltroP = document.getElementById('vediAltroP');
        var parteSottoCampari = document.querySelector('.sotto-c');
        var bottoneVediAltroC = document.getElementById('vediAltroC');
        var parteSottoViaggi = document.querySelector('.sotto-v');
        var bottoneVediAltroV = document.querySelector('.vediAltroV');
        var parteSottoStoria1 = document.querySelector('.mezzo-s');
        var parteSottoStoria2 = document.querySelector('.sotto-s');
        var bottoneVediAltroS = document.getElementById('vediAltroS');
        var parteSottoTecniche = document.querySelector('.sotto-t');
        var bottoneVediAltroT = document.querySelector('.vediAltroT');
        parteSottoPersonaggio.style.display = 'none';
        parteSottoCampari.style.display = 'none';
        parteSottoViaggi.style.display = 'none';
        parteSottoTecniche.style.display = 'none';
        parteSottoStoria1.style.display = 'none';
        parteSottoStoria2.style.display = 'none';
        parteSottoTecniche.style.display = 'none';
        var text1 = document.getElementById("vediAltroP").innerHTML;
        var text2 = document.getElementById("vediAltroS").innerHTML;
        function vediAltroP(){
            if(parteSottoPersonaggio.style.display == 'flex'){
                parteSottoPersonaggio.style.display = 'none';
                bottoneVediAltroP.innerHTML = text1.replace ('meno', 'altro');
            }else if(parteSottoPersonaggio.style.display == 'none'){
                parteSottoPersonaggio.style.display = 'flex';
                bottoneVediAltroP.innerHTML = text1.replace ('altro', 'meno');
            }else{
                console.error('Error 5: la funzione vediAltroP non funziona correttamente')
            }
        }
        function vediAltroC(){
            if(parteSottoCampari.style.display == 'flex'){
                parteSottoCampari.style.display = 'none';
                bottoneVediAltroC.innerHTML = text1.replace ('meno', 'altro');
            }else if(parteSottoCampari.style.display == 'none'){
                parteSottoCampari.style.display = 'flex';
                bottoneVediAltroC.innerHTML = text1.replace ('altro', 'meno');
            }else{
                console.error('Error 9: la funzione vediAltroC non funziona correttamente')
            }
        }
        function vediAltroV(){
            if(parteSottoViaggi.style.display == 'flex'){
                parteSottoViaggi.style.display = 'none';
                bottoneVediAltroV.innerHTML = text1.replace ('meno', 'altro');
            }else if(parteSottoViaggi.style.display == 'none'){
                parteSottoViaggi.style.display = 'flex';
                bottoneVediAltroV.innerHTML = text1.replace ('altro', 'meno');
            }else{
                console.error('Error 8: la funzione vediAltroV non funziona correttamente')
            }
        }
        function vediAltroS(){
            if(parteSottoStoria1.style.display == 'flex'){
                parteSottoStoria1.style.display = 'none';
                parteSottoStoria2.style.display = 'none';
                bottoneVediAltroS.innerHTML = text2.replace ('meno', 'altro');
            }else if(parteSottoStoria1.style.display == 'none'){
                parteSottoStoria1.style.display = 'flex';
                parteSottoStoria2.style.display = 'flex';
                bottoneVediAltroS.innerHTML = text2.replace ('altro', 'meno');
            }else{
                console.error('Error 6: la funzione vediAltroS non funziona correttamente')
            }
        }
        function vediAltroT(){
            if(parteSottoTecniche.style.display == 'flex'){
                parteSottoTecniche.style.display = 'none';
                bottoneVediAltroT.innerHTML = text2.replace ('meno', 'altro');
            }else if(parteSottoTecniche.style.display == 'none'){
                parteSottoTecniche.style.display = 'flex';
                bottoneVediAltroT.innerHTML = text2.replace ('altro', 'meno');
            }else{
                console.error('Error 7: la funzione vediAltroT non funziona correttamente')
            }
        }

        menu.addEventListener('click', function(){
            menuCliccato()
        });
        bottoneSlide1.addEventListener("click", function(){
            window.cambioSlide('uno')
        });
        bottoneSlide2.addEventListener("click", function(){
            window.cambioSlide('due')
        });
        bottoneSlide3.addEventListener("click", function(){
            window.cambioSlide('tre')
        });
        bottoneVediAltroP.addEventListener("click", vediAltroP);
        bottoneVediAltroC.addEventListener("click", vediAltroC);
        bottoneVediAltroV.addEventListener("click", vediAltroV);
        bottoneVediAltroS.addEventListener("click", vediAltroS);
        bottoneVediAltroT.addEventListener("click", vediAltroT);

        setInterval(hideMenu, 500);
    }

//modena
/*
    var larghezza100 = window.innerWidth;
    var larghezzaBordo = (140*larghezza100)/1920;
    // togliere alla fine
    console.log(larghezzaBordo);
    //
    var scritteSopraSinistra_p = document.querySelector("#scritteSopraSinistra-p");
    scritteSopraSinistra_p.style.marginLeft = larghezzaBordo;
*/
};
