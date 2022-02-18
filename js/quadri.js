window.onload = function(){
//variabili
    //variabili elementi
    var sezioneTitolo = document.querySelector ("#sezioneTitolo");
    // variabili altezze
    var altezza100 = window.innerHeight;
    var altezzaSezione = altezza100/2;
    var altezza1 = altezza100/100;
    sezioneTitolo.style.height = altezzaSezione + "px";
    //variabili larghezze
    var larghezza100 = window.innerWidth;
    var larghezza50 = larghezza100/2;
    // variabile n° sezioni
    var Nsezioni = 0;
    var Ntitoli = 1;
//codice
//FUNZIONE QUADRI
    function sezioniQuadri(titolo1, testo, immagine, appartenenza, titoloSezioneQuadro, testoSezioneQuadro){
        var sezioneQuadri = document.querySelector ("#sezioneQuadri");
        Nsezioni += 1;
        //VERIFICARE SE VUOLE IL TITOLO O NO
        if (appartenenza != ""){
        
            //SEZIONE TITOLO 2
            eval("var sezioneTitolo = document.createElement ('div');");
            eval("document.querySelector('#sezioneQuadri').appendChild (sezioneTitolo);");
            eval("sezioneTitolo.textContent = '';");
            eval("sezioneTitolo.className = 'sezioneTitolo';");
            //TITOLO 2
            eval("var titolo2 = document.createElement('div');");
            eval("sezioneTitolo.appendChild (titolo2);");
            eval("titolo2.textContent = '';");
            eval("titolo2.className = 'titolo2';");
            //SEZIONE TITOLO 2
            eval("var sezioneTitolo2 = document.createElement ('div');");
            eval("titolo2.appendChild (sezioneTitolo2);");
            eval("sezioneTitolo2.textContent = '';");
            eval("sezioneTitolo2.className = 'sezioneTitolo2';");
            //TITOLO RIGA 2
            eval("var titoloRiga2 = document.createElement ('div');");
            eval("sezioneTitolo2.appendChild (titoloRiga2);");
            eval("titoloRiga2.textContent = '';");
            eval("titoloRiga2.className = 'titoloRiga2';");
            //SCRITTA TITOLO 2
            eval("var scrittaTitolo2 = document.createElement ('div');");
            eval("titoloRiga2.appendChild (scrittaTitolo2);");
            eval("scrittaTitolo2.textContent ='';");
            eval("scrittaTitolo2.className = 'scrittaTitolo2';");
            //SCRITTA TITOLO VERA 2
            eval("var scrittaTitoloVera2 = document.createElement ('a');");
            eval("scrittaTitolo2.appendChild (scrittaTitoloVera2);");
            eval("scrittaTitoloVera2.textContent = '" + titoloSezioneQuadro +"';");
            eval("scrittaTitoloVera2.className = 'scrittaTitoloVera2';");
            //RIGA2
            eval("var riga2 = document.createElement ('div');");
            eval("titoloRiga2.appendChild (riga2);");
            eval("riga2.textContent = '';");
            eval("riga2.className = 'riga2';");
            //SEZIONE CORPO 2
            eval("var sezioneCorpo2 = document.createElement ('div');");
            eval("titolo2.appendChild (sezioneCorpo2);");
            eval("sezioneCorpo2.textContent = '';");
            eval("sezioneCorpo2.className = 'sezioneCorpo2';");
            //SCRITTE 2
            eval("var scritte2 = document.createElement ('a');");
            eval("sezioneCorpo2.appendChild (scritte2);");
            eval("scritte2.textContent = '" + testoSezioneQuadro +"';");
            eval("scritte2.className = 'scritte2';");
            Ntitoli += 1;
        }
         // SEZIONE
         eval("var sezione" + Nsezioni + " = document.createElement ('div');");
         eval("document.querySelector('#sezioneQuadri').appendChild (sezione" + Nsezioni + ");");
         eval("sezione" + Nsezioni + ".textContent= '';");
         eval("sezione" + Nsezioni + ".className = 'sezione' ")
         eval("sezione" + Nsezioni + ".id = 'sezione" + Nsezioni + "';");
         eval("sezione" + Nsezioni + ".style.height = altezzaSezione + 'px';");
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
            corpoSezione.style.flexDirection = "row-reverse";
        }
        else{
            corpoSezione.style.flexDirection = "row";
        }  
        var NsezioniTitoli = (Nsezioni + Ntitoli);
        //RANDOM OSCILLATORE
        var randomOscillatore = Math.floor(Math.random() * 20);
        var oscillatore = (randomOscillatore -10);
         //stili
         sezioneQuadri.style.height = (NsezioniTitoli * altezzaSezione) + (altezza1 * 15) + "px"; 
         sezioneTitolo.style.height = altezzaSezione + "px";
         quadroSezione.style.transform = "rotate(" + oscillatore + "deg)";
    }
    function prova(){
        console.log("prova")
    }
    // BOTTONE HOME
    function bottoneHome(){
        //SEZIONE BOTTONE HOME
        eval("var sezioneBottoneHome = document.createElement('div');");
        eval("sezioneQuadri.appendChild(sezioneBottoneHome);");
        eval("sezioneBottoneHome.textContent ='';");
        eval("sezioneBottoneHome.className = 'sezioneBottoneHome';");
        //BOTTONE HOME SFONDO
        eval("var bottoneHomeSfondo = document.createElement('div');");
        eval("sezioneBottoneHome.appendChild(bottoneHomeSfondo);");
        eval("bottoneHomeSfondo.textContent = '';");
        eval("bottoneHomeSfondo.className = 'bottoneHomeSfondo';");
        //IMMAGINE HOME
        eval("var immagineHome = document.createElement('img');");
        eval("sezioneBottoneHome.appendChild(immagineHome);");
        eval("immagineHome.src = 'media/logoEggs/home.svg';");
        eval("immagineHome.textContent = '';")
        eval("immagineHome.className = 'immagineHome';");
        //STILI
        sezioneBottoneHome.style.height = (altezza1 * 15) + 'px';
        immagineHome.addEventListener("click", prova())
    }
