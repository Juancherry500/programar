function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

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

    let ataqueAleatorio=aleatorio(1,3);
    let spanMascotaEnemigo=document.getElementById("masota-enemigo");

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML="Hipodoge";
    }else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML="Capipepo";
    }else {
        spanMascotaEnemigo.innerHTML="Ratigueya";
    }
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load",iniciarJuego)