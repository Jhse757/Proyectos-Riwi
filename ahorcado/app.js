

let palabraSecreta = "";
let palabraAdivinada = [];
let intentosRestantes = 10;

function iniciarJuego() {
    palabraSecreta = document.getElementById("inputPalabraSecreta").value.toLowerCase();
    palabraAdivinada = Array(palabraSecreta.length).fill("_");
    intentosRestantes = 10;
    let longitudPalabra = (palabraSecreta.length);
    document.getElementById('longitudPalabra').innerText = `La palabra contiene ${longitudPalabra} letras`;
    document.getElementById("numIntentos").textContent = `Intentos restantes: ${intentosRestantes}`;
    mostrarPalabra();
   
    
}

function mostrarPalabra() {
    document.getElementById("palabraSecreta").textContent = palabraAdivinada.join(" ");
}

function adivinarLetra() {
    const letraIngresada = document.getElementById("inputPalabraAdivinar").value.toLowerCase();
    document.getElementById('inputPalabraAdivinar').value = "";

    if (letraIngresada.length !== 1 || !(/[a-z]/).test(letraIngresada)) {
        document.getElementById('mensaje').classList.remove('displayNone');
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.remove('containerMensajeGreen');
        document.getElementById('mensaje').classList.add('containerMensajeRed');
        document.getElementById('mensaje').textContent = "Ingresa una letra válida.";
        return;
    }

    if (palabraSecreta.includes(letraIngresada)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letraIngresada) {
                palabraAdivinada[i] = letraIngresada;
                document.getElementById('mensaje').classList.remove('displayNone');
                document.getElementById('mensaje').classList.remove('containerMensajeRed');
                document.getElementById('mensaje').classList.remove('containerMensajeGreen');
                document.getElementById('mensaje').classList.add('containerMensajeBlue');
                document.getElementById('mensaje').textContent =`La letra "${letraIngresada.toUpperCase()}" SI hace parte de la palabra`;
            }
        }
    } else {
        intentosRestantes--;
        document.getElementById("numIntentos").innerText = `Intentos restantes: ${intentosRestantes}`;
        document.getElementById('mensaje').classList.remove('displayNone');
        document.getElementById('mensaje').classList.remove('containerMensajeRed');
        document.getElementById('mensaje').classList.remove('containerMensajeGreen');
        document.getElementById('mensaje').classList.add('containerMensajeBlue');
        document.getElementById('mensaje').textContent =`La letra "${letraIngresada.toUpperCase()}" NO hace parte de la palabra`;
    }
    
    mostrarPalabra();

    if (intentosRestantes === 0) {
        document.getElementById('mensaje').classList.remove('displayNone');
        document.getElementById('btnReiniciar').classList.remove('displayNone');
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.remove('containerMensajeGreen');
        document.getElementById('mensaje').classList.add('containerMensajeRed');
        document.getElementById('mensaje').textContent =`¡Perdiste! La palabra correcta era: ${palabraSecreta}`;
    }
    else if (!palabraAdivinada.includes('_')) {

        document.getElementById('mensaje').classList.remove('displayNone');
        document.getElementById('btnReiniciar').classList.remove('displayNone');
        document.getElementById('mensaje').classList.remove('containerMensajeRed');
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.add('containerMensajeGreen');
        document.getElementById('mensaje').textContent=`¡Ganaste! Has adivinado la palabra: ${palabraSecreta}`;
    }
    
}

function paso1(){
    document.getElementById('bienvenida').classList.add('displayNone');
    document.getElementById('paso1').classList.remove('displayNone');
    document.getElementById('mensaje').classList.remove('displayNone');
    document.getElementById('mensaje').classList.add('containerMensajeBlue');
    document.getElementById('mensaje').innerText = "Agrega una palabra secreta para continuar";
    
}

function paso2(){
    document.getElementById('paso2').classList.remove('displayNone');
    document.getElementById('paso1').classList.add('displayNone');
    document.getElementById('containerPalabraSecreta').classList.remove('displayNone');
    document.getElementById('mensaje').classList.add('displayNone');
  
}

function reiniciarJuego(){
    palabraSecreta = "";
    palabraAdivinada = [];
    intentosRestantes = 10;

    document.getElementById('bienvenida').classList.remove('displayNone');
    document.getElementById('paso1').classList.add('displayNone');
    document.getElementById('paso2').classList.add('displayNone');
    document.getElementById('mensaje').classList.add('displayNone');
    document.getElementById('containerPalabraSecreta').classList.add('displayNone');
    document.getElementById('inputPalabraSecreta').value = "";
    document.getElementById('inputPalabraAdivinar').value = "";

    iniciarJuego()
}