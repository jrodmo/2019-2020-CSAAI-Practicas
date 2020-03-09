var valor1;
var valor2;
var operacion;

function main(){
  var uno = document.getElementById('uno')
  var dos = document.getElementById('dos')
  var tres = document.getElementById('tres')
  var cuatro = document.getElementById('cuatro')
  var cinco = document.getElementById('cinco')
  var seis = document.getElementById('seis')
  var siete = document.getElementById('siete')
  var ocho = document.getElementById('ocho')
  var nueve = document.getElementById('nueve')
  var cero = document.getElementById('cero')
  var ac = document.getElementById('ac')
  var sumar = document.getElementById('sumar')
  var restar = document.getElementById('restar')
  var multiplicar = document.getElementById('multiplicar')
  var dividir = document.getElementById('dividir')
  var igual = document.getElementById('igual')

  uno.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="1"
  }
  dos.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "2"
  }
  tres.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "3"
  }
  cuatro.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "4"
  }
  cinco.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "5"
  }
  seis.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "6"
  }
  siete.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "7"
  }
  ocho.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "8"
  }
  nueve.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "9"
  }
  cero.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML += "0"
  }
  ac.onclick = () => {
    display = document.getElementById('display')
    resetear()
  }
  sumar.onclick = () => {
    display = document.getElementById('display')
    valor1 = display.innerHTML;
    operacion = "+";
    display.innerHTML = "";
  }
  restar.onclick = () => {
    display = document.getElementById('display')
    valor1 = display.innerHTML;
    operacion = "-";
    display.innerHTML = "";
  }
  multiplicar.onclick = () => {
    display = document.getElementById('display')
    valor1 = display.innerHTML;
    operacion = "*";
    display.innerHTML = "";
  }
  dividir.onclick = () => {
    display = document.getElementById('display')
    valor1 = display.innerHTML;
    operacion = "/";
    display.innerHTML = "";
  }
  igual.onclick = () => {
  display = document.getElementById('display')
  valor2 = display.innerHTML;
  resultado();
  }
  function clean(){
    display.innerHTML = "";
  }
  function resetear(){
    clean();
    display = document.getElementById('display')
    valor1 = 0;
    valor2 = 0;
    operacion = "";
  }

  function resultado(){
    var resul = 0;
    switch(operacion){
      case "+":
        resul = parseFloat(valor1) + parseFloat(valor2);
        break;
      case "-":
        resul = parseFloat(valor1) - parseFloat(valor2);
        break;
      case "*":
        resul = parseFloat(valor1) * parseFloat(valor2);
        break;
      case "/":
        resul = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    resetear();
    display.innerHTML = resul;
  }
}
