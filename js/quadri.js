window.onload = function(){
//variabili
    //variabili elementi
    var sezioneQuadri = document.querySelector ("#sezioneQuadri");
    var sezioneTitolo = document.querySelector ("titolo");
    var titoloRiga2 = document.querySelector ("#titoloRiga-2");
    var scritte2 = document.querySelector ("#scritte-2");
    // variabili altezze
    var altezza100 = window.innerHeight;
    var altezzaSezione = altezza100/2;
    //variabili larghezze
    var larghezza100 = window.innerWidth;
    var larghezza50 = larghezza100/2;
    //margin-left
    titoloRiga2.style.marginLeft = (larghezza50 - 150) + "px";
    scritte2.style.marginLeft = (larghezza50 - 750) + "px";
    // variabile n° sezioni
    var Nsezioni = 0;
    //altezza titolo
    titolo.style.height = altezzaSezione + "px";
//codice
//FUNZIONE QUADRI
    function sezioniQuadri(titolo1, testo, immagine, appartenenza){
        Nsezioni += 1;
        //VERIFICARE SE VUOLE IL TITOLO O NO
        if (appartenenza != ""){
            console.log ("sezione: " + Nsezioni + " vuole il titolo");
                     
        }
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
    //sezioniQuadri ("Titolo","", "quadro-prova.jpg","true")
    
}