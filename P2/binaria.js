var valor1;
var valor2;
var operacion;

function main(){
  var uno = document.getElementById('uno')
  var cero = document.getElementById('cero')
  var ac = document.getElementById('ac')
  var sumar = document.getElementById('sumar')
  var restar = document.getElementById('restar')
  var multiplicar = document.getElementById('multiplicar')
  var dividir = document.getElementById('dividir')
  var igual = document.getElementById('igual')
  var display = document.getElementById('display')
  var display1 = document.getElementById('display1')
  var display2 = document.getElementById('display2')

  uno.onclick = () => {
    display.innerHTML +="1"
  }
  cero.onclick = () => {
    display.innerHTML += "0"
  }

  ac.onclick = () => {
    valor1 = "";
    operacion = "";
    valor2 = 0;
    display1.innerHTML = "";
    display.innerHTML = "";
  }
  sumar.onclick = () => {
    valor1 = display.innerHTML;
    console.log(valor1);
    operacion = "+";
    display.innerHTML = "";
  }
  restar.onclick = () => {
    valor1 = display.innerHTML;
    console.log(valor1);
    operacion = "-";
    display.innerHTML = "";
  }
  multiplicar.onclick = () => {
    valor1 = display.innerHTML;
    console.log(valor1);
    operacion = "*";
    display.innerHTML = "";
  }
  dividir.onclick = () => {
    valor1 = display.innerHTML;
    console.log(valor1);
    operacion = "/";
    display.innerHTML = "";
  }
  igual.onclick = () => {
    valor2 = display.innerHTML;
    console.log(operacion);
    console.log(valor2);
    resolver(operacion, valor1, valor2);
    valor1 = 0;
    operacion = "";
    valor2 = 0;
    display1.innerHTML = resultado;
    display2.innerHTML = resultado1;
    display.innerHTML = "";
  }
  function resolver(operacion, operando1, operando2){
  resultado = 0;
  resultado1 = 0;
  switch(operacion) {
   case "+":
       resultado = parseInt(valor1, 2) + parseInt(valor2 , 2);
       resultado1 = resultado;
       break;
   case "-":
       resultado = parseInt(valor1, 2) - parseInt(valor2, 2);
       break;
   case "*":
       resultado = parseInt(valor1, 2) * parseInt(valor2, 2);
       break;
   case "/":
       resultado = parseInt(valor1, 2 ) / parseInt(valor2, 2);
       break;
  }
  resultado = resultado.toString(2);
  resultado1 = parseInt(resultado1, 10);
  resultado1 = resultado1.toString(10);
  console.log(resultado);
  console.log(resultado1);
}
}
