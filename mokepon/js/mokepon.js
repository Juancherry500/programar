const sectionSeleccionarAtaque=document.getElementById("selecionar-ataque");
const sectionSeleccionarReiniciar=document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const contenedorDeBotones=document.getElementById("botones")
const botonReiniciarJuego=document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota=document.getElementById("selecionar-mascotas");
const spanMascotaJuagador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo=document.getElementById("mascota-enemigo");
const spanVictoriaJugador=document.getElementById("victoria-jugador");
const spanVictoriaEnemigo=document.getElementById("victoria-enemigo")
const seccionMensaje=document.getElementById("resultado");
const ataqueDelJugador=document.getElementById("ataque-Del-Jugador");
const ataqueDelEnemigo=document.getElementById("ataque-Del-Enemigo");
const contenedorDeTarjetas=document.getElementById("contenedorDeTarjetas");
const sectionVerMapas=document.getElementById("ver-mapas");
const mapa=document.getElementById("mapa");


let mokepones=[];
let ataqueJuagador = [];
let ataqueEnemigo=[];
let victoriasJugador=0;
let victoriasEnemigo=0;
let vidaJugador=3;
let vidaEnemigo=3;
let opcionesDeMokepon;
let mascotaJugador;
let mascotaJugadorObjeto;
let opcionesDeAatque;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let botonAtaqueFuego;
let botonAtaqueAgua;
let botonAtaqueTierra;
let botones=[];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let ataquesMokeponEnemigo;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground= new Image();
mapaBackground.src="./assets/mokemap.png";

class Mokepon{
    constructor(nombre, foto, vida,mapaFoto, x=10, y=10){
        this.nombre=nombre;
        this.foto=foto;
        this.vida=vida;
        this.ataques=[];
        this.x=x;
        this.y=y;
        this.ancho=50;
        this.alto=50;
        this.mapaFoto= new Image();
        this.mapaFoto.src=mapaFoto;
        this.velocidadX=0;
        this.velocidadY=0;
    }
    pintarPersonajes(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        );
    }
}

let hipodoge= new Mokepon("Hipodoge","./assets/hipodogue.webp",5,"./assets/Cabezahipodoge.png");
let capipepo= new Mokepon("Capipepo","./assets/capipepo.webp",5,"./assets/Cabezacapipepo.png");
let ratigueya= new Mokepon("Ratigueya","./assets/ratigueya.webp",5,"./assets/Cabezaratigueya (1).webp");
let hipodogeEnemigo= new Mokepon("Hipodoge","./assets/hipodogue.webp",5,"./assets/Cabezahipodoge.png",100,350);
let capipepoEnemigo= new Mokepon("Capipepo","./assets/capipepo.webp",5,"./assets/Cabezacapipepo.png",400,250);
let ratigueyaEnemigo= new Mokepon("Ratigueya","./assets/ratigueya.webp",5,"./assets/Cabezaratigueya (1).webp",400,150);

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
    sectionVerMapas.style.display="none";


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
    //sectionSeleccionarAtaque.style.display="flex";
    sectionSeleccionarReiniciar.style.display="none";
  


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
    sectionVerMapas.style.display="flex";
    iniciarMapa()
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
                boton.disabled=true;
            }else if(e.target.textContent==="💧 "){
                ataqueJuagador.push("AGUA");
                console.log(ataqueJuagador);
                boton.style.background="#112f58";
                boton.disabled=true;
            }else{
                ataqueJuagador.push("TIERRA");
                console.log(ataqueJuagador);
                boton.style.background="#112f58";
                boton.disabled=true;
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
    iniciarCombate()
}

function iniciarCombate(){
    if(ataqueJuagador.length===5){
        combate()
    }
}

