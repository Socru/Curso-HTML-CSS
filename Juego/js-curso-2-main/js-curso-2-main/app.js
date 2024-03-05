
let numeroSecreto=0;
let intentos = 1;

function verificarIntento() { 
    let numUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof (numUsuario));
    console.log(numUsuario);
    console.log(numeroSecreto);
    console.log(numeroSecreto == numUsuario);
    if (numUsuario == numeroSecreto){
        asignarTextoelemento('p', `acertaste en ${intentos} ${intentos == 1 ? 'vez': 'veces'} ` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto > numeroSecreto) {
            asignarTextoelemento('p','el numero es mayor');
        } else { 
            asignarTextoelemento('p',"el numero es menor");
        }
        
        intentos++;
        limpiarCaja(); 
    }
    return;
}

function asignarTextoelemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarAleatorio() { 
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numerogenerado = Math.floor(Math.random() * 10) + 1;
    if (listaNumeroSorteado.includes(numerogenerado)) {
        
    } else {
        listaNumeroSorteado.push(numerogenerado);
        return numeroSecretoSecret;
    }
}

function condicionesIniciales() { 
    asignarTextoelemento("h1", "juego del num secreto");

    asignarTextoelemento('p', 'ingresa un numero entre 1 y 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales(); 
    documento.querySelector('#reiniciar').setAtribute('disabled', 'true');
    
}

condicionesIniciales();
