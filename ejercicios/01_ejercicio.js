//1
function saludo (){
  console.log('Hola mundo!');
  return;
}

saludo();

//2
function saludoPersonalizado(nombre){
  console.log(`Hola ${nombre} `);
  return;
}

saludoPersonalizado('Martín');

//3
function doble(numeroDoble){
  return numeroDoble * 2
}
 let calculoDoble = doble(6);
 console.log(calculoDoble);

//4
function promedio(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
}

let calculoPromedio = promedio(15,6,1)
console.log(calculoPromedio);

//5
function mayorQue(num1, num2){
 return num1 > num2 ? num1 : num2;
}

let calcularMayor = mayorQue(15,7);
console.log(calcularMayor);


//6
function multiplicar(num1){
  return num1 * num1;
}

let calculoMultiplicacion = multiplicar(5);
console.log(calculoMultiplicacion);

