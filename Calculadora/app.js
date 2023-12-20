function operaciones(){
    let operador = document.getElementById('operacion').value;
    let dato1 = document.getElementById('dato1').value
    let dato2 = document.getElementById('dato2').value
    document.getElementById('dato1').value = "";
    document.getElementById('dato2').value = "";
    document.getElementById('operacion').value = "";


    if (operador != "" && dato1 != "" && dato2 != ""){
        if (operador == '+'){
        var ejecucion = (parseInt(dato1) + parseInt(dato2));
        } 
        else if(operador == '-'){
            var ejecucion = (parseInt(dato1) - parseInt(dato2));
        } 
        else if(operador == '*'){
            var ejecucion = (parseInt(dato1) * parseInt(dato2));
        } 
        else if(operador == '/'){
            if (dato1 || dato2 == 0){
                alert("No es posible dividir por cero")
                return
            }
            else{
            var ejecucion = (parseInt(dato1) / parseInt(dato2));
            }
        } else {
            (operador == '**')
            var ejecucion = (parseInt(dato1) ** parseInt(dato2));
        }
    }

    else{ 
        if (select == ""){
            document.getElementById("select").focus()
            document.getElementById("dato2").className('form-control is-invalid')
        }
        else if (dato1 == ""){
            document.getElementById("dato1").focus()
        } 
        else{
            document.getElementById("dato2").focus()
        }
    }

        resultado.innerHTML = `El resultado de la operaciòn es: ${dato1} ${operador} ${dato2} = ${ejecucion}`
    }

