const sectionSeleccionarAtaque=document.getElementById("selecionar-ataque");
const sectionSeleccionarReiniciar=document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const contenedorDeBotones=document.getElementById("botones")
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
let ataqueJuagador = [];
let ataqueEnemigo=[];
let vidaJugador=3;
let vidaEnemigo=3;
let opcionesDeMokepon;
let mascotaJugador;
let opcionesDeAatque;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let botonAtaqueFuego;
let botonAtaqueAgua;
let botonAtaqueTierra;
let botones=[];
let ataquesMokeponEnemigo;

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

        inputHipodoge = document.getElementById("Hipodoge");
        inputCapipepo = document.getElementById("Capipepo");
        inputRatigueya = document.getElementById("Ratigueya");
        });

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador);




   botonReiniciarJuego.addEventListener("click",reiniciarJuego);
    
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display="none";
    sectionSeleccionarAtaque.style.display="flex";


    if (inputHipodoge.checked){
        spanMascotaJuagador.innerHTML=inputHipodoge.id;
        mascotaJugador=inputHipodoge.id;
    }else if (inputCapipepo.checked){
        spanMascotaJuagador.innerHTML=inputCapipepo.id;
        mascotaJugador=inputCapipepo.id;
    }else if (inputRatigueya.checked){
        spanMascotaJuagador.innerHTML=inputRatigueya.id;
        mascotaJugador=inputRatigueya.id;
    }else{
        alert ("Debes seleccionar una mascota")
    }
    extraerAtaque(mascotaJugador);
    seleccionarMascotaEnemigo();

}

function extraerAtaque(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
       if (mascotaJugador===mokepones[i].nombre) {
         ataques=mokepones[i].ataques;
       }
        
    }
    mostrarAtaques(ataques);

}

function mostrarAtaques(ataques){

     ataques.forEach((ataque) => {
        opcionesDeAatque=`<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>`;
        contenedorDeBotones.innerHTML += opcionesDeAatque;
        
     });

    botonAtaqueFuego = document.getElementById("boton-fuego");
    botonAtaqueAgua = document.getElementById("boton-agua");
    botonAtaqueTierra = document.getElementById("boton-tierra");
    botones = document.querySelectorAll(".BAtaque");
    


}

function secuenciaDeAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent==="🔥 "){
                ataqueJuagador.push("FUEGO");
                console.log(ataqueJuagador);
                boton.style.background="#112f58";
            }else if(e.target.textContent==="💧 "){
                ataqueJuagador.push("AGUA");
                console.log(ataqueJuagador);
                boton.style.background="#112f58";
            }else{
                ataqueJuagador.push("TIERRA");
                console.log(ataqueJuagador);
                boton.style.background="#112f58";
            }
            ataqueEnemigoAleatorio()
        })
    });
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatorio=aleatorio(0,mokepones.length-1);


    spanMascotaEnemigo.innerHTML=mokepones[mascotaAleatorio].nombre;

    ataquesMokeponEnemigo=mokepones[mascotaAleatorio].ataques;
    secuenciaDeAtaque();


}


function ataqueEnemigoAleatorio(){

    let ataqueAleatorio=aleatorio(0,ataquesMokeponEnemigo.length-1);

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO");
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA");
    }else{
        ataqueEnemigo.push("TIERRA");
    }
    console.log(ataqueEnemigo);
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