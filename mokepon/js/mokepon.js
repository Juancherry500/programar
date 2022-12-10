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
}

window.addEventListener("load",iniciarJuego)