var allPersons = [];
function guardarUsuario(){
    // Otener los valores despues de limpiar los campos
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    //Limpiar los campos
    document.getElementById('nombres').value = "";
    document.getElementById('apellidos').value = "";
    document.getElementById('correo').value = "";

    // Crear la persona
    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }

    // Agregar la persona al array
    allPersons.push(persona);

    var newRow = document.createElement('tr');

    allPersons.forEach(function(person){
        document.getElementById('resNombre').innerText = person.nombres;
        document.getElementById('resApellido').innerText = person.apellidos;
        document.getElementById('resCorreo').innerText = person.correo;
    })
}
console.log(allPersons);

