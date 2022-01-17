window.onload = function(){
//variabili
    //variabili elementi
    var sezione = document.querySelector (".sezione");
    var sezioneQuadri = document.querySelector ("#sezioneQuadri");
    // variabile n° sezioni
    var Nsezioni = 1;
//codice
//funzione
    function sezioniQuadri(testo, immagine, titolo){
        window.Nsezioni += 1;
        eval("var sezione" + Nsezioni + " = document.createElement ('div');");
        eval("document.querySelector('#sezioneQuadri').appendChild (sezione" + Nsezioni + ");");
        eval("sezione" + Nsezioni + ".textContent= '';");
        eval("sezione" + Nsezioni + ".className = 'sezione' ")
    }
// funzione         testo        immagine    titolo
    sezioniQuadri ("hkhjkhjkjh","kjhkjhjkh","gjhgjhg");
    sezioniQuadri ("hkjhkjhkjh","gjhgjhghjg","ghkjhhjkh");
//variabili 2  
     // variabili altezze
     var altezza100 = window.innerHeight;
     var altezzaSezione = altezza100/2;
     //altezze
    sezione.style.height = altezzaSezione + "px";
    sezioneQuadri.style.height = (altezzaSezione * Nsezioni) +"px";
} 