function indexAmbosOponentes(jugdor,enemigo){
    indexAtaqueJugador=ataqueJuagador[jugdor]
    indexAtaqueEnemigo=ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < ataqueJuagador.length; index++) {
        if (ataqueJuagador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index);
            crearMensaje("EMPATE");
        }else if (ataqueJuagador[index]==="FUEGO" && ataqueEnemigo[index]==="TIERRA"){
            indexAmbosOponentes(index,index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVictoriaJugador.innerHTML=victoriasJugador;
        }else if (ataqueJuagador[index]==="AGUA" && ataqueEnemigo[index]==="FUEGO"){
            indexAmbosOponentes(index,index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVictoriaJugador.innerHTML=victoriasJugador;
        }else if (ataqueJuagador[index]==="TIERRA" && ataqueEnemigo[index]==="AGUA"){
            indexAmbosOponentes(index,index);
            crearMensaje("GANASTE");
            victoriasJugador++
            spanVictoriaJugador.innerHTML=victoriasJugador;
        }else{
            indexAmbosOponentes(index,index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++
            spanVictoriaEnemigo.innerHTML=victoriasEnemigo;
        }
    }

  
    revisarVictorias()
}
function revisarVictorias(){
    if (victoriasJugador===victoriasEnemigo){
        crearMensajeFinal("ESTO FUE UN EMPATE");
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES, HAS DERROTADO A TU ENEMIGO");
    }else{
        crearMensajeFinal("MALA SUERTE HAS PERDIDO");
    }
}
function crearMensaje(resultadoDeCombate){

    let parrafoataqueDelJugador = document.createElement("p");
    let parrafoataqueDelEnemigo = document.createElement("p");

    seccionMensaje.innerHTML=resultadoDeCombate;
    parrafoataqueDelJugador.innerHTML=indexAtaqueJugador;
    parrafoataqueDelEnemigo.innerHTML=indexAtaqueEnemigo;

    ataqueDelJugador.appendChild(parrafoataqueDelJugador);
    ataqueDelEnemigo.appendChild(parrafoataqueDelEnemigo);

}
function crearMensajeFinal(resultadoFinal){

   
    seccionMensaje.innerHTML=resultadoFinal;

    sectionSeleccionarReiniciar.style.display="block";
}
function reiniciarJuego(){
    location.reload();
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0,0,mapa.width,mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );

    capipepoEnemigo.pintarPersonajes();
    hipodogeEnemigo.pintarPersonajes();
    ratigueyaEnemigo.pintarPersonajes();
    mascotaJugadorObjeto.pintarPersonajes();

    if(mascotaJugadorObjeto.velocidadX !==0 || mascotaJugadorObjeto.velocidadY !==0){
        revisarColicion(hipodogeEnemigo);
        revisarColicion(capipepoEnemigo);
        revisarColicion(ratigueyaEnemigo);
    } 
 
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY= - 5;
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX= - 5;
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5;
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX= 5;
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0;
    mascotaJugadorObjeto.velocidadY=0;

}

function sePrecionoUnaTecla(event){
    switch (event.key) {
        case  "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowLeft":
            moverIzquierda()
            break;
        case "ArrowRight":
            moverDerecha()
            break;
        case  "w":
            moverArriba()
            break;
        case "s":
            moverAbajo()
            break;
        case "a":
            moverIzquierda()
            break;
        case "d":
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa(){
    mapa.width=600;
    mapa.height=400;
    mascotaJugadorObjeto= obtenerObjetoMacota();
    intervalo = setInterval(pintarCanvas,50);
    window.addEventListener("keydown", sePrecionoUnaTecla);
    window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMacota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador===mokepones[i].nombre) {
          return mokepones[i];
        }
         
     }
}

function revisarColicion(enemigo){
    const arribaEnemigo= enemigo.y;
    const abajoEnemigo=enemigo.y + enemigo.alto;
    const derechaEnemigo= enemigo.x + enemigo.ancho;
    const izquierdaEnemigo=enemigo.x;
    const arribaMascota= mascotaJugadorObjeto.y;
    const abajoMascota=mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota= mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota=mascotaJugadorObjeto.x;
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        izquierdaMascota > derechaEnemigo ||
        derechaMascota < izquierdaEnemigo
        ){
            return;
    }
    detenerMovimiento();
    alert("Hay colicion "+ enemigo.nombre);
}
window.addEventListener("load",iniciarJuego)