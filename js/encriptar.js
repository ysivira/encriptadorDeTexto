let btnEncriptar = document.querySelector("#encriptar");
let imagenMensaje = document.querySelector(".imagen-mensaje"); 
let isValido = true;

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    let ingresado = document.getElementById("texto-ingresado");
    let textoIngresado = ingresado.value;
    textoIngresado = textoIngresado.toLowerCase();
    validar();
    encriptar(textoIngresado);
    document.getElementById("texto-ingresado").value = "";   
   console.log(textoIngresado);
})

function encriptar(textoIngresado){
    let textoEncriptado;  
    let texto = [ ["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u", "ufat"]];
    if(isValido == true){

       for(let i = 0; i < texto.length; i++){
            if(textoIngresado.includes(texto[i][0])){
                textoIngresado = textoIngresado.replaceAll(texto[i][0], texto[i][1]);
                textoEncriptado = textoIngresado;
            }
        } 
        mensajeImagen.style.visibility = "hidden";
        document.getElementById("procesado").innerHTML = textoEncriptado;
        document.getElementById("desencriptar").style.visibility = "hidden";
    }    
    return textoEncriptado;
}

function validar(){
    let entrada = document.getElementById("texto-ingresado").value;

   if(entrada == ""){
    alert("Debe ingresar un texto a encriptar o desencriptar");
    isValido = false;
    }else if(entrada.match(/[A-Z0-9áéíóú]/g)){
    alert("Dato ingresado incorrecto...Favor ingresar solo letras minusculas, sin ascentos ni numeros");
    isValido = false;
   }else{
        isValido = true;
   }
}

