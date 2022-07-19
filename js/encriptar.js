let btnEncriptar = document.querySelector("#encriptar");
let imagenMensaje = document.querySelector(".imagen-mensaje"); 


btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    let ingresado = document.getElementById("texto-ingresado");
    let textoIngresado = ingresado.value;
    textoIngresado = textoIngresado.toLowerCase();

    encriptar(textoIngresado);
    imagenMensaje.style.visibility = "hidden";
    btnCopiado.style.visibility = "visible";
   
})

function encriptar(textoIngresado){
    let textoEncriptado;  
    let texto = [ ["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u", "ufat"]];
        
    for(let i = 0; i < texto.length; i++){
        if(textoIngresado.includes(texto[i][0])){
            textoIngresado = textoIngresado.replaceAll(texto[i][0], texto[i][1]);
            textoEncriptado = textoIngresado;
        }
    }
    document.getElementById("procesado").innerHTML = textoEncriptado;
    return textoEncriptado;
}



