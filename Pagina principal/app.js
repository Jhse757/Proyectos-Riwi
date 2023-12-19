
// agregamos estilo a la imagen al seleccionarla   
function selectedImg(element){
    if (element.classList.contains('imgSelect')){
        element.classList.remove('imgSelect');

    } else{
        element.classList.add('imgSelect');
    }
}



