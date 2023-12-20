// app.js

var allPersons = [];

function guardarUsuario() {
    // Obtenemos los valores despues de limpiar los campos
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    // Limpiamos los campos
    document.getElementById('nombres').value = "";
    document.getElementById('apellidos').value = "";
    document.getElementById('correo').value = "";

    // Crear persona
    let persona = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo
    };

    allPersons.push(persona);

    // Limpiamos la tabla antes de volver a llenarla
    var tablaUsuarios = document.getElementById('tablaUsuarios');
    tablaUsuarios.innerHTML = "";

    // Creamos una nueva fila por cada persona en el array
    allPersons.forEach(function (person, index) {
        var newRow = tablaUsuarios.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerText = person.nombres;
        cell2.innerText = person.apellidos;
        cell3.innerText = person.correo;

        // Añadimos un botón de eliminar
        var deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.innerText = "Eliminar";
        deleteButton.onclick = function () {
            eliminarUsuario(index);
        };

        cell4.appendChild(deleteButton);
    });
}

function eliminarUsuario(index) {
    // Eliminamos la persona del array
    allPersons.splice(index, 1);

    // Actualizamos la tabla eliminando la fila correspondiente
    var tablaUsuarios = document.getElementById('tablaUsuarios');
    tablaUsuarios.deleteRow(index);

    // Si deseas conservar la numeración de las filas después de la eliminación,
    // puedes volver a recorrer las filas y actualizar el contenido de la primera celda
    for (let i = index; i < tablaUsuarios.rows.length; i++) {
        tablaUsuarios.rows[i].cells[3].firstChild.onclick = function () {
            eliminarUsuario(i);
        };
    }
}

