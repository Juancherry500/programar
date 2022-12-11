let ataqueJuagador;

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
function ataqueFuego(){
    ataqueJuagador="FUEGO";
    alert(ataqueJuagador);
}
function ataqueAgua(){
    ataqueJuagador="AGUA";
    alert(ataqueJuagador);
}
function ataqueTierra(){
    ataqueJuagador="TIERRA";
    alert(ataqueJuagador);
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

    let seleccionAleatorio=aleatorio(1,3);
    let spanMascotaEnemigo=document.getElementById("masota-enemigo");

    if (seleccionAleatorio == 1){
        spanMascotaEnemigo.innerHTML="Hipodoge";
    }else if (seleccionAleatorio == 2){
        spanMascotaEnemigo.innerHTML="Capipepo";
    }else {
        spanMascotaEnemigo.innerHTML="Ratigueya";
    }
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load",iniciarJuego)