// funzione    titolo sezione quadro/ testo sezione quadro/ immagine / appartenenza/ (titoloSezioneQuadro,/testoSezioneQuadro)
//PUBBLICITA'
    //QUADRI CAMPARI
    sezioniQuadri("Bitter Campari Soda","In questo quadro sono visibili oltre alle 2 persone sedute ai tavoli, 2 sifoni che hanno caratterizzato i quadri di depero nella collaborazione con Campari.","campari/campari1.jpg","",);
    sezioniQuadri("Cordial Campari","Nel quadro sono presenti una persona stilizzata ed il classico bicchiere della Campari, inventato proprio da fortunato Depero.","campari/campari2.jpg","",);
    sezioniQuadri("Personaggio Camapri","Nel quadro è presente la mascotte del Campari, che Depero ha inventato, bevendo un Campari.","campari/campari3.jpg","",);
    sezioniQuadri("Palazzo Campari","Nel quadro è presente una sezione di una palazzo che viene attraversato dalla scritta Cordial Campari e sorretto da un bicchiere.","campari/campari7.jpg","",);
    sezioniQuadri("Campari 1931",'In questo quadro è una semplice scritta "campari 1931", ma resa unica da Depero, con un effetto che sembra provenga dallo sfondo.',"campari/campari6.jpg","",);
    sezioniQuadri("Palazzi Intrecciati","Nel quadro sono rappresentati dei palazzi intrecciati. Questa tecnica è molto usata nei quadri di Depero, dove pubblicizza campari.","campari/campari5.jpg","",);
    //LIQUORI STREGA
    sezioniQuadri("Picchio Strega","Nel quadro è rappresentato un picchio posato sopra ad un bicchiere di liquore strega, un altra importantissima collaborazione di Depero.","strega/strega1.jpg","",);
    sezioniQuadri("Liquore Strega","Nel quadro è rappresentato la mascotte del liquore Strega, formato da molti dei caratteristici bicchieri del liquore. ","strega/strega2.jpg","");
    //VANITY FAIR
    sezioniQuadri("Vanity Fair","Nel quadro è rappresentata una persona con una sigaretta, disegnata con forme molto rotondeggianti. Questo quadro è stato realizzato per Vanity fair, un azienda di moda.","vanityFair/vanityfair1.jpg","",);
    //MANDORLATO
    sezioniQuadri("Mandorlato Vido","Nel quadro è rappresentata una persona con una sigaretta, disegnata con forme molto rotondeggianti. Questo quadro è stato realizzato per Vanity fair, un azienda di moda.","/mandorlato/mandorlatoVido.jpg","",);    
//IMMAGINE HOME
    bottoneHome();
}
