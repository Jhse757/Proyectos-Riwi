let estudiante;
let contador= 0;
let stop5 = false;
let stop2 = false;

// Se crea un lista vacia donde estaran los datos del estudiantes
function iniciar(){
    document.getElementById('crearEstudiante').classList.remove ('displayNone')
    document.getElementById('inicio').classList.add ('displayNone')
    estudiante = {}
}

// Se guardan los datos en la lista
function crearEstudiante(){
document.getElementById('crearEstudiante').classList.add ('displayNone')
document.getElementById('materias').classList.remove ('displayNone')

estudiante.nombre = document.getElementById('inputName').value;
estudiante.edad = document.getElementById('inputEdad').value;
estudiante.familia = document.getElementById('inputFamilia').value;
estudiante.linaje = document.getElementById('inputLinaje').value;
estudiante.casa = document.getElementById('inputCualidades').value;
// Se limpian los campos
document.getElementById('inputName').value  = ""
document.getElementById('inputEdad').value  = ""
document.getElementById('inputFamilia').value  = ""
document.getElementById('inputLinaje').value  = ""
document.getElementById('inputCualidades').value  = ""

console.log(estudiante);

alert('Estudiante creado con exito');
}

// Creamos una clase para las clases dictadas en el colegio 
class clases {
constructor (materia, profesor, horario){
    this.clase = {
        "materia" : materia,
        "profesor" : profesor,
        "horario" : horario
    }
}
getClase(){
    return this.clase
}
}

// variables con clases del colegio
const materia1 = new clases("Transformaciones","Kevin Slughorn","6:00am - 8:00am")
const materia2 = new clases("Herbologia","Maria Umbridge","8:00am - 9:00am")
const materia3 = new clases("Pociones","Liliana McGonagall","9:00am - 10:00am")
const materia4 = new clases("Historia De Magia", "Ronald Sprout", "10:00am - 12:00pm")
const materia5 = new clases("Encantamientos", "Jackie", "1:00pm - 3:00pm")
const materia6 = new clases("Defensa Contra Las Artes Oscuras", "Robinson Snape", "3:00pm - 5:00pm")
const materia7 = new clases("Animales Magicos", "David Filch", "5:00pm - 7:00pm")


// agregamos estilo a la imagen al seleccionarla   
function selectedImg(element){
    if (element.classList.contains('imgSelect')){
        element.classList.remove('imgSelect');

    } else{
        element.classList.add('imgSelect');
    }
}



// generamos una tabla con java que muestra las clases seleccionadas
function seleccionaClase(){
    if(contador == 0){
        const app = document.getElementById('app');
        /* Container */
        let container = document.createElement('div');
        container.classList.add("container");
        app.appendChild(container);

        /* Table */
        let table = document.createElement('table');
        table.classList.add("table");
        container.appendChild(table);

        /* thead */
        let thead = document.createElement('thead');
        table.appendChild(thead);

        /* tr */
        let tr = document.createElement('tr');
        thead.appendChild(tr);

        /* th col-1*/
        th = document.createElement('th');
        th.setAttribute("scope", "col");
        textTh = document.createTextNode("Profesor(a)");
        th.appendChild(textTh);
        tr.appendChild(th);

        /* th col-2*/
        th = document.createElement('th');
        th.setAttribute("socpe", "col");
        textTh = document.createTextNode('Materia');
        th.appendChild(textTh);
        tr.appendChild(th);

        /* th col-3*/
        th = document.createElement('th');
        th.setAttribute("scope", "col");
        textTh = document.createTextNode('Horario');
        th.appendChild(textTh);
        tr.appendChild(th);

        let tbody = document.createElement('tbody');
        tbody.setAttribute('id','tbody');
        table.appendChild(tbody);
    }
    contador++;
}

function selecionClase(elemento){
    const clase = elemento.querySelector('div')
    const estadoSeleccion = clase.getAttribute('data-selected')

    if (estadoSeleccion === 'false'){
        clase.setAttribute('data-selected', 'true')
        encantamientos()
        clase.setAttribute('onclick', 'seleccionaClase')
        alert('Hola')
    }

    else{
        clase.setAttribute('data-selected', 'false')
        alert('chao')
    }
}

function encantamientos(){
    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia1.getClase().materia)    

    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia1.getClase().profesor)

    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia1.getClase().horario)
    tr.appendChild(th);

    tr = document.createElement('tr');
    tbody.appendChild(tr);    
}

function pociones(){
    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia2.getClase().materia)
    tr.appendChild(th);

    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia2.getClase().profesor)
    tr.appendChild(th);

    th = document.createElement('th');
    th.setAttribute("scope", "row")
    th.innerText = (materia2.getClase().horario)
    tr.appendChild(th);
}

/* function mostrarTabla(){
    document.getElementById('table').classList.remove('displayNone');
}
 */