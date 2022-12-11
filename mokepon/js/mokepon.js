let ataqueJuagador;
let ataqueEnemigo;

function iniciarJuego(){

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

    let botonAtaqueFuego = document.getElementById("boton-fuego");
    botonAtaqueFuego.addEventListener("click",ataqueFuego);
    let botonAtaqueAgua = document.getElementById("boton-agua");
    botonAtaqueAgua.addEventListener("click",ataqueAgua);
    let botonAtaqueTierra = document.getElementById("boton-tierra");
    botonAtaqueTierra.addEventListener("click",ataqueTierra);
}

function seleccionarMascotaJugador(){
    
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
    let spanMascotaEnemigo=document.getElementById("masota-enemigo");

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
    alert(ataqueJuagador);
    ataqueEnemigoAleatorio();
}
function ataqueAgua(){

    ataqueJuagador="AGUA";
    alert(ataqueJuagador);
    ataqueEnemigoAleatorio();
}
function ataqueTierra(){

    ataqueJuagador="TIERRA";
    alert(ataqueJuagador);
    ataqueEnemigoAleatorio()
}
function ataqueEnemigoAleatorio(){
    
    let ataqueAleatorio=aleatorio(1,3);

    if(ataqueAleatorio == 1){
        ataqueEnemigo="FUEGO";
        alert("El ataque de tu enemigo es " + ataqueEnemigo)
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo="AGUA";
        alert("El ataque de tu enemigo es " + ataqueEnemigo)
    }else{
        ataqueEnemigo="TIERRA";
        alert("El ataque de tu enemigo es " + ataqueEnemigo)
    }
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load",iniciarJuego)