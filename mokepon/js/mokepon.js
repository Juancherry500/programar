function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

}

function seleccionarMascotaJugador(){
    
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    if (inputHipodoge.checked){
        alert("Selecionaste a Hipodoge")
    }else if (inputCapipepo.checked){
        alert("Selecionaste a Capipepo")
    }else if (inputRatigueya.checked){
        alert("Selecionaste a   Ratigueya")
    }else{
        alert ("Debes seleccionar una mascota")
    }
}

window.addEventListener("load",iniciarJuego)