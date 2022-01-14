window.onload = function(){
//variabili
    //variabili elementi
    var home = document.querySelector ("#home");
    var sezioneProva = document.querySelector ("#sezioneProva");
    var titoloSezione = document.querySelector ("#titoloSezione");
    var corpoSezione = document.querySelector ("#corpoSezione");
    //variabili altezze
    var altezza100 = window.innerHeight;
    var altezza50 = altezza100/2;
    var altezza10_50 = (altezza50/100)*25;
//codice
    home.style.height = altezza100+ "px";
    sezioneProva.style.height = altezza50 + "px";
    titoloSezione.style.height = altezza10_50 + "px";
} 