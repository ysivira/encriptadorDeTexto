let btnDesencriptar = document.querySelector("#desencriptar");
let mensajeImagen = document.querySelector(".imagen-mensaje"); 
let btnCopia = document.querySelector("#copiar");

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();

    let ingresado = document.getElementById("texto-ingresado");
    let textoIngresado2 = ingresado.value;
    textoIngresado2 = textoIngresado2.toLowerCase();

    desencriptar(textoIngresado2);
    mensajeImagen.style.visibility = "hidden";
    btnCopia.style.visibility = "visible";
})

function desencriptar(textoIngresado2){
    let textoDesencriptado;
    let decodificar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
   
    for (let i=0; i< decodificar.length; i++){
        if(textoIngresado2.includes(decodificar[i][0])){
            textoIngresado2 = textoIngresado2.replaceAll(decodificar[i][0],decodificar[i][1])
            textoDesencriptado = textoIngresado2;
        }
    }
    document.getElementById("procesado").innerHTML = textoDesencriptado;
    return textoDesencriptado;
}

