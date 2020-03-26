var ANCHO = 600;
var ALTURA = 400;
var SCORE1 = 0;
var SCORE2=0;

function makeScore(ANCHO, ALTURA){
  this.ctx = null;

  this.score1 = SCORE1;
  this.score2 = SCORE2;

  this.ancho = ANCHO;
  this.altura = ALTURA;

  this.init =  function(ctx){
    this.reset();
    this.ctx = ctx;
  };

  this.draw = function (){
    this.ctx.font = "70px American Typewriter";
    this.ctx.fillStyle = 'gray';
    //--SCORE1:
    this.ctx.fillText(this.score1, 240,60 );
    //--SCORE2:
    this.ctx.fillText(this.score2, 320,60 );

    //-- RED:
    var i = 0;
    while (i < this.altura){
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(300, i, 1, 10)
      i += 15;
    }
  };
  this.reset = function(){
    this.score1 = 0;
    this.score2 = 0;
  }
}

function dopalas (x,y, ALTURA){
  this.ctx = null;

  this.x_ini = x;
  this.y_ini = y;

  this.ancho = 10;
  this.altura = 50;

  this.vy = 0;
  this.speed = 5; //-- Nivel de dificultad: EASY, NORMAL, HARD

  this.init = function(ctx){
    this.reset();
    this.ctx = ctx;
  };

  this.draw = function () {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.ancho, this.altura);
  };

  this.reset = function (){
    this.x = this.x_ini;
    this.y = this.y_ini;
  };

  this.update = function() {
    //-- Movimiento de la pala según el nivel de dificultad:
    this.y += this.vy*this.speed;
    //-- Para que no se salgan del canvas:
    if (this.y > ALTURA - this.altura){
      this.y = ALTURA - this.altura;
    } else if (this.y < 0){
      this.y = 0;
    }
  };
}

function dobola() {
  this.ctx = null;

  //-- Inicialmente saca el Jugador1:
  this.x_ini = 85;
  this.y_ini = 125;

  this.x = 0;
  this.y = 0;

  this.ancho = 5;
  this.altura = 5;

  this.vx = 5;
  this.vy = 2;
  this.speed = 1; //-- Nivel de dificultad: EASY, NORMAL, HARD

  this.init = function(ctx){
    this.reset();
    this.ctx = ctx;
  };

  this.draw = function () {
    this.ctx.fillStyle = 'yellow';
    this.ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    //-- BOLA CUADRADA:
    // this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.fill()
  };

  this.update = function () {
    this.x += this.vx*this.speed;
    this.y += this.vy*this.speed;

    if (this.y > ALTURA - this.altura || this.y < this.altura){
      this.vy = -this.vy;
    }
  };

  this.reset = function() {
    this.x = this.x_ini;
    this.y = this.y_ini;
  };
  }

function moverPalas(pala1, pala2) {
  window.onkeydown = (e) => {
    e.preventDefault();
    switch (e.key) {
      case 'w':
          pala1.vy = -1;
          break;
      case 's':
          pala1.vy = 1;
          break;
      case 'ArrowUp':
          pala2.vy = -1;
          break;
      case 'ArrowDown':
          pala2.vy = 1;
          break;
      default:
          break;
    }
  }
  window.onkeyup = (e) => {
    e.preventDefault();
    switch (e.key) {
      case 'w':
          pala1.vy = 0;
          break;
      case 's':
          pala1.vy = 0;
          break;
      case 'ArrowUp':
          pala2.vy = 0;
          break;
      case 'ArrowDown':
          pala2.vy = 0;
          break;
      default:
          break;
    }
  }
}

//-- Función para el REBOTE de la bola:
function pushbola(pala1, pala2, bola){
  if (bola.x <= (pala1.x + pala1.ancho) && bola.x >= pala1.x) {
    if (bola.y >= pala1.y && bola.y <= (pala1.y + pala1.altura)){
      bola.vx = -bola.vx;
    }
  };

  if ((bola.x + bola.ancho) >= pala2.x && (bola.x+ bola.ancho) <= (pala2.x + pala2.ancho)){
    if ((bola.y + bola.altura) <= (pala2.y + pala2.altura) && (bola.y + bola.altura) >= pala2.y){
      bola.vx = -bola.vx;
    }
  };
}

function restartbola(player, bola, pala1, pala2){
  //-- Marca el Jugador1 -> saca 2:
  if (player == 'Jugador1'){
    bola.x_ini = 550;
    bola.y_ini = 200;

    //ball.vx = -ball.vx;

  } else if (player == 'Jugador2'){
    bola.x_ini = 50;
    bola.y_ini = 100;

    //ball.vx = -ball.vx;
  };

  bola.reset();
  pala1.reset();
  pala2.reset();
  bola.draw();
  pala1.draw();
  pala2.draw();
}

function main(){

  var canvas = document.getElementById('display')
  canvas.width= ANCHO;
  canvas.height = ALTURA;

  var ctx = canvas.getContext("2d");

  var score = new makeScore(canvas.width, canvas.height);

  score.init(ctx);
  score.draw();

  var pala1 = new dopalas(50, 100, canvas.height);
  var pala2 = new dopalas(550, 200, canvas.height);

  pala1.init(ctx);
  pala1.draw();

  pala2.init(ctx);
  pala2.draw();

  var bola = new dobola();

  bola.init(ctx);
  bola.draw();


  var timer = null;
  var start = document.getElementById('start');

  //-- Comienza la animación!
  start.onclick = () => {
    //-- Score selected:
    var points = document.querySelector('input[name="points"]:checked').value;

    if (!timer){
      timer = setInterval(() =>{

        //-- Actualizar elementos:
        pala1.update();
        pala2.update();
        bola.update();
        //-- Limpiamos el canvas:
        ctx.clearRect(0,0,canvas.width, canvas.height);
        //-- Dibujamos:
        bola.draw();
        pala1.draw();
        pala2.draw();
        score.draw();

        moverPalas(pala1, pala2);
        pushbola(pala1, pala2, bola);

        if (bola.x > canvas.width - bola.ancho){
          score.score1++;
          //-- Saca Jugador2:
          restartbola('Jugador1', bola, pala1, pala2);

          bola.vx = -bola.vx;

        } else if (bola.x < bola.ancho){
          score.score2++;
          //-- Saca Jugador1:
          restartbola('Jugador2', bola, pala1, pala2);

          bola.vx = -bola.vx;
        }

        //-- En función de la puntuación máxima:
        if (score.score1 == points || score.score2 == points){

          if (score.score1 == points){
            alert("Player1 WINS - Congratulations!")
          } else if (score.score2 == points){
            alert("Player2 WINS - Congratulations!")
          }

          clearInterval(timer);
          timer = null;
          //-- Limpiamos el canvas:
          ctx.clearRect(0,0,canvas.width, canvas.height);
          //-- Reseteamos y dibujamos:
          bola.reset();
          pala1.reset();
          pala2.reset();
          score.reset();

          bola.draw();
          pala1.draw();
          pala2.draw();
          score.draw();
        }
      }, 20);
    }
  } //-- FIN ONCLICK;
}

  //-- ESCACIO: 32, FLECHA ARRIBA: 38, FLECHA ABAJO: 40
  //-- Para consultar más: https://keycode.info
