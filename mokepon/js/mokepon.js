function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

}

function seleccionarMascotaJugador(){
    
    let hipo = document.getElementById("hipodoge").checked
    let capi = document.getElementById("capipepo").checked
    let rati = document.getElementById("ratigueya").checked
    if (hipo){
        alert("Selecionaste a Hipodoge")
    }else if (capi){
        alert("Selecionaste a Capipepo")
    }else if (rati){
        alert("Selecionaste a   Ratigueya")
    }
}

window.addEventListener("load",iniciarJuego)