var operando1;
var operando2;
var operacion;
function main() {
  var  uno= document.getElementById("uno");
  var  dos= document.getElementById("dos");
  var  tres= document.getElementById("tres");
  var  cuatro= document.getElementById("cuatro");
  var  cinco= document.getElementById("cinco");
  var  seis= document.getElementById("seis");
  var  siete= document.getElementById("siete");
  var  ocho= document.getElementById("ocho");
  var  nueve= document.getElementById("nueve");
  var  cero= document.getElementById("cero");
  var  ac= document.getElementById("ac");
  var  dividir= document.getElementById("dividir");
  var  multiplicar= document.getElementById("multiplicar");
  var  restar= document.getElementById("restar");
  var  sumar= document.getElementById("sumar");
  var  igual= document.getElementById("igual");
  var display= document.getElementById("resultado");

  uno.onclick = function()  {
    display.innerHTML = display.innerHTML + "1";
    }
  dos.onclick = function()  {
    display.innerHTML = display.innerHTML + "2";
  }
  tres.onclick = function() {
    display.innerHTML = display.innerHTML + "3";
  }
  cuatro.onclick = function()  {
    display.innerHTML = display.innerHTML + "4";
  }
  cinco.onclick = function()  {
    display.innerHTML = display.innerHTML + "5";
  }
  seis.onclick = function()  {
    display.innerHTML = display.innerHTML + "6";
  }
  siete.onclick = function()  {
    display.innerHTML = display.innerHTML + "7";
  }
  ocho.onclick = function()  {
    display.innerHTML = display.innerHTML + "8";
  }
  nueve.onclick = function()  {
    display.innerHTML = display.innerHTML + "9";
  }
  cero.onclick = function()  {
    display.innerHTML = display.innerHTML + "0";
  }
  ac.onclick = function()  {
    resetear();
  }
  dividir.onclick = function() {
    operando1 = display.innerHTML;
    operacion = "/";
    display.innerHTML = "";
  }
  multiplicar.onclick = function() {
    operando1 = display.innerHTML;
    operacion = "*";
    display.innerHTML = "";
  }
  restar.onclick = function()  {
    operando1 = display.innerHTML;
    operacion = "-";
    display.innerHTML = "";
  }
  sumar.onclick = function() {
    operando1 = display.innerHTML;
    operacion = "+";
    display.innerHTML = "";
  }
  igual.onclick = function() {
    operando2 = display.innerHTML;
    resultado();
  }
  function resetear(){
    display.innerHTML = "";
    operando1 = 0;
    operando2 = 0;
    operando = "";
  }

  function resultado(){
    var resul = 0;
    switch(operacion){
      case "+":
        resul = parseFloat(operando1) + parseFloat(operando2);
        break;
      case "-":
        resul = parseFloat(operando1) - parseFloat(operando2);
        break;
      case "*":
        resul = parseFloat(operando1) * parseFloat(operando2);
        break;
      case "/":
        resul = parseFloat(operando1) / parseFloat(operando2);
        break;
    }
    resetear();
    display.innerHTML = resul;
  }
}
