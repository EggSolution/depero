window.onload = function(){
//variabili
    //variabili elementi
    var sezione = document.querySelector (".sezione");
    var sezioneQuadri = document.querySelector ("#sezioneQuadri");
    // variabili altezze
    var altezza100 = window.innerHeight;
    var altezzaSezione = altezza100/2;
    // variabile n° sezioni
    var Nsezioni = 1;
//codice
//funzione
    function sezioniQuadri(testo, immagine, titolo){
        Nsezioni += 1;
        // SEZIONE
        eval("var sezione" + Nsezioni + " = document.createElement ('div');");
        eval("document.querySelector('#sezioneQuadri').appendChild (sezione" + Nsezioni + ");");
        eval("sezione" + Nsezioni + ".textContent= '';");
        eval("sezione" + Nsezioni + ".className = 'sezione' ")
        eval("sezione" + Nsezioni + ".style.height = altezzaSezione + 'px';");
        eval("sezioneQuadri.style.height = (" + altezzaSezione * Nsezioni + ") +'px';");
        // CORPO SEZIONE
        eval("var corpoSezione = document.createElement ('div');");
        eval("sezione" + Nsezioni + ".appendChild (corpoSezione);");
        eval("corpoSezione.textContent = '';");
        eval("corpoSezione.className ='corpoSezione';");
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
        eval("scritteTitolo.textContent = '';");
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
        eval("scritte.textContent = '';");
        eval("scritte.className = 'scritte';")
        // FOTO CORPO
        eval("var fotoCorpo = document.createElement ('div');");
        eval("corpoSezione.appendChild (fotoCorpo);");
        eval("fotoCorpo.textContent = '';");
        eval("fotoCorpo.className = 'fotoCorpo';");
        // QUADRO SEZIONE
        eval("var quadroSezione = document.createElement ('img');");
        eval("fotoCorpo.appendChild (quadroSezione);");
        eval("quadroSezione.textContent = '';");
        eval("quadroSezione.className = 'quadroSezione'")
    }
// funzione         testo        immagine    titolo
    sezioniQuadri ("hkhjkhjkjh","kjhkjhjkh","gjhgjhg");
} 