window.onload = function(){
//variabili
    //variabili elementi
    var sezione = document.querySelector (".sezione");
    var sezioneQuadri = document.querySelector ("#sezioneQuadri");
    // variabili altezze
    var altezza100 = window.innerHeight;
    var altezzaSezione = altezza100/2;
    // variabile n° sezioni
    var Nsezioni = 0;
//codice
//FUNZIONE TITOLI
    function titoloQuadri(titolo,descrizione){
        Nsezioni += 1;
        //TITOLO QUADRO
        eval("var titoloQuadro" + Nsezioni + "= document.createElement ('div');");
        eval("document.querySelector(#sezioneQuadri).appendchild (titoloQuadro" + Nsezioni +");");
        eval("titoloQuadro" + Nsezioni + ".textContent = ';");
        eval("titoloQuadro" + Nsezioni + ".className = 'titoloQuadro';");
        // SEZIONE TITOLO
        eval("var sezioneTitolo-2 = document.createElement ('div');");
        eval("titoloQuadro" + Nsezioni + ".appendChild (sezioneTitolo-2);");
        eval("sezioneTitolo-2.textContent = '';");
        eval("sezioneTitolo-2.className = 'sezioneTitolo-2';");
        //TITOLO
        eval("var titolo-2 = document.createElement ('div');");
        eval("sezioneTitolo-2.appendChild (titolo-2);");
        eval("titolo-2.textContent ='" + titolo + "';")
        eval("titolo-2.className = 'titolo-2';");
        //SCRITTE TITOLO
        eval("var scritteTitolo-2 = document.createElement ('a');");
        eval("titolo-2.appendChild (scritteTitolo-2);");
        eval("scritte-titolo-2.textContent = '';");
        eval("scritteTitolo-2.className = 'scritteTitolo-2';");
        //RIGA TITOLO
        eval("var rigaTitolo-2 = document.createElment ('div');");
        eval("sezioneTitolo-2.appendChild (rigaTitolo-2);");
        eval("rigaTitolo-2.textContent = '';");
        eval("rigaTitolo-2.className = 'rigaTitolo-2';");
        // CORPO QUADRI
        eval("var corpoQuadri-2 = document.createElement ('div');");
        eval("titoloQuadro" + Nsezioni + ".appendChild (corpoQuadri-2);");
        eval("corpoQuadri-2.textContent = '';");
        eval("corpoQuadri-2.className = 'corpoQuadri-2';");
        //DIV SCRITTE
        eval("var divScritte-2 = document.createElement ('div');");
        eval("corpoQuadri-2.appendchild (divScritte-2);");
        eval("divScritte-2.textContent = '';");
        eval("divScritte-2.className = 'divScritte-2';")
        // SCRITTE CORPO QUADRI
        eval("var scritteCorpoQuadri-2 = document.createElement ('a');");
        eval("divScritte-2.appendChild (scritteCorpoQuadri-2);");
        eval("scritteCorpoQuadri-2.textContent ='" + descrizione + "';");
        eval("scritteCorpoQuadri-2.className = 'scritteCorpoQuadri-2';");
    }
    titoloQuadri("titolo","chhkhkhjkjh")
//FUNZIONE QUADRI
    function sezioniQuadri(titolo1, testo, immagine, appartenenza){
        Nsezioni += 1;
        // SEZIONE
        eval("var sezione" + Nsezioni + " = document.createElement ('div');");
        eval("document.querySelector('#sezioneQuadri').appendChild (sezione" + Nsezioni + ");");
        eval("sezione" + Nsezioni + ".textContent= '';");
        eval("sezione" + Nsezioni + ".className = 'sezione' ")
        eval("sezione" + Nsezioni + ".style.height = altezzaSezione + 'px';");
        eval("sezioneQuadri.style.height = (" + altezzaSezione * Nsezioni + ") +'px';");
        //RIGA SOPRA
        eval("var rigaSopra = document.createElement ('div');");
        eval("sezione" + Nsezioni + ".appendChild (rigaSopra);");
        eval("rigaSopra.textContent = '';");
        eval("rigaSopra.className = 'rigaSopra';");
        // CORPO SEZIONE
        eval("var corpoSezione = document.createElement ('div');");
        eval("sezione" + Nsezioni + ".appendChild (corpoSezione);");
        eval("corpoSezione.textContent = '';");
        eval("corpoSezione.className ='corpoSezione';");
        //RIGA SOTTO
        eval("var rigaSotto = document.createElement ('div');");
        eval("sezione" + Nsezioni + ".appendChild (rigaSotto);");
        eval("rigaSotto.textContent = '';");
        eval("rigaSotto.className = 'rigaSotto';");
        // SCRITTE CORPO
        eval("var scritteCorpo = document.createElement ('div');");
        eval("corpoSezione.appendChild (scritteCorpo);");
        eval("scritteCorpo.textContent = '';");
        eval("scritteCorpo.className ='scritteCorpo';");
        // SEZIONE TITOLO CORPO
        eval("var sezioneTitoloCorpo = document.createElement ('div');");
        eval("scritteCorpo.appendChild (sezioneTitoloCorpo);");
        eval("sezioneTitoloCorpo.textContent = '';");
        eval("sezioneTitoloCorpo.className = 'sezioneTitoloCorpo'");
        // TITOLO
        eval("var titolo = document.createElement ('div');");
        eval("sezioneTitoloCorpo.appendChild (titolo);");
        eval("titolo.textContent = '';");
        eval("titolo.className = 'titolo';");
        //  SCRITTE TITOLO
        eval("var scritteTitolo = document.createElement ('a');");
        eval("titolo.appendChild (scritteTitolo);");
        eval("scritteTitolo.textContent = '" + titolo1 +"';");
        eval("scritteTitolo.className = 'scritteTitolo';");
        // SEZIONE RIGA
        eval("var sezioneRiga = document.createElement ('div');");
        eval("titolo.appendChild (sezioneRiga);");
        eval("sezioneRiga.textContent = '';");
        eval("sezioneRiga.className = 'sezioneRiga'");
        // SCRITTE SCRITTE CORPO
        eval("var scritteScritteCorpo = document.createElement ('div');");
        eval("scritteCorpo.appendChild (scritteScritteCorpo);");
        eval("scritteScritteCorpo.textContent = '';");
        eval("scritteScritteCorpo.className = 'scritteScritteCorpo';");
        // SCRITTE VERE
        eval("var scritteVere = document.createElement ('div');");
        eval("scritteScritteCorpo.appendChild (scritteVere);");
        eval("scritteVere.textContent = '';");
        eval("scritteVere.className = 'scritteVere';");
        // SCRITTE
        eval("var scritte = document.createElement ('a');");
        eval("scritteVere.appendChild (scritte);");
        eval("scritte.textContent = '" + testo +"';");
        eval("scritte.className = 'scritte';")
        // FOTO CORPO
        eval("var fotoCorpo = document.createElement ('div');");
        eval("corpoSezione.appendChild (fotoCorpo);");
        eval("fotoCorpo.textContent = '';");
        eval("fotoCorpo.className = 'fotoCorpo';");
        // QUADRO SEZIONE
        eval("var quadroSezione = document.createElement ('img');");
        eval("quadroSezione.src = 'media/img/quadri/" + immagine +"';")
        eval("fotoCorpo.appendChild (quadroSezione);");
        eval("quadroSezione.textContent = '';");
        eval("quadroSezione.className = 'quadroSezione'")
        //ORIENTAMENTO SEZIONE
        var orientamento = Nsezioni % 2;   
        if (orientamento == 1){
            corpoSezione.style.flexDirection = "row";
        }
        else{
            corpoSezione.style.flexDirection = "row-reverse";
        }
        
    }
// funzione         titolo       testo        Nomeimmagine.Estensione
    sezioniQuadri ("Titolo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "quadro-prova.jpg")
    sezioniQuadri ("Titolo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "quadro-prova.jpg")
    sezioniQuadri ("Titolo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "quadro-prova.jpg")
    sezioniQuadri ("Titolo","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "quadro-prova.jpg")
}