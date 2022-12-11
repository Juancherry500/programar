let ataqueJuagador;
let ataqueEnemigo;
let vidaJugador=3;
let vidaEnemigo=3;

function iniciarJuego(){

    let sectionSeleccionarAtaque=document.getElementById("selecionar-ataque");
    sectionSeleccionarAtaque.style.display="none";
    let sectionSeleccionarReiniciar=document.getElementById("reiniciar");
    sectionSeleccionarReiniciar.style.display="none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

    let botonAtaqueFuego = document.getElementById("boton-fuego");
    botonAtaqueFuego.addEventListener("click",ataqueFuego);
    let botonAtaqueAgua = document.getElementById("boton-agua");
    botonAtaqueAgua.addEventListener("click",ataqueAgua);
    let botonAtaqueTierra = document.getElementById("boton-tierra");
    botonAtaqueTierra.addEventListener("click",ataqueTierra);

    let botonReiniciarJuego=document.getElementById("boton-reiniciar");
    botonReiniciarJuego.addEventListener("click",reiniciarJuego);
    
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota=document.getElementById("selecionar-mascotas");
    sectionSeleccionarMascota.style.display="none";
    let sectionSeleccionarAtaque=document.getElementById("selecionar-ataque");
    sectionSeleccionarAtaque.style.display="block";


    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let spanMascotaJuagador = document.getElementById("mascota-jugador");

    if (inputHipodoge.checked){
        spanMascotaJuagador.innerHTML="Hipodoge";
    }else if (inputCapipepo.checked){
        spanMascotaJuagador.innerHTML="Capipepo";
    }else if (inputRatigueya.checked){
        spanMascotaJuagador.innerHTML="Ratigueya";
    }else{
        alert ("Debes seleccionar una mascota")
    }

    seleccionarMascotaEnemigo() 
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatorio=aleatorio(1,3);
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo");

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML="Hipodoge";
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML="Capipepo";
    }else {
        spanMascotaEnemigo.innerHTML="Ratigueya";
    }
}
function ataqueFuego(){

    ataqueJuagador="FUEGO";
    ataqueEnemigoAleatorio();
}
function ataqueAgua(){

    ataqueJuagador="AGUA";
    ataqueEnemigoAleatorio();
}
function ataqueTierra(){

    ataqueJuagador="TIERRA";
    ataqueEnemigoAleatorio()

}
function ataqueEnemigoAleatorio(){

    let ataqueAleatorio=aleatorio(1,3);

    if(ataqueAleatorio == 1){
        ataqueEnemigo="FUEGO";
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo="AGUA";
    }else{
        ataqueEnemigo="TIERRA";
    }
    combate()
}
function combate(){

    let spanVidaJugador=document.getElementById("vida-jugador");
    let spanVidaEnemigo=document.getElementById("vida-enemigo")

    if (ataqueJuagador==ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if (ataqueJuagador=="FUEGO" && ataqueEnemigo=="AGUA"){
        crearMensaje("GANASTE")
        vidaEnemigo=vidaEnemigo-1;
        spanVidaEnemigo.innerHTML=vidaEnemigo;
    }else if (ataqueJuagador=="AGUA" && ataqueEnemigo=="TIERRA"){
        crearMensaje("GANASTE")
        vidaEnemigo=vidaEnemigo-1;
        spanVidaEnemigo.innerHTML=vidaEnemigo;
    }else if (ataqueJuagador=="TIERRA" && ataqueEnemigo=="FUEGO"){
        crearMensaje("GANASTE")
        vidaEnemigo=vidaEnemigo-1;
        spanVidaEnemigo.innerHTML=vidaEnemigo;
    }else{
        crearMensaje("PERDISTE")
        vidaJugador=vidaJugador-1;
        spanVidaJugador.innerHTML=vidaJugador;
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidaJugador==0){
        crearMensajeFinal("MALA SUERTE HAS PERDIDO");
    }else if(vidaEnemigo==0){
        crearMensajeFinal("FELICITACIONES, HAS DERROTADO A TU ENEMIGO");
    }
}
function crearMensaje(resultadoDeCombate){
    let seccionMensaje=document.getElementById("mensajes");
    let parrafo = document.createElement("p")
    parrafo.innerHTML="El ataque de tu mascota fue " + ataqueJuagador + " y el ataque de tu enemigo fue " + ataqueEnemigo + " Resultado: " + resultadoDeCombate;
    seccionMensaje.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal){
    let seccionMensaje=document.getElementById("mensajes");
    let parrafo = document.createElement("p")
    parrafo.innerHTML=resultadoFinal;
    seccionMensaje.appendChild(parrafo);

    let botonAtaqueFuego=document.getElementById("boton-fuego");
    botonAtaqueFuego.disabled=true;
    let botonAtaqueAgua=document.getElementById("boton-agua");
    botonAtaqueAgua.disabled=true;
    let botonAtaqueTierra=document.getElementById("boton-tierra");
    botonAtaqueTierra.disabled=true;

    let sectionSeleccionarReiniciar=document.getElementById("reiniciar");
    sectionSeleccionarReiniciar.style.display="block";
}
function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load",iniciarJuego)