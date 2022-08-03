let btnDesencriptar = document.querySelector("#desencriptar");
let mensajeImagen = document.querySelector(".imagen-mensaje"); 
let btnCopia = document.getElementById("#copiar");

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
   
    let ingresado = document.getElementById("texto-ingresado");
    let textoIngresado2 = ingresado.value;
    textoIngresado2 = textoIngresado2.toLowerCase();
    validar();
    desencriptar(textoIngresado2);
    ingresado.value.innerHTML  = "";
});

function desencriptar(textoIngresado2){
    let textoDesencriptado;
    let decodificar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
   
    if(isValido == true){
        for (let i=0; i< decodificar.length; i++){
            if(textoIngresado2.includes(decodificar[i][0])){
                textoIngresado2 = textoIngresado2.replaceAll(decodificar[i][0],decodificar[i][1])
                textoDesencriptado = textoIngresado2;
            }
        }
    mensajeImagen.style.visibility = "hidden";
    document.getElementById("procesado").innerHTML = textoDesencriptado;
    document.getElementById("texto-ingresado").value = "";
    document.getElementById("encriptar").style.visibility = "hidden";
    }
    
    return textoDesencriptado;
}

function copy(){
    var content = document.getElementById("procesado").innerHTML;
    if(!content == ""){
        navigator.clipboard.writeText(content)
            .then(() => {
            alert("Texto copiado con exito");
        });
    mensajeImagen.style.visibility = "visible";    
    }  
    
    document.getElementById("procesado").innerHTML = "";
    document.getElementById("texto-ingresado").value = "";
    document.getElementById("desencriptar").style.visibility = "visible";
    document.getElementById("encriptar").style.visibility = "visible";
}

