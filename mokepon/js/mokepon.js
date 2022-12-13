const sectionSeleccionarAtaque=document.getElementById("selecionar-ataque");
const sectionSeleccionarReiniciar=document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonAtaqueFuego = document.getElementById("boton-fuego");
const botonAtaqueAgua = document.getElementById("boton-agua");
const botonAtaqueTierra = document.getElementById("boton-tierra");
const botonReiniciarJuego=document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota=document.getElementById("selecionar-mascotas");
const spanMascotaJuagador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo=document.getElementById("mascota-enemigo");
const spanVidaJugador=document.getElementById("vida-jugador");
const spanVidaEnemigo=document.getElementById("vida-enemigo")
const seccionMensaje=document.getElementById("resultado");
const ataqueDelJugador=document.getElementById("ataque-Del-Jugador");
const ataqueDelEnemigo=document.getElementById("ataque-Del-Enemigo");
const contenedorDeTarjetas=document.getElementById("contenedorDeTarjetas");


let mokepones=[];
let ataqueJuagador;
let ataqueEnemigo;
let vidaJugador=3;
let vidaEnemigo=3;
let opcionesDeMokepon;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre=nombre;
        this.foto=foto;
        this.vida=vida;
        this.ataques=[];
    }
}

let hipodoge= new Mokepon("Hipodoge","./assets/hipodogue.webp",5);
let capipepo= new Mokepon("Capipepo","./assets/capipepo.webp",5);
let ratigueya= new Mokepon("Ratigueya","./assets/ratigueya.webp",5);

hipodoge.ataques.push(
    {nombre:"💧", id:"boton-agua"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🌱", id:"boton-tierra"},
)
capipepo.ataques.push(
    {nombre:"🌱", id:"boton-tierra"},
    {nombre:"🌱", id:"boton-tierra"},
    {nombre:"🌱", id:"boton-tierra"},
    {nombre:"💧", id:"boton-agua"},
    {nombre:"🔥", id:"boton-fuego"},

)
ratigueya.ataques.push(
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🔥", id:"boton-fuego"},
    {nombre:"🌱", id:"boton-tierra"},
    {nombre:"💧", id:"boton-agua"},

)
mokepones.push(hipodoge,capipepo,ratigueya);




function iniciarJuego(){

    sectionSeleccionarAtaque.style.display="none";
    sectionSeleccionarReiniciar.style.display="none";

    mokepones.forEach((mokepon) => {
         opcionesDeMokepon =`
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>  
             <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`;
        contenedorDeTarjetas.innerHTML+=opcionesDeMokepon;
        console.log(mokepon);
        inputHipodoge = document.getElementById("Hipodoge");
        inputCapipepo = document.getElementById("Capipepo");
        inputRatigueya = document.getElementById("Ratigueya");
        });
  
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

    botonAtaqueFuego.addEventListener("click",ataqueFuego);
    botonAtaqueAgua.addEventListener("click",ataqueAgua);
    botonAtaqueTierra.addEventListener("click",ataqueTierra);

    botonReiniciarJuego.addEventListener("click",reiniciarJuego);
    
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display="none";
    sectionSeleccionarAtaque.style.display="flex";


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

    let parrafoataqueDelJugador = document.createElement("p");
    let parrafoataqueDelEnemigo = document.createElement("p");

    seccionMensaje.innerHTML=resultadoDeCombate;
    parrafoataqueDelJugador.innerHTML=ataqueJuagador;
    parrafoataqueDelEnemigo.innerHTML=ataqueEnemigo;

    ataqueDelJugador.appendChild(parrafoataqueDelJugador);
    ataqueDelEnemigo.appendChild(parrafoataqueDelEnemigo);

}
function crearMensajeFinal(resultadoFinal){
   
    seccionMensaje.innerHTML=resultadoFinal;

    botonAtaqueFuego.disabled=true;
    botonAtaqueAgua.disabled=true;
    botonAtaqueTierra.disabled=true;

    sectionSeleccionarReiniciar.style.display="block";
}
function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener("load",iniciarJuego)