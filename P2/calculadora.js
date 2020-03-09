function main() {
  var  botonuno: document.getElementById('botonuno');
  var  botondos: document.getElementById('botondos');
  var  botontres: document.getElementById('botontres');
  var  botoncuatro: document.getElementById('botoncuatro');
  var  botoncinco: document.getElementById('botoncinco');
  var  botonseis: document.getElementById('botonseis');
  var  botonsiete: document.getElementById('botonsiete');
  var  botonocho: document.getElementById('botonocho');
  var  botonnueve: document.getElementById('botonnueve');
  var  botoncero: document.getElementById('botoncero');
  var  botonac: document.getElementById('botonac');
  var  botondividir: document.getElementById('botondividir');
  var  botonmultiplicar: document.getElementById('botonmultiplicar');
  var  botonrestar: document.getElementById('botonrestar');
  var  botonsumar: document.getElementById('botonsumar');
  var  botonigual: document.getElementById('botonigual');
  var operando1;
  var operando2;
  var operacion;

  btonuno.onclick = () => {
    display = document.getElementById('display')
      display.innerHTML +="1"
    }
  botondos.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="2"
  }
  botontres.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="3"
  }
  botoncuatro.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="4"
  }
  botoncinco.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="5"
  }
  botonseis.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="6"
  }
  botonsiete.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="7"
  }
  botonocho.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="8"
  }
  botonnueve.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="9"
  }
  botoncero.onclick = () => {
    display = document.getElementById('display')
    display.innerHTML +="0"
  }
  botonac.onclick = () => {
    operab.resetear();
  }
  botondividir.onclick = () => {
    display = document.getElementById('display')
    operando1 = display.innerHTML;
    operacion = "/";
    display.innerHTML = "";
  }
  botonmultiplicar.onclick = () => {
    display = document.getElementById('display')
    operando1 = display.innerHTML;
    operacion = "*";
    display.innerHTML = "";
  }
  botonrestar.onclick = () => {
    display = document.getElementById('display')
    operando1 = display.innerHTML;
    operacion = "-";
    display.innerHTML = "";
  }
  botonsumar.onclick = () => {
    display = document.getElementById('display')
    operando1 = display.innerHTML;
    operacion = "+";
    display.innerHTML = "";
  }
  botonigual.onclick = () => {
    display = document.getElementById('display')
    operando2 = display.innerHTML;
    operandoresultado();
  }
  function resetear(){
    display = document.getElementById('display')
    display.innerHTML = "";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
  }

  function resultado(){
    var final = 0;
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
    display.innerHTML = final;
  }
}
