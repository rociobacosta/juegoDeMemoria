//1
function calculoImc(altura, peso){
  return peso /(altura * altura);
}

let imc = calculoImc(60,50);
console.log(imc);


//3
let cotizacionDolar = 4.80;

function conversion(dolar){
  return dolar * cotizacionDolar;
}

let valorReales = conversion(15);
  console.log(valorReales);


//4
function areaYperimetro(alto, ancho){
  let area = alto * ancho;
  let perimetro = 2 * (alto + ancho);
  console.log(`El área de la sala es ${area} y el perímetro de la misma es ${perimetro}`);
}
areaYperimetro(2,5);
 

//5
let pi = 3.14;

function areaYperimetroCirc(radio){
  let areaCirculo = pi * radio;
  let perimetroCirculo = 2 * pi * radio;
  console.log(`El área de la sala circular es ${areaCirculo} y su perímetro es ${perimetroCirculo}`);
}

areaYperimetroCirc(25);

//6
function multiplicar(numero){
  for(let i = 1; i <= 10; i++){
   let resultado  = numero * i;
   console.log(`${numero} x ${i} = ${resultado}`);
  }

}

multiplicar(5);