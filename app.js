let numero = 0;
let intentos = 0;
let numeroMaximo = 10;
let listadoNumerosGenerados = [];


function crearTexto(elemento, texto){
  let elementoDom = document.querySelector(elemento);
  elementoDom.innerHTML = texto;
  return;
}

function verificarIntentos(){

  let numeroIngresadoUsuario = parseInt(document.getElementById('verificarNumero').value);

  if(numero === numeroIngresadoUsuario){
    crearTexto('p', `Felicidades, acertaste al múmero secreto. Lo hiciste en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(numero > numeroIngresadoUsuario){
      crearTexto('p', 'El número secreto es mayor');
    }else{
     crearTexto('p', 'El número secreto es menor');
    }
    intentos++;
    limpiarCampo();
  }
  return;
}


function limpiarCampo(){
  document.querySelector('#verificarNumero').value = '';
}


function crearNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()* numeroMaximo) + 1;
  
  // console.log(numeroGenerado);
  // console.log(listadoNumerosGenerados);

  //solucion a la recursividad
  if(listadoNumerosGenerados.length == numeroMaximo){
    crearTexto('p', 'Ya se sortearon todos los números posibles');
  }else{
    if(listadoNumerosGenerados.includes(numeroGenerado)){
      return crearNumeroSecreto();
    }else{
      listadoNumerosGenerados.push(numeroGenerado);
      return numeroGenerado;
    }
  
  }

}

function iniciarJuego(){
  crearTexto('h1', 'Juego del número secreto');
  crearTexto('p', `Ingrese un número del 1 al ${numeroMaximo}`);
  numero = crearNumeroSecreto();
  intentos = 1;
  
}


function reiniciarJuego(){
  //texto tiene que reiniciarse
  //contador debe volver a 0
  //se debe volver a generar un número aleatorio
  iniciarJuego();

  //debe limpiarse el input
  limpiarCampo();

  //boton se tiene que volver a desabilitar
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


iniciarJuego();

