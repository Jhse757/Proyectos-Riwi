let presupuesto = 0;
function agregarPresupuesto(){
    presupuesto = document.getElementById("inputPresupuesto").value
    document.getElementById("saldoTotal").innerText = "$" + presupuesto
    document.getElementById("inputPresupuesto").value = ""
    
}
function paso1(){
    document.getElementById('bienvenida').classList.add('displayNone');
    document.getElementById('paso1').classList.remove('displayNone');
    ocument.getElementById('mensaje').classList.remove('displayNone');
    document.getElementById('mensaje').classList.add('containerMensajeBlue');
    document.getElementById('paso1').innerHTML = "<h1>Asistente: Agrega un presupuesto para tu viaje</h1>";
}

function paso2(){
    document.getElementById('paso2').classList.remove('displayNone');
    document.getElementById('paso1').classList.add('displayNone');
}

function paso3(){
    document.getElementById('paso3').classList.remove('displayNone');
    document.getElementById('paso2').classList.add('displayNone'); 
}

function comprar(opcion){
    let costo = 0;
    let mensaje = '';

    if (opcion === 1){
        costo = 15000;
        mensaje = ("Asistente: 'Ten cuidado este producto lleva mucho tiempo en el stan y te caerà mal'");
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.remove('containerMensajeGreen');
        document.getElementById('mensaje').classList.add('containerMensajeRed');
    }
    else if (opcion === 2){
        costo = 23000
        mensaje = ("Asistente: 'Excelente decisión, estaràs llenito y contento'");
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.remove('containerMensajeRed');
        document.getElementById('mensaje').classList.add('containerMensajeGreen');

    }

    if (presupuesto >= costo){
        presupuesto -= costo;
        mostrarResultado(presupuesto, mensaje)

    } 
    else{
        document.getElementById('mensaje').classList.remove('displayNone');
        document.getElementById('mensaje').classList.remove('containerMensajeBlue');
        document.getElementById('mensaje').classList.remove('containerMensajeGreen');
        document.getElementById('mensaje').classList.add('containerMensajeRed');
        document.getElementById('mensaje').innerText = "Asistente: 'Lo siento no tienes suficiente dinero'";
    }
}

function mostrarResultado(presupuesto, mensaje){
    document.getElementById('mensaje').classList.remove('displayNone');
    document.getElementById('saldoTotal').innerText = "$" + presupuesto;
    document.getElementById('mensaje').innerText = mensaje
}

function mejorNo() {
    document.getElementById('mensaje').classList.remove('displayNone');
    document.getElementById('mensaje').classList.add('containerMensajeBlue');
    document.getElementById('mensaje').innerText = "Asistente: Tendras que comprar algo en medellìn";
}



function tamanoPrendas(){
    const medidasMax = 55 + 40 + 20;
    const medidasMin = 5;
    let tamanoCamisa = 5;
    let tamanoPantalones = 6;
    let tamanoZapato = 8;

    let tamanoCamisaActual = document.getElementById('cantidadCamisa').value;
    let camisasARestar = (tamanoCamisaActual * tamanoCamisa);
    document.getElementById('tamanoTotalCamisas').innerText = camisasARestar

    let tamanoPantalonesActual = document.getElementById('cantidadPantalones').value;
    let pantalonesARestar = (tamanoPantalonesActual * tamanoPantalones);
    document.getElementById('tamanoTotalPantalones').innerText = pantalonesARestar

    let tamanoZapatosActual = document.getElementById('CantidadZapatos').value;
    let zapatosARestar = (tamanoZapatosActual * tamanoZapato);
    document.getElementById('tamanoTotalZapatos').innerText = zapatosARestar

    let medidasTotal =  (camisasARestar + pantalonesARestar + zapatosARestar)

    if (medidasTotal < medidasMin || medidasTotal > medidasMax) {
        document.getElementById('mensajeMedidas').innerText = "Lo siento  no son permitidos"
        document.getElementById('mensajeMedidas').classList.remove('containerMensajeGreen', 'containerMensajeBlue');
        document.getElementById('mensajeMedidas').classList.add('containerMensajeRed');
    }
    else{
        document.getElementById('mensajeMedidas').innerText = "las medidas estan perfectas"
        document.getElementById('mensajeMedidas').classList.remove('containerMensajeRed');
        document.getElementById('mensajeMedidas').classList.add('containerMensajeGreen');
    }


